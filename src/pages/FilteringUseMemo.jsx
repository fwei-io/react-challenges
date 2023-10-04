import { useState, useMemo } from 'react';
import { productList } from '../helper/data/productList';
import PageData from '../helper/data/PageData'
import CodeBlock from '../components/CodeBlock';

function FilteringUseMemo() {
    const page = PageData.filter((element) => element.path == "/FilteringUseMemo")[0]
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = useMemo(() => {
        return productList.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [productList, searchTerm]);

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
                <div className='w-1/2 bg-white shadow-md mx-auto min-h-[350px]
                                                      rounded-lg px-8 pt-6 pb-8 mb-10'>
                    <input
                        placeholder="Search for a product..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3
                         text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"

                    />
                    <ul>
                        {filteredProducts.map(product => (
                            <li key={product.id}>{product.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <CodeBlock code={code} />
        </div>
    );
}

export default FilteringUseMemo;

const code = `
import { useState, useMemo } from 'react';
import { productList } from '../helper/data/productList';

function FilteringUseMemo() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = useMemo(() => {
        return productList.filter(product => product.name.toLowerCase()
               .includes(searchTerm.toLowerCase()));
    }, [productList, searchTerm]);

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap mb-6 justify-center text-center'>
                <div className='w-1/2 bg-white shadow-md mx-auto min-h-[350px]
                                rounded-lg px-8 pt-6 pb-8 mb-10'>
                    <input
                        placeholder="Search for a product..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3
                         text-gray-700 leading-tight focus:outline-none
                         focus:shadow-outline mb-6"
                    />
                    <ul>
                        {filteredProducts.map(product => (
                            <li key={product.id}>{product.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
`;