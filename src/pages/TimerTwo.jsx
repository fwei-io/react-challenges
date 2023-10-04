import { useState, useEffect } from 'react';
import PageData from '../helper/data/PageData'
import CodeBlock from '../components/CodeBlock'

const TimerTwo = () => {
    const [ seconds, setSeconds ] = useState(0);
    const [ minutes, setMinutes ] = useState(0);
    const [ secondsCount, setSecondsCount ] = useState(0);
    const page = PageData.filter((element) => element.path == "/TimerTwo")[0]

    let secondsCt = 0;

    useEffect(() => {
        const interval = setInterval(() => {
        if (seconds === 59) {
            setMinutes(prevMinutes => prevMinutes + 1);
            setSeconds(0);
        } else {
            setSeconds(prevSeconds => prevSeconds + 1);
        }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <div className='mt-36 mb-60 mx-auto justify-center'>
                <div className='w-full justify-center items-center text-center flex flex-wrap mb-4'>
                    <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'> 
                        {minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}
                    </h2>
                </div>
            </div>
            <CodeBlock code={code} />
        </div>
    )
};

export default TimerTwo;

const code = `
import { useState, useEffect } from 'react';

const TimerTwo = () => {
    const [ seconds, setSeconds ] = useState(0);
    const [ minutes, setMinutes ] = useState(0);
    const [ secondsCount, setSecondsCount ] = useState(0);
    
    let secondsCt = 0;

    useEffect(() => {
        const interval = setInterval(() => {
        if (seconds === 59) {
            setMinutes(prevMinutes => prevMinutes + 1);
            setSeconds(0);
        } else {
            setSeconds(prevSeconds => prevSeconds + 1);
        }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div className='w-full flex flex-wrap'>
            <div className='mt-36 mb-36 mx-auto justify-center'>
                <div className='w-full justify-center items-center text-center flex flex-wrap mb-4'>
                    <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left
                     text-slate-900 dark:text-white'> 
                        {minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}
                    </h2>
                </div>
            </div>
            <CodeBlock code={code} />
        </div>
    )
};

export default TimerTwo;
`