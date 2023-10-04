import { useState, useEffect } from 'react';
import PageData from '../helper/data/PageData'
import axios from 'axios';
import CodeBlock from '../components/CodeBlock'

export default function RestfulFetchPerson() {
    const page = PageData.filter((element) => element.path == "/RestfulFetchPerson")[0]
    const [data, setData] = useState([]);

    const getData = async ()=> {
        try {
            const response = await axios.get(`https://randomuser.me/api`);
            setData([...data, response.data]);
        } catch(error) {
            console.error(error);
        }
    }

    const loadMore = async () => {
        getData();
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap mb-6'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900
                 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <div className='w-full flex flex-wrap mb-6'>
                <button onClick={loadMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" >Load More</button>
            </div>
            <div className='w-full flex flex-wrap mb-6'>
                {data && data.length > 0 ? data.map((item, index) => (
                    <div key={index} className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
                            <div class="flex justify-end px-4 pt-4"></div>
                            <div class="flex flex-col items-center pb-10">
                                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={item.results[0].picture.medium} alt={item.results[0].name.first} />
                                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.results[0].name.first} {item.results[0].name.last}</h5>
                                <span class="text-sm text-gray-500 dark:text-gray-400">Age {item.results[0].dob.age}, {item.results[0].location.city}, {item.results[0].location.country}</span>
                                
                            </div>

                    </div>
                )) : 'Loading...'}
            </div>
            <div className='w-full flex flex-wrap mb-6'>
                <button onClick={loadMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" >Load More</button>
            </div>
            <CodeBlock code={code} />
        </div>
    )
}

const code = `
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function RestfulFetchPerson() {
    const [data, setData] = useState([]);

    const getData = async ()=> {
        try {
            const response = await axios.get(\`https://randomuser.me/api\`);
            setData([...data, response.data]);
        } catch(error) {
            console.error(error);
        }
    }

    const loadMore = async () => {
        getData();
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap mb-6'>
                <button onClick={loadMore} className="bg-blue-500 hover:bg-blue-700 text-white
                 font-bold py-2 px-4 rounded m-2" >Load More</button>
            </div>
            <div className='w-full flex flex-wrap mb-6'>
                {data && data.length > 0 ? data.map((item, index) => (
                    <div key={index} className="w-full max-w-xs bg-white border border-gray-200
                     rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
                            <div class="flex justify-end px-4 pt-4"></div>
                            <div class="flex flex-col items-center pb-10">
                                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" 
                                src={item.results[0].picture.medium} alt={item.results[0].name.first} />
                                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                    {item.results[0].name.first} {item.results[0].name.last}
                                </h5>
                                <span class="text-sm text-gray-500 dark:text-gray-400">
                                    Age {item.results[0].dob.age}, 
                                    {item.results[0].location.city}, 
                                    {item.results[0].location.country}
                                </span>
                            </div>
                    </div>
                )) : 'Loading...'}
            </div>
            <div className='w-full flex flex-wrap mb-6'>
                <button onClick={loadMore} className="bg-blue-500 hover:bg-blue-700 text-white
                 font-bold py-2 px-4 rounded m-2" >Load More</button>
            </div>
        </div>
    )
}
`;