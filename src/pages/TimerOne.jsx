import { useState, useEffect } from "react";
import PageData from '../helper/data/PageData'
import CodeBlock from '../components/CodeBlock'

export default function TimerOne() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const page = PageData.filter((element) => element.path == "/TimerOne")[0]
    
    useEffect(() => {
        let interval;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
      return () => clearInterval(interval);
    }, [isActive, seconds]);

    const startTimer = () => {
        setIsActive(true);
    };
    
    const stopTimer = () => {
        setIsActive(false);
    };
    
    const resetTimer = () => {
        setIsActive(false);
        setSeconds(0);
    };
    
    const formatTime = () => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins} mins ${secs} secs`;
    };

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <div className='mt-36 mb-36 mx-auto justify-center'>
                <div className='w-full justify-center items-center text-center flex flex-wrap mb-4'>
                    <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'> 
                        { formatTime() }
                    </h2>
                </div>
                <div className='w-full justify-center items-center text-center flex flex-wrap'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={startTimer}>
                        Start
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={stopTimer}>
                        Stop
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={resetTimer}>
                        Reset
                    </button>
                </div>
            </div>
            <CodeBlock code={code} />
        </div>
    );
}

const code = `
import { useState, useEffect } from "react";

export default function TimerOne() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const page = PageData.filter((element) => element.path == "/TimerOne")[0]
    
    useEffect(() => {
        let interval;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
      return () => clearInterval(interval);
    }, [isActive, seconds]);

    const startTimer = () => {
        setIsActive(true);
    };
    
    const stopTimer = () => {
        setIsActive(false);
    };
    
    const resetTimer = () => {
        setIsActive(false);
        setSeconds(0);
    };
    
    const formatTime = () => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return \`\${mins} mins \${secs} secs\`;
    };

    return (
        <div className='w-full flex flex-wrap'>
            <div className='mt-36 mb-36 mx-auto justify-center'>
                <div className='w-full justify-center items-center text-center flex flex-wrap mb-4'>
                    <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'> 
                        { formatTime() }
                    </h2>
                </div>
                <div className='w-full justify-center items-center text-center flex flex-wrap'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={startTimer}>
                        Start
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={stopTimer}>
                        Stop
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={resetTimer}>
                        Reset
                    </button>
                </div>
            </div>
            <CodeBlock code={code} />
        </div>
    );
}
`;