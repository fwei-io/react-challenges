import { useRef } from 'react';
import PageData from '../helper/data/PageData';
import CodeBlock from '../components/CodeBlock';

export default function FormUseRef() {
    const page = PageData.filter((element) => element.path == "/FormUseRef")[0]
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        inputRef.current.value = '';
        inputRef.current.focus();
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
            <form onSubmit={handleSubmit} className="w-1/2 bg-white shadow-md mx-auto 
                                                     rounded px-8 pt-6 pb-8 mb-10">
                <label className='italic font-light text-slate-500 text-sm mb-4'>
                    Instruction: Type something in the field, after clicking Submit, you can 
                    type immediately on the autofocused input. There is no need to select the field.
                </label>
                <input ref={inputRef} 
                       type="text"
                       placeholder="Type something"
                       className="shadow border rounded w-full py-2 px-3 text-gray-700
                                  leading-tight focus:outline-none focus:shadow-outline my-6" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white
                     font-bold py-2 px-4 rounded m-2">
                        Submit
                </button>
            </form>
            <CodeBlock code={code} />
        </div>
    );
}


const code = `
import { useState, useRef } from 'react';

export default function FormUseRef() {
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        inputRef.current.value = '';
        inputRef.current.focus();
    };

    return (
        <div className='w-full flex flex-wrap'>
            <form onSubmit={handleSubmit} className="w-1/2 bg-white shadow-md mx-auto 
                                                     rounded px-8 pt-6 pb-8 mb-10">
                <label className='italic font-light text-slate-500 text-sm mb-4'>
                    Instruction: Type something in the field, after clicking Submit, you can 
                    type immediately on the autofocused input. There is no need to select the field.
                </label>
                <input ref={inputRef} 
                       type="text"
                       placeholder="Type something"
                       className="shadow border rounded w-full py-2 px-3 text-gray-700
                                  leading-tight focus:outline-none focus:shadow-outline my-6" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white
                     font-bold py-2 px-4 rounded m-2">
                        Submit
                </button>
            </form>
        </div>
    );
}
`;