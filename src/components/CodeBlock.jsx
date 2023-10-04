import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Copy from '../assets/icons/copy.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CodeBlock(props) {
    const [showCode, setShowCode] = useState(false)

    const handleCopyClick = async () => {
        toast("Code copied! 👌");
        try {
            await navigator.clipboard.writeText(props.code);
        } catch (e) {
            console.error(e);
        }
    }

    const handleShowCode = () => {
        setShowCode(!showCode);
    }
    
    return (
        <pre className="bg-[#1b1d1e] w-full items-center flex justify-center p-6 rounded-xl relative shadow-sm shadow-slate-950">
            <ToastContainer autoClose={2000} hideProgressBar={true} theme="dark" />
            <button onClick={handleShowCode} className="absolute left-3 top-3 bg-slate-700 px-2 py-1 border-solid border-slate-900 rounded-md text-slate-200">
                { showCode ? "Hide Code" : "Show Code" }
            </button>
            <button onClick={handleCopyClick} className="absolute right-3 top-3 bg-slate-700 px-1 py-1 border-solid border-slate-900 rounded-md">
                <img src={Copy} alt="Copy" className="w-4 h-4" />
            </button>
            { showCode ? 
                <SyntaxHighlighter language="javascript" style={tomorrowNight}>
                    {props.code}
                </SyntaxHighlighter> : ""
            }
        </pre>
    );
}