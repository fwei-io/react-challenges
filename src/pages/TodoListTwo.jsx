import { useState, useEffect } from "react";
import PageData from '../helper/data/PageData';
import CodeBlock from "../components/CodeBlock";

export default function TodoListTwo() {
    const page = PageData.filter((element) => element.path == "/TodoListTwo")[0]
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState(false);
    const [newTodo, setNewTodo] = useState('');
  
    const handleNewTodoChange = (e) => {
        setNewTodo(e.target.value);
    };
  
    const handleNewTodoAdd = () => {
        setTodos([...todos, { text: newTodo, isDone: false, isEditable: true }]);
        setNewTodo('');
    };
  
    const handleToggleDone = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].isDone = !updatedTodos[index].isDone;
        setTodos(updatedTodos);
    };
  
    const handleEditStatus = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].isEditable = !updatedTodos[index].isEditable;
        setTodos(updatedTodos);
    }

    const handleEdit = (index, text) => {
        const updatedTodos = [...todos];
        updatedTodos[index].text = text;
        setTodos(updatedTodos);
    };

    const handleDelete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            setEdit(false)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap mb-6'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left
                             text-slate-900 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <div className="w-1/2 bg-white shadow-md mx-auto rounded px-8 pt-6 pb-8 mb-10 min-h-[400px] text-center justify-center">
                <input type="text"
                       value={newTodo}
                       onChange={handleNewTodoChange}
                       className="shadow appearance-none border rounded py-2 px-3 text-gray-700
                                  leading-tight focus:outline-none focus:shadow-outline w-10/12"
                />
                <button onClick={handleNewTodoAdd}
                        className="bg-blue-500 hover:bg-blue-700 text-white
                                   py-2 px-3 rounded m-2 w-1/12">
                                    +
                </button>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}
                            className="w-full text-center justify-center"
                        >
                            <input
                                type="text"
                                value={todo.text}
                                onChange={(e) => handleEdit(index, e.target.value)}
                                onDoubleClick={(e) => handleToggleDone(index)}
                                onKeyDown={(e) => e.key === 'Enter' && handleEditStatus(index)}
                                className="border rounded py-2 px-3 text-gray-700 w-8/12
                                        leading-tight focus:outline-none focus:shadow-outline"
                                readOnly={todo.isEditable}
                                style={{ textDecoration: todo.isDone ? 'line-through' : ''}}
                            />
                            <button onClick={() => handleEditStatus(index)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white w-1/12
                                    py-2 px-2 rounded m-2 text-xs">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(index)}
                                    className="bg-red-500 hover:bg-red-700 text-white w-1/12
                                    py-2 px-2 rounded m-2 text-xs font-bold"
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
                </div>
            <CodeBlock code={code} />
        </div>
    );
};



const code = `

`