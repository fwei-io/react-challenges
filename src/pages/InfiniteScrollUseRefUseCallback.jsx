import { useState, useRef, useCallback } from 'react';
import PageData from '../helper/data/PageData';
import CodeBlock from '../components/CodeBlock';

const generateData = (start, count = 20) => {
    return Array.from({ length: count }).map((_, idx) => start + idx + 1);
};

export default function InfiniteScrollUseRefUseCallback() {
    const page = PageData.filter((element) => element.path == "/InfiniteScrollUseRefUseCallback")[0]
    const [items, setItems] = useState(() => generateData(0));
    const observerRef = useRef(null);

    const lastItemRef = useCallback(node => {
        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && items.length < 1000) {
                const newItems = generateData(items.length);
                setItems(prevItems => [...prevItems, ...newItems]);
            }
        });

        if (node) observerRef.current.observe(node);
    }, [items]);

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap mb-6'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left
                 text-slate-900 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <div className='w-full max-h-[300px] overflow-y-auto w-1/5 bg-slate-100 shadow-md 
                            mx-auto rounded px-8 pt-6 pb-4 mb-10 text-center'>
                {items.map((item, index) => {
                    if (index + 1 === items.length) {
                        return <div ref={lastItemRef} key={item}>Item {item}</div>;
                    } else {
                        return <div key={item}>Item {item}</div>;
                    }
                })}
            </div>
            <CodeBlock code={code} />
        </div>
    );
}


const code = `
import { useState, useRef, useCallback } from 'react';

const generateData = (start, count = 20) => {
    return Array.from({ length: count }).map((_, idx) => start + idx + 1);
};

export default function InfiniteScrollUseRefUseCallback() {
    const [items, setItems] = useState(() => generateData(0));
    const observerRef = useRef(null);

    const lastItemRef = useCallback(node => {
        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && items.length < 1000) {
                const newItems = generateData(items.length);
                setItems(prevItems => [...prevItems, ...newItems]);
            }
        });

        if (node) observerRef.current.observe(node);
    }, [items]);

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full max-h-[400px] overflow-y-auto w-1/5 bg-slate-100 shadow-md 
                            mx-auto rounded px-8 pt-6 pb-4 mb-10 text-center'>
                {items.map((item, index) => {
                    if (index + 1 === items.length) {
                        return <div ref={lastItemRef} key={item}>Item {item}</div>;
                    } else {
                        return <div key={item}>Item {item}</div>;
                    }
                })}
            </div>
        </div>
    );
}
`;