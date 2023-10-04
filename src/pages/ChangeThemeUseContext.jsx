import { createContext, useState, useContext } from "react";
import PageData from '../helper/data/PageData'
import CodeBlock from "../components/CodeBlock"

const ThemeContext = createContext();

function WholePage() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="container mx-auto my-20">
            <h3 className="text-xl font-bold mb-10">Current Theme: {theme}</h3>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but also the 
                leap into electronic typesetting, remaining essentially unchanged. It was 
                popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently with desktop publishing software 
                like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    );
}

function Buttons() {
    const { setTheme } = useContext(ThemeContext);
    return (
        <div>
            <button className="bg-white hover:bg-slate-100 text-black font-bold py-2 
            px-4 rounded m-2 border-solid border-2 border-neutral-200 border-" 
            onClick={() => setTheme("Light")}>
                Light
            </button>
            <button className="bg-slate-800 hover:bg-slate-500 text-white font-bold 
            py-2 px-4 rounded m-2" onClick={() => setTheme("Dark")}>
                Dark
            </button>
        </div>
    );
}

export default function ChangeThemeUseContext() {
    const page = PageData.filter((element) => element.path == "/ChangeThemeUseContext")[0]
    const [theme, setTheme] = useState("Light");

    const themeStyles = theme === "Light" ? {
        backgroundColor: "white",
        color: "grey"
    } : {
        backgroundColor: "#222222",
        color: "white"
    };

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap mb-6'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left
                 text-slate-900 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div style={themeStyles} className="p-6 m-6 rounded-lg">
                    <Buttons />
                    <WholePage />
                    <Buttons />
                </div>
            </ThemeContext.Provider>
            <CodeBlock code={code} />
        </div>
  );
}

const code = `
import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

function WholePage() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="container mx-auto my-20">
            <h3 className="text-xl font-bold mb-10">Current Theme: {theme}</h3>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but also the 
                leap into electronic typesetting, remaining essentially unchanged. It was 
                popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently with desktop publishing software 
                like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    );
}

function Buttons() {
    const { setTheme } = useContext(ThemeContext);
    return (
        <div>
            <button className="bg-white hover:bg-slate-100 text-black font-bold py-2 
            px-4 rounded m-2 border-solid border-2 border-neutral-200 border-" 
            onClick={() => setTheme("Light")}>
                Light
            </button>
            <button className="bg-slate-800 hover:bg-slate-500 text-white font-bold 
            py-2 px-4 rounded m-2" onClick={() => setTheme("Dark")}>
                Dark
            </button>
        </div>
    );
}

export default function ChangeThemeUseContext() {
    const [theme, setTheme] = useState("Light");

    const themeStyles = theme === "Light" ? {
        backgroundColor: "white",
        color: "grey"
    } : {
        backgroundColor: "black",
        color: "white"
    };

    return (
        <div className='w-full flex flex-wrap'>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div style={themeStyles} className="p-6 m-6 rounded-lg">
                    <Buttons />
                    <WholePage />
                    <Buttons />
                </div>
            </ThemeContext.Provider>
        </div>
  );
}
`
