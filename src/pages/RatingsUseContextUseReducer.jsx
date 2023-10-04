import { createContext, useContext, useReducer } from "react";
import PageData from '../helper/data/PageData'
import { restaurants } from "../helper/data/restaurants";
import CodeBlock from "../components/CodeBlock"

const actions = {
    SET_RATING: 'SET_RATING',
    SET_PRICE: 'SET_PRICE',
    RESET: 'RESET',
};

const initialState = {
    price: null,
    rating: null,
};

function reducer(state, action) {
    switch (action.type) {
        case actions.SET_RATING:
            return { ...state, rating: action.value };
        case actions.SET_PRICE:
            return { ...state, price: action.value };
        case actions.RESET:
            return initialState;
        default:
            return state;
    }
}

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

const RestaurantFilter = () => {
    const { state, dispatch } = useContext(FilterContext);

    return (
        <div>
            <label>Min Rating: 
                {[1, 2, 3, 4, 5].map(num => (
                    <button
                        key={num}
                        onClick={() => dispatch({ type: actions.SET_RATING, value: num })}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-1"
                        style={{ boxShadow: state.rating >= num ? '0 1px 4px 1px rgba(0, 0, 0, 0.5)' : 'none', 
                                 border: state.rating >= num ? "3px solid white": "none",
                                 padding: state.rating >= num ? "1px 5px" : "" }}
                    >
                        <span role="img" aria-label={`${num} star`}>⭐️</span>
                    </button>
                ))}
            </label>
            <hr />
            <label>Price: 
                {[1, 2, 3].map(num => (
                    <button
                        key={num}
                        onClick={() => dispatch({ type: actions.SET_PRICE, value: num })}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded m-1" 
                        style={{ boxShadow: state.price >= num ? '0 1px 4px 1px rgba(0, 0, 0, 0.5)' : 'none', 
                                 border: state.price >= num ? "3px solid white": "none",
                                 padding: state.price >= num ? "1px 9px" : "" }}
                        >
                        <span role="img" aria-label={`${num} money bag`}>$</span>
                    </button>
                ))}
            </label>
            <hr />
            <button onClick={() => dispatch({ type: actions.RESET })} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded m-2">
                        Reset Filters
            </button>
            <hr />
        </div>
    );
};

const RestaurantList = ({ restaurants }) => {
    const { state } = useContext(FilterContext);

    const filteredRestaurants = restaurants.filter((restaurant) => {
        return (
            (state.price == null || restaurant.price === state.price) &&
            (state.rating == null || restaurant.rating >= state.rating)
        );
    });

    return (
        <ul className="mt-6">
            {filteredRestaurants.map((restaurant) => (
                <li key={restaurant.name} className="mb-3">
                    <h3 className="font-bold text-slate-600 -mb-1">{restaurant.name}</h3>
                    {[...Array(restaurant.rating)].map((_, n) => (
                        <span role="img" aria-label="star" key={n} className="text-xs">
                            ⭐️
                        </span>
                    ))}
                    <span className="pl-5"></span>
                    {[...Array(restaurant.price)].map((_, n) => (
                        <span role="img" aria-label="money bag" key={n} className="text-xs">
                            💲
                        </span>
                    ))}
                </li>
            ))}
        </ul>
    );
};

export default function RatingsUseContextUseReducer() {
    const page = PageData.filter((element) => element.path == "/RatingsUseContextUseReducer")[0]
    return (
        <div className='w-full'>
            <div className='w-full mb-10'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900
                 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <div className='w-full'>
                <FilterProvider>
                    <RestaurantFilter />
                    <RestaurantList restaurants={restaurants} />
                </FilterProvider>
            </div>
            <CodeBlock code={code} />
        </div>
    );
}




const code = `
import { createContext, useContext, useReducer } from "react";
import { restaurants } from "../helper/data/restaurants";

const actions = {
    SET_RATING: 'SET_RATING',
    SET_PRICE: 'SET_PRICE',
    RESET: 'RESET',
};

const initialState = {
    price: null,
    rating: null,
};

function reducer(state, action) {
    switch (action.type) {
        case actions.SET_RATING:
            return { ...state, rating: action.value };
        case actions.SET_PRICE:
            return { ...state, price: action.value };
        case actions.RESET:
            return initialState;
        default:
            return state;
    }
}

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

const RestaurantFilter = () => {
    const { state, dispatch } = useContext(FilterContext);

    return (
        <div>
            <label>Min Rating: 
                {[1, 2, 3, 4, 5].map(num => (
                    <button
                        key={num}
                        onClick={() => dispatch({ type: actions.SET_RATING, value: num })}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-1"
                        style={{ boxShadow: state.rating >= num ? '0 1px 4px 1px rgba(0, 0, 0, 0.5)' : 'none', 
                                 border: state.rating >= num ? "3px solid white": "none",
                                 padding: state.rating >= num ? "1px 5px" : "" }}
                    >
                        <span role="img" aria-label={\`\${num} star\`}>⭐️</span>
                    </button>
                ))}
            </label>
            <hr />
            <label>Price: 
                {[1, 2, 3].map(num => (
                    <button
                        key={num}
                        onClick={() => dispatch({ type: actions.SET_PRICE, value: num })}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded m-1" 
                        style={{ boxShadow: state.price >= num ? '0 1px 4px 1px rgba(0, 0, 0, 0.5)' : 'none', 
                                 border: state.price >= num ? "3px solid white": "none",
                                 padding: state.price >= num ? "1px 9px" : "" }}
                        >
                        <span role="img" aria-label={\`\${num} money bag\`}>$</span>
                    </button>
                ))}
            </label>
            <hr />
            <button onClick={() => dispatch({ type: actions.RESET })} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded m-2">
                        Reset Filters
            </button>
            <hr />
        </div>
    );
};

const RestaurantList = ({ restaurants }) => {
    const { state } = useContext(FilterContext);

    const filteredRestaurants = restaurants.filter((restaurant) => {
        return (
            (state.price == null || restaurant.price === state.price) &&
            (state.rating == null || restaurant.rating >= state.rating)
        );
    });

    return (
        <ul>
            {filteredRestaurants.map((restaurant) => (
                <li key={restaurant.name} className="mb-3">
                    <h3 className="font-bold text-slate-600 -mb-1">{restaurant.name}</h3>
                    {[...Array(restaurant.rating)].map((_, n) => (
                        <span role="img" aria-label="star" key={n} className="text-xs">
                            ⭐️
                        </span>
                    ))}
                    <span className="pl-5"></span>
                    {[...Array(restaurant.price)].map((_, n) => (
                        <span role="img" aria-label="money bag" key={n} className="text-xs">
                            💲
                        </span>
                    ))}
                </li>
            ))}
        </ul>
    );
};

export default function RatingsUseContextUseReducer() {
    return (
        <div className='w-full'>
            <div className='w-full'>
                <FilterProvider>
                    <RestaurantFilter />
                    <RestaurantList restaurants={restaurants} />
                </FilterProvider>
            </div>
        </div>
    );
}
`