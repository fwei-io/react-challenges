import React, { useState, useMemo } from 'react';
import PageData from '../helper/data/PageData'
import CodeBlock from '../components/CodeBlock';

export default function SortListUseMemo() {
    const page = PageData.filter((element) => element.path == "/SortListUseMemo")[0]
    const [users, setUsers] = useState(generateLargeListOfUsers());
    const [sortOrder, setSortOrder] = useState('asc');

    const sortedUsers = useMemo(() => {
        console.log('Sorting users...');
        if (sortOrder === 'asc') {
            return [...users].sort((a, b) => a.name.localeCompare(b.name));
        } else {
            return [...users].sort((a, b) => b.name.localeCompare(a.name));
        }
    }, [users, sortOrder]);

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap mb-6'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left
                 text-slate-900 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <div className='w-full flex flex-wrap mb-6 justify-center text-center'>
                <div className='w-1/2 bg-white shadow-md mx-auto max-h-[400px]
                                                      rounded-lg px-8 pt-6 pb-8 mb-10'>
                    <button onClick={() => setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))}
                            className="bg-blue-500 hover:bg-blue-700 text-white
                                       font-bold py-2 px-4 rounded m-2">
                        Sort Order {sortOrder === 'asc' ? '🔼' : '🔽'}
                    </button>
                    <div className='max-h-[300px] overflow-scroll'>
                        {sortedUsers.map(user => (
                            <div key={user.id} className='bg-slate-100 my-1 rounded-sm'>
                                {user.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <CodeBlock code={code}/>
        </div>
    );
}

function generateLargeListOfUsers() {
    const users = [];
    for (let i = 1; i <= 1000; i++) {
        users.push({ id: i, name: `User ${Math.random().toString(36).substr(2, 5)}` });
    }
    return users;
}

const code = `
import React, { useState, useMemo } from 'react';

export default function SortListUseMemo() {
    const [users, setUsers] = useState(generateLargeListOfUsers());
    const [sortOrder, setSortOrder] = useState('Asc');

    const sortedUsers = useMemo(() => {
        console.log('Sorting users...');
        if (sortOrder === 'Asc') {
            return [...users].sort((a, b) => a.name.localeCompare(b.name));
        } else {
            return [...users].sort((a, b) => b.name.localeCompare(a.name));
        }
    }, [users, sortOrder]);

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap mb-6 justify-center text-center'>
                <div className='w-1/2 bg-white shadow-md mx-auto max-h-[400px]
                                                      rounded-lg px-8 pt-6 pb-8 mb-10'>
                    <button onClick={() => setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))}
                            className="bg-blue-500 hover:bg-blue-700 text-white
                                       font-bold py-2 px-4 rounded m-2">
                        Sort Order {sortOrder === 'asc' ? '🔼' : '🔽'}
                    </button>
                    <div className='max-h-[300px] overflow-scroll'>
                        {sortedUsers.map(user => (
                            <div key={user.id} className='bg-slate-100 my-1 rounded-sm'>
                                {user.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <CodeBlock code={code}/>
        </div>
    );
}

function generateLargeListOfUsers() {
    const users = [];
    for (let i = 1; i <= 1000; i++) {
        users.push({ id: i, name: \`User \${Math.random().toString(36).substr(2, 5)}\` });
    }
    return users;
}
`;