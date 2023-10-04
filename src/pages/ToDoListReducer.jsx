import { useReducer } from "react"
import PageData from '../helper/data/PageData'
import CodeBlock from "../components/CodeBlock"

const INITIAL_STATE = {
    value: "",
    isAddDisabled: true,
    items: []
};

function preventDuplicate(items, value) {
    return items.indexOf(value) > -1 && value.length > 1 ? items : [...items, value];
}

function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_INPUT":
            return {
                ...state,
                isAddDisabled:
                !state.items.indexOf(state.value) || action.payload.length < 5,
                value: action.payload
            };

        case "ADD_ITEM":
            if (state.value.length < 5) {
                return state;
            }
            return {
                ...state,
                value: "",
                isAddDisabled: true,
                items: preventDuplicate(state.items, state.value)
            };

        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter(item => action.payload !== item)
            };

        default:
        return state;
    }
}

export default function ToDoListReducer() {
    const page = PageData.filter((element) => element.path == "/ToDoListReducer")[0]
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    function handleAdd() {
        dispatch({ type: "ADD_ITEM" });
    }

    function handleInput(value) {
        dispatch({ type: "UPDATE_INPUT", payload: value });
    }

    function handleRemoveItem(item) {
        dispatch({ type: "REMOVE_ITEM", payload: item });
    }

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900
                 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <div className='mt-36 mb-60 mx-auto justify-center'>
                <div className='w-full justify-center items-center text-center flex flex-wrap mb-4'>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                                      focus:outline-none focus:shadow-outline" type="text" value={state.value} 
                           placeholder="Add new task, min 5 characters" onChange={event => handleInput(event.target.value)} />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" 
                            onClick={handleAdd} disabled={state.isAddDisabled}>
                        Add
                    </button>
                </div>
                <div className='w-full justify-center items-center text-center flex flex-wrap mb-4'>
                    <ul className="w-full space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 list-none">
                        {state.items.map(item => (
                            <li className=" border-solid border-cyan-800 border-2 px-5 rounded-md" key={item} 
                                onClick={() => handleRemoveItem(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <CodeBlock code={code} />
        </div>
    );
}


const code = `
import { useReducer } from "react"

const INITIAL_STATE = {
    value: "",
    isAddDisabled: true,
    items: []
};

function preventDuplicate(items, value) {
    return items.indexOf(value) > -1 && value.length > 1 ? items : [...items, value];
}

function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_INPUT":
            return {
                ...state,
                isAddDisabled:
                !state.items.indexOf(state.value) || action.payload.length < 5,
                value: action.payload
            };

        case "ADD_ITEM":
            if (state.value.length < 5) {
                return state;
            }
            return {
                ...state,
                value: "",
                isAddDisabled: true,
                items: preventDuplicate(state.items, state.value)
            };

        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter(item => action.payload !== item)
            };

        default:
        return state;
    }
}

export default function ToDoListReducer() {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    function handleAdd() {
        dispatch({ type: "ADD_ITEM" });
    }

    function handleInput(value) {
        dispatch({ type: "UPDATE_INPUT", payload: value });
    }

    function handleRemoveItem(item) {
        dispatch({ type: "REMOVE_ITEM", payload: item });
    }

    return (
        <div className='w-full flex flex-wrap'>
            <div className='mt-36 mb-60 mx-auto justify-center'>
                <div className='w-full justify-center items-center text-center flex flex-wrap mb-4'>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                                      focus:outline-none focus:shadow-outline" type="text" value={state.value} 
                           placeholder="Add new task, min 5 characters" onChange={event => handleInput(event.target.value)} />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" 
                            onClick={handleAdd} disabled={state.isAddDisabled}>
                        Add
                    </button>
                </div>
                <div className='w-full justify-center items-center text-center flex flex-wrap mb-4'>
                    <ul className="w-full space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 list-none">
                        {state.items.map(item => (
                            <li className=" border-solid border-cyan-800 border-2 px-5 rounded-md" key={item} 
                                onClick={() => handleRemoveItem(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <CodeBlock code={code} />
        </div>
    );
}
`
