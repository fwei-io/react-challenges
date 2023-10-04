import { useReducer } from 'react';
import PageData from '../helper/data/PageData';
import CodeBlock from '../components/CodeBlock';

const initialState = {
    data: [],
    result: []
};

function arrayReducer(state, action) {
    switch (action.type) {
        case 'MAP':
            return { ...state, result: state.data.map(item => item * 2) };
        case 'REDUCE':
            return { ...state, result: [state.data.reduce((acc, curr) => acc + curr, 0)] };
        case 'FILTER':
            return { ...state, result: state.data.filter(item => item > 5) };
        case 'FLAT':
            return { ...state, result: state.data.flat() };
        case 'SET_DATA':
            return { ...state, data: action.data };
        default:
            return state;
    }
}

export default function ArrayUseReducer() {
    const page = PageData.filter((element) => element.path == "/ArrayUseReducer")[0]
    const [state, dispatch] = useReducer(arrayReducer, initialState);

    const setData = (data) => {
        try {
            dispatch({ type: 'SET_DATA', data: JSON.parse(data) });
        } catch (error) {
            console.error("Error parsing array:", error);
        }
    };

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap mb-6'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left
                 text-slate-900 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <textarea
                placeholder="Enter a JS array e.g. [1,2,3], or [1,2,3,[4,5]]"
                onBlur={(e) => setData(e.target.value)}
                style={{ width: '100%', height: '100px' }}
                className='resize rounded-md shadow appearance-none border p-3'
            />
            <br/>
            <button onClick={() => dispatch({ type: 'MAP' })}
                    className="bg-blue-500 hover:bg-blue-700 text-white
                                font-bold py-2 px-4 rounded m-2">
                                    Map (x 2)
            </button>
            <button onClick={() => dispatch({ type: 'REDUCE' })}
                    className="bg-blue-500 hover:bg-blue-700 text-white
                                font-bold py-2 px-4 rounded m-2">
                                    Reduce (Sum)
            </button>
            <button onClick={() => dispatch({ type: 'FILTER' })}
                    className="bg-blue-500 hover:bg-blue-700 text-white
                                font-bold py-2 px-4 rounded m-2">
                                    Filter (&gt;5)
            </button>
            <button onClick={() => dispatch({ type: 'FLAT' })}
                    className="bg-blue-500 hover:bg-blue-700 text-white
                                font-bold py-2 px-4 rounded m-2">
                                    Flatten Nested Array
            </button>
            <div className='w-full mt-6'>
                <h2 className='text-xl font-bold text-slate-600'>Result: </h2>
                <pre className='rounded-md shadow border p-6 text-base mb-10'>
                    {JSON.stringify(state.result)}
                </pre>
            </div>
            <CodeBlock code={code} />
        </div>
    );
}


const code = `
import { useReducer } from 'react';

const initialState = {
    data: [],
    result: []
};

function arrayReducer(state, action) {
    switch (action.type) {
        case 'MAP':
            return { ...state, result: state.data.map(item => item * 2) };
        case 'REDUCE':
            return { ...state, result: [state.data.reduce((acc, curr) => acc + curr, 0)] };
        case 'FILTER':
            return { ...state, result: state.data.filter(item => item > 5) };
        case 'FLAT':
            return { ...state, result: state.data.flat() };
        case 'SET_DATA':
            return { ...state, data: action.data };
        default:
            return state;
    }
}

export default function ArrayUseReducer() {
    const [state, dispatch] = useReducer(arrayReducer, initialState);

    const setData = (data) => {
        try {
            dispatch({ type: 'SET_DATA', data: JSON.parse(data) });
        } catch (error) {
            console.error("Error parsing array:", error);
        }
    };

    return (
        <div className='w-full flex flex-wrap'>
            <textarea
                placeholder="Enter a JS array e.g. [1,2,3], or [1,2,3,[4,5]]"
                onBlur={(e) => setData(e.target.value)}
                style={{ width: '100%', height: '100px' }}
                className='resize rounded-md shadow appearance-none border p-3'
            />
            <br/>
            <button onClick={() => dispatch({ type: 'MAP' })}
                    className="bg-blue-500 hover:bg-blue-700 text-white
                                font-bold py-2 px-4 rounded m-2">
                                    Map (x 2)
            </button>
            <button onClick={() => dispatch({ type: 'REDUCE' })}
                    className="bg-blue-500 hover:bg-blue-700 text-white
                                font-bold py-2 px-4 rounded m-2">
                                    Reduce (Sum)
            </button>
            <button onClick={() => dispatch({ type: 'FILTER' })}
                    className="bg-blue-500 hover:bg-blue-700 text-white
                                font-bold py-2 px-4 rounded m-2">
                                    Filter (&gt;5)
            </button>
            <button onClick={() => dispatch({ type: 'FLAT' })}
                    className="bg-blue-500 hover:bg-blue-700 text-white
                                font-bold py-2 px-4 rounded m-2">
                                    Flatten Nested Array
            </button>
            <div className='w-full mt-6'>
                <h2 className='text-xl font-bold text-slate-600'>Result: </h2>
                <pre className='rounded-md shadow border p-6 text-base mb-10'>
                    {JSON.stringify(state.result)}
                </pre>
            </div>
        </div>
    );
}
`;