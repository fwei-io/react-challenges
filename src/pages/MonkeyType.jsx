import { useState, useEffect } from 'react';
import { wordList } from '../helper/data/wordList'
import PageData from '../helper/data/PageData'
import * as S from '../components/StyledMonkeyType';
import CodeBlock from '../components/CodeBlock'

export default function MonkeyType() {
    const page = PageData.filter((element) => element.path == "/MonkeyType")[0]
    const generate = () => {
        let temp = [], clone = [...wordList];
        for (let i = 0; i < 25; i++) {
            const randomIndex = Math.floor(Math.random() * clone.length);
            temp.push(clone[randomIndex]);
            clone.splice(randomIndex, 1);
        }
        return temp.join(" ");
    }

    const [text, setText] = useState(generate());
    const [typed, setTyped] = useState("");
    const [startTime, setStartTime] = useState(0);
    const [wpm, setWpm] = useState(0);

    const keydown = (e) => {
        const regex = /^[a-z ]$/;
        const key = e.key.toLowerCase();
        if (regex.test(key)) {
            setTyped(prev => prev + key);
        }
        if (key === 'backspace') {
            const tmp = typed.substring(0, typed.length - 1);
            setTyped(tmp);
        }
        if(!typed.length) setStartTime(new Date().getTime())
    }

    useEffect(() => {
        if (typed.length === text.length) {
            const endTime = new Date().getTime();
            const wordsPerMinute = Math.floor(text.split(' ').length / ((endTime - startTime) / 1000 / 60));
            setWpm(wordsPerMinute);
        }
    }, [setWpm, typed, text, startTime])

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900
                 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <div className='w-full flex flex-wrap justify-center'>
            <h1 className='text-xl font-bold'>{ wpm > 0 && `WPM: ${wpm}`}</h1>
                <S.Wrapper>
                    <S.InputKey autoFocus onKeyDown={keydown} />
                    <S.Text>
                        { text.split('').map((letter, i) => (
                            <S.Letter key={i} letter={letter} typed={typed[i]}>
                                {letter}
                            </S.Letter>
                        )) }
                    </S.Text>
                </S.Wrapper>
            </div>
            <CodeBlock code={code} />
        </div>
    );
}

const code = `
import { useState, useEffect } from 'react';
import { wordList } from '../helper/data/wordList'
import * as S from '../components/StyledMonkeyType';

export default function MonkeyType() {
    const generate = () => {
        let temp = [], clone = [...wordList];
        for (let i = 0; i < 25; i++) {
            const randomIndex = Math.floor(Math.random() * clone.length);
            temp.push(clone[randomIndex]);
            clone.splice(randomIndex, 1);
        }
        return temp.join(" ");
    }

    const [text, setText] = useState(generate());
    const [typed, setTyped] = useState("");
    const [startTime, setStartTime] = useState(0);
    const [wpm, setWpm] = useState(0);

    const keydown = (e) => {
        const regex = /^[a-z ]$/;
        const key = e.key.toLowerCase();
        if (regex.test(key)) {
            setTyped(prev => prev + key);
        }
        if (key === 'backspace') {
            const tmp = typed.substring(0, typed.length - 1);
            setTyped(tmp);
        }
        if(!typed.length) setStartTime(new Date().getTime())
    }

    useEffect(() => {
        if (typed.length === text.length) {
            const endTime = new Date().getTime();
            const wordsPerMinute = Math.floor(text.split(' ').length / ((endTime - startTime)
             / 1000 / 60));
            setWpm(wordsPerMinute);
        }
    }, [setWpm, typed, text, startTime])

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap justify-center'>
            <h1 className='text-xl font-bold'>{ wpm > 0 && \`WPM: \${wpm}\`}</h1>
                <S.Wrapper>
                    <S.InputKey autoFocus onKeyDown={keydown} />
                    <S.Text>
                        { text.split('').map((letter, i) => (
                            <S.Letter key={i} letter={letter} typed={typed[i]}>
                                {letter}
                            </S.Letter>
                        )) }
                    </S.Text>
                </S.Wrapper>
            </div>
        </div>
    );
}

// StyledMonkeyType.jsx
import styled from 'styled-components';

export const Wrapper = styled.div\`
    height: 50vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
\`;

export const Text = styled.p\`
    color: grey;
\`;

export const Letter = styled.span\`
    color: \${(p) => (!p.typed ? '#777' : p.typed === p.letter ?
     'yellow' : 'red') };
    background-color: \${(p) => (!p.typed ? '#111' : p.typed === 
    p.letter ? '#333' : '#222') };
\`;

export const InputKey = styled.input\`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1000;
    opacity: 0;
    cursor: default;
\`;

`