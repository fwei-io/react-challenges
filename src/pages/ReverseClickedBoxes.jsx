import { useState, useEffect } from 'react'
import PageData from '../helper/data/PageData'
import CodeBlock from '../components/CodeBlock'

function ReverseClickedBoxes() {
    const [clickedArr, setClickedArr] = useState([]);
    const [removingStatus, setRemovingStatus] = useState(false);
    const page = PageData.filter((element) => element.path == "/ReverseClickedBoxes")[0]

    const childClick = (data) => {
        if(!clickedArr.includes(data)){
            setClickedArr(prev => [...prev, data]);
        }
    }

    let timeout;

    useEffect(() => {
        if (clickedArr.length == 6) {
            setRemovingStatus(true);
            removeBoxes();
        }

        if(removingStatus && clickedArr.length > 0) {
            removeBoxes();
        }

        if(removingStatus && clickedArr.length == 0) {
            setRemovingStatus(false);
        }

        function removeBoxes() {
            timeout = setTimeout(() => {
                console.log(clickedArr);
                setClickedArr(prev => {
                    const newArr = [...prev];
                    newArr.pop();
                    return newArr;
                });
            }, 700);
        }

        return () => clearTimeout(timeout);

    }, [clickedArr, removingStatus]);

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <div className='mt-28 mb-36 mx-auto justify-center'>
                <div className='w-full py-20 justify-center flex flex-wrap'>
                    { [...Array(6)].map((_, index) => 
                        <BoxComponent 
                            key={index} 
                            value={index}
                            onChildClick={childClick}
                            isActive={clickedArr.includes(index)}
                        />
                    )}
                </div>
                <div className='w-full justify-center text-lg font-bold text-center sm:text-left text-slate-900 dark:text-white'>
                    { clickedArr.length > 0 ? "Clicked box indexes: " : ""}
                    { clickedArr.map((num, index) => 
                        <span key={index}>
                             {num}{ index === clickedArr.length - 1 ? "" : ", " }
                        </span>
                    )}
                </div>
            </div>
            <CodeBlock code={code} />
        </div>
    )
}

export default ReverseClickedBoxes

function BoxComponent({ value, onChildClick, isActive }) {
    const [clicked, setClicked] = useState("gray");
    return (
        <div style={{ backgroundColor: isActive ? "green" : "gray", }}
             className='w-20 h-20 rounded-lg m-2'
             onClick={() => onChildClick(value)}
        ></div>
    )
}

const code = `

import { useState, useEffect } from 'react'

function ReverseClickedBoxes() {
    const [clickedArr, setClickedArr] = useState([]);
    const [removingStatus, setRemovingStatus] = useState(false);

    const childClick = (data) => {
        if(!clickedArr.includes(data)){
            setClickedArr(prev => [...prev, data]);
        }
    }

    let timeout;

    useEffect(() => {
        if (clickedArr.length == 6) {
            setRemovingStatus(true);
            removeBoxes();
        }

        if(removingStatus && clickedArr.length > 0) {
            removeBoxes();
        }

        if(removingStatus && clickedArr.length == 0) {
            setRemovingStatus(false);
        }

        function removeBoxes() {
            timeout = setTimeout(() => {
                console.log(clickedArr);
                setClickedArr(prev => {
                    const newArr = [...prev];
                    newArr.pop();
                    return newArr;
                });
            }, 700);
        }

        return () => clearTimeout(timeout);

    }, [clickedArr, removingStatus]);

    return (
        <div className='w-full flex flex-wrap'>
            <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left 
            text-slate-900 dark:text-white'>
                Reverse Clicked Boxes
            </h2>
            <div className='mt-28 mb-36 mx-auto justify-center'>
                <div className='w-full py-20 justify-center flex'>
                    { [...Array(6)].map((_, index) => 
                        <BoxComponent 
                            key={index} 
                            value={index}
                            onChildClick={childClick}
                            isActive={clickedArr.includes(index)}
                        />
                    )}
                </div>
                <div className='w-full justify-center text-lg font-bold text-center sm:text-left
                 text-slate-900 dark:text-white'>
                    { clickedArr.length > 0 ? "Clicked box index: " : ""}
                    { clickedArr.map((num, index) => 
                        <span key={index}> {num}, </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ReverseClickedBoxes

function BoxComponent({ value, onChildClick, isActive }) {
    const [clicked, setClicked] = useState("gray");
    return (
        <div style={{ backgroundColor: isActive ? "green" : "gray", }}
             className='w-20 h-20 rounded-lg mx-2'
             onClick={() => onChildClick(value)}
        ></div>
    )
}`;