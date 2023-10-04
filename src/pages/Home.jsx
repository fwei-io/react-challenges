import React from 'react';
import PageData from '../helper/data/PageData'
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className='container my-12 mx-auto'>
            <div className="flex flex-wrap justify-center">
            {PageData.map((item, index) => (
                <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 h-76 mb-4 mx-2 rounded-xl overflow-hidden shadow-lg bg-slate-100 transition-transform transform duration-700 ease-in-out hover:-translate-y-2 hover:scale-105" key={index}>
                    <a href={item.path}>
                        <img className="w-full" src={item.thumbnails} alt={item.name} title={item.name} />
                    </a>
                    <div className="px-4 pt-2">
                        <div className="font-bold text-xl mb-2">{item.name}</div>
                        <p className="text-gray-700 text-xs">
                            {item.description.length > 80 ? item.description.substring(0, 80) + '...' : item.description}
                        </p>
                        <a href={item.path} title={item.name}  >
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mt-2 rounded-full text-xs">
                                Launch
                            </button>
                        </a>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        { item.tags.map((tag, index) => (
                            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-[10px] font-semibold text-gray-700 mr-2 mb-2" key={index}>#{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
            </div> 
        </div> 
    )
}

export default Home
