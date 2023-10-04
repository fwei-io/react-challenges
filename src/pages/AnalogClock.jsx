import React, { useState, useEffect } from 'react';
import * as S from '../components/StyledAnalogClock';
import PageData from '../helper/data/PageData'
import CodeBlock from '../components/CodeBlock'

export default function AnalogClock() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [realHours, setRealHours] = useState(0);
    const [realMinutes, setRealMinutes] = useState(0);
    const [realSeconds, setRealSeconds] = useState(0);
    const page = PageData.filter((element) => element.path == "/AnalogClock")[0]

    useEffect(() => {
        const interval = setInterval(()=> {
            const now = new Date();
            setHours(Math.floor((now.getHours() / 12) * 360));
            setMinutes(Math.floor((now.getMinutes() / 60) * 360));
            setSeconds(Math.floor((now.getSeconds() / 60) * 360));
            setRealHours(now.getHours());
            setRealMinutes(now.getMinutes());
            setRealSeconds(now.getSeconds());
        }, 500);

        return () => {
            clearInterval(interval);
        }

    }, []);

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <div className='mt-28 mb-36 mx-auto justify-center'>
                <div className='w-full justify-center flex flex-wrap'>
                    <S.Wrapper>
                        <S.Clock>
                            <S.HourHand rotation={hours} />
                            <S.MinuteHand rotation={minutes} />
                            <S.SecondHand rotation={seconds} />
                        </S.Clock>
                    </S.Wrapper>
                </div>
                <div className='w-full justify-center text-lg font-bold text-center sm:text-left text-slate-900 dark:text-white'>
                    {hours}&deg; {minutes}&deg; {seconds}&deg;
                    <br />
                    {realHours} : {realMinutes} : {realSeconds}
                </div>
            </div>
            <CodeBlock code={code} />
        </div>
    );
}

const code = `
import { useState, useEffect } from 'react';
import * as S from '../components/StyledAnalogClock';

export default function AnalogClock() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [realHours, setRealHours] = useState(0);
    const [realMinutes, setRealMinutes] = useState(0);
    const [realSeconds, setRealSeconds] = useState(0);
    const page = PageData.filter((element) => element.path == "/AnalogClock")[0]

    useEffect(() => {
        const interval = setInterval(()=> {
            const now = new Date();
            setHours(Math.floor((now.getHours() / 12) * 360));
            setMinutes(Math.floor((now.getMinutes() / 60) * 360));
            setSeconds(Math.floor((now.getSeconds() / 60) * 360));
            setRealHours(now.getHours());
            setRealMinutes(now.getMinutes());
            setRealSeconds(now.getSeconds());
        }, 500);

        return () => {
            clearInterval(interval);
        }

    }, []);

    return (
        <div className='w-full flex flex-wrap'>
            <div className='mt-28 mb-36 mx-auto justify-center'>
                <div className='w-full justify-center flex flex-wrap'>
                    <S.Wrapper>
                        <S.Clock>
                            <S.HourHand rotation={hours} />
                            <S.MinuteHand rotation={minutes} />
                            <S.SecondHand rotation={seconds} />
                        </S.Clock>
                    </S.Wrapper>
                </div>
                <div className='w-full justify-center text-lg font-bold text-center sm:text-left
                              text-slate-900 dark:text-white'>
                    {hours}&deg; {minutes}&deg; {seconds}&deg;
                    <br />
                    {realHours} : {realMinutes} : {realSeconds}
                </div>
            </div>
        </div>
    );
}


// StyledAnalogClock.jsx
import styled from 'styled-components';

export const Wrapper = styled.div\`
    height: 50vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
\`;

export const Clock = styled.div\`
    height: 400px;
    width: 400px;
    border: 2px solid salmon;
    border-radius: 50%;
    position: absolute;
    background-color: #444444;
\`;

const basicStyle = \`
    height: 5px;
    width: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
\`

export const HourHand = styled.div\`
    \${basicStyle}
    background-color: orange;
    transform: rotate(\${p => p.rotation}deg);
    &:after {
        content: '';
        height: 120px;
        width: 5px;
        background-color: orange;
        position: absolute;
        bottom: 0;
    }
\`

export const MinuteHand = styled.div\`
    \${basicStyle}
    background-color: gold;
    transform: rotate(\${p => p.rotation}deg);
    &:after {
        content: '';
        height: 185px;
        width: 5px;
        background-color: gold;
        position: absolute;
        bottom: 0;
    }
\`

export const SecondHand = styled.div\`
    \${basicStyle}
    background-color: white;
    transform: rotate(\${p => p.rotation}deg);
    &:after {
        content: '';
        height: 160px;
        width: 2px;
        background-color: white;
        position: absolute;
        bottom: 0;
    }
\`

`;