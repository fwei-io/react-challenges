import { useState } from 'react';
import '../styles/StyleUndoRedoDots.css';
import PageData from '../helper/data/PageData'
import CodeBlock from '../components/CodeBlock'

export default function UndoRedoDots() {
    const [dots, setDots] = useState([]);
    const [undoDots, setUndoDots] = useState([]);
    const page = PageData.filter((element) => element.path == "/UndoRedoDots")[0]

    const setDot = (e) => {
        setDots([...dots, [e.clientX, e.clientY]]);
    }

    const undo = () => {
        if (dots.length > 0) {
            const newDots = [...dots];
            const lastDot = newDots.pop();
            setUndoDots([...undoDots, lastDot]);
            setDots(newDots);
        } 
    }

    const redo = () => {
        if (undoDots.length > 0) {
            const newDots = [...undoDots];
            const lastDot = newDots.pop();
            setDots([...dots, lastDot]); 
            setUndoDots(newDots);
        } 
    }

    return (
        <div className='w-full flex flex-wrap'>
            <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'>
                {page.name}
            </h2>
            <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            <div className='mt-10 mb-36 mx-auto justify-center'>
                <div className='w-full justify-center flex flex-wrap'>
                    <div className="w-full justify-center text-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={undo}>
                            Undo
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={redo}>
                            Redo
                        </button>
                    </div>
                    <div className="canvas" onClick={setDot}>
                        { dots.map((item, index) => (
                            <div 
                                key={index}
                                style={{ top: `${item[1]}px`, left: `${item[0]}px` }}
                                className="dot"
                            >
                            </div>
                        )) }
                    </div>
                </div>
            </div>
            <CodeBlock code={code} />
        </div>
    )
}

const code = `

import { useState } from 'react';
import '../styles/StyleUndoRedoDots.css';

export default function UndoRedoDots() {
    const [dots, setDots] = useState([]);
    const [undoDots, setUndoDots] = useState([]);

    const setDot = (e) => {
        setDots([...dots, [e.clientX, e.clientY]]);
    }

    const undo = () => {
        if (dots.length > 0) {
            const newDots = [...dots];
            const lastDot = newDots.pop();
            setUndoDots([...undoDots, lastDot]);
            setDots(newDots);
        } 
    }

    const redo = () => {
        if (undoDots.length > 0) {
            const newDots = [...undoDots];
            const lastDot = newDots.pop();
            setDots([...dots, lastDot]); 
            setUndoDots(newDots);
        } 
    }

    return (
        <div className='w-full flex flex-wrap'>
            <div className='mt-10 mb-36 mx-auto justify-center'>
                <div className='w-full justify-center flex flex-wrap'>
                    <div className="w-full justify-center text-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
                                           py-2 px-4 rounded m-2" onClick={undo}>
                            Undo
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
                                           py-2 px-4 rounded m-2" onClick={redo}>
                            Redo
                        </button>
                    </div>
                    <div className="canvas" onClick={setDot}>
                        { dots.map((item, index) => (
                            <div 
                                key={index}
                                style={{ top: \`\${item[1]}px\`, left: \`\${item[0]}px\` }}
                                className="dot"
                            >
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    )
}

// StyleUndoRedoDots.css
.canvas {
    width: 80vw;
    height: 500px;
    border: 2px solid white;
    top: 20px;
    background-color: rgb(77, 71, 71);
}

.dot {
    width: 10px;
    height: 10px;
    background-color: gold;
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
}
`;