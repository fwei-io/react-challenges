import { useState } from 'react';
import axios from 'axios';
import CodeBlock from '../components/CodeBlock'

export default function UndoRedoDots() {
    const [dots, setDots] = useState([]);

    return (
        <>
            <h1>Restful</h1>
            <CodeBlock code={code} />
        </>
    )
}

const code = `
`;