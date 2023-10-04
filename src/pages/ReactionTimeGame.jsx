import { useState } from 'react';
import PageData from '../helper/data/PageData'
import CodeBlock from "../components/CodeBlock"

function ReactionTimeGame() {
    let endTime, intervalTimer;
    const [ beginTime, setBeginTime ] = useState(0);
    const [ showBox, setShowBox ] = useState(false);
    const [ boxClicked, setBoxClicked ] = useState(false);
    const [ boxColor, setChangeColor ] = useState("red");
    const [ time, setTime ] = useState(0);
    const [ tooEarly, setTooEarly ] = useState(false);
    const page = PageData.filter((element) => element.path == "/ReactionTimeGame")[0]

    const startGame = () => {
        let randomTime = Math.floor(Math.random() * (6000 - 1000) + 1000);
        setShowBox(true);
        setChangeColor("red");
        setTooEarly(false);
        setBoxClicked(false);
        setBeginTime(0);
        changeBoxColor(randomTime);
    };

    const changeBoxColor = (time) => {
        intervalTimer = setTimeout(() => {  
            setBeginTime(Date.now());
            setChangeColor("green");
        }, time);
    }

    const boxButtonClicked = () => {
        clearInterval(intervalTimer);
        endTime = Date.now();
        if (beginTime === 0) {
            setTooEarly(true);
            setShowBox(false);
        } else {
            setShowBox(false);
            setBoxClicked(true);
            setTime(endTime - beginTime);
        }
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
                <div className='w-full justify-center items-center text-center flex flex-wrap'>
                    <button onClick={startGame} style={{ display: !showBox ? "block" : "none" }} 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 text-lg">
                        Start Game
                    </button>
                    <button style={{ display: showBox ? "block" : "none", borderRadius: "6px", 
                                    backgroundColor: boxColor, width: "100px", height: "100px",
                                    border: "none", margin: "0 auto", cursor: "pointer" }} onClick={boxButtonClicked}></button>
                </div>
                <div className='w-full justify-center items-center text-center flex flex-wrap'>
                    <h2 style={{ display: boxClicked ? "block" : "none"}} 
                        className='w-full text-2xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'>
                        You took {time}ms!
                    </h2>
                    <h2 style={{ display: tooEarly ? "block" : "none"}} 
                        className='w-full text-2xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'>
                        You clicked too early!
                    </h2>
                </div>
            </div>
            <CodeBlock code={code} />
        </div>
    );
}

export default ReactionTimeGame;

const code = 
`
import { useState } from 'react';

function ReactionTimeGame() {
    let endTime, intervalTimer;
    const [ beginTime, setBeginTime ] = useState(0);
    const [ showBox, setShowBox ] = useState(false);
    const [ boxClicked, setBoxClicked ] = useState(false);
    const [ boxColor, setChangeColor ] = useState("red");
    const [ time, setTime ] = useState(0);
    const [ tooEarly, setTooEarly ] = useState(false);

    const startGame = () => {
        let randomTime = Math.floor(Math.random() * (6000 - 1000) + 1000);
        setShowBox(true);
        setChangeColor("red");
        setTooEarly(false);
        setBoxClicked(false);
        setBeginTime(0);
        changeBoxColor(randomTime);
    };

    const changeBoxColor = (time) => {
        intervalTimer = setTimeout(() => {  
            setBeginTime(Date.now());
            setChangeColor("green");
        }, time);
    }

    const boxButtonClicked = () => {
        clearInterval(intervalTimer);
        endTime = Date.now();
        console.log(endTime + " " + beginTime);
        if (beginTime === 0) {
            setTooEarly(true);
            setShowBox(false);
        } else {
            setShowBox(false);
            setBoxClicked(true);
            setTime(endTime - beginTime);
        }
    };

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left
                 text-slate-900 dark:text-white'>
                    {page.name}
                </h2>
                <p>Challenge: {page.description}</p>
            </div>
            <div className='mt-36 mb-36 mx-auto justify-center'>
                <div className='w-full justify-center items-center text-center flex flex-wrap'>
                    <button onClick={startGame} style={{ display: !showBox ? "block" : "none" }} 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold
                             py-2 px-4 rounded m-2 text-lg">
                        Start Game
                    </button>
                    <button style={{ display: showBox ? "block" : "none", borderRadius: "6px", 
                                    backgroundColor: boxColor, width: "100px", height: "100px",
                                    border: "none", margin: "0 auto", cursor: "pointer" }} 
                            onClick={boxButtonClicked}></button>
                </div>
                <div className='w-full justify-center items-center text-center flex flex-wrap'>
                    <h2 style={{ display: boxClicked ? "block" : "none"}} 
                        className='w-full text-2xl font-bold text-center sm:text-5xl sm:text-left
                         text-slate-900 dark:text-white'>
                        You took {time}ms!
                    </h2>
                    <h2 style={{ display: tooEarly ? "block" : "none"}} 
                        className='w-full text-2xl font-bold text-center sm:text-5xl sm:text-left
                         text-slate-900 dark:text-white'>
                        You clicked too early!
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default ReactionTimeGame;
`