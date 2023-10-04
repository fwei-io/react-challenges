import { createContext, useState, useContext } from "react";
import PageData from '../helper/data/PageData'
import CodeBlock from "../components/CodeBlock"

const LanguageContext = createContext();

const translations = {
    en: {
        greeting: "Hello",
        farewell: "Goodbye",
    },
    es: {
        greeting: "Hola",
        farewell: "Adiós",
    },
    fr: {
        greeting: "Bonjour",
        farewell: "Au revoir",
    },
};

function LanguageSwitcher() {
    const { language, setLanguage } = useContext(LanguageContext);
    return (
        <div className='w-full mb-6 mt-20 justify-center text-center'>
            <button onClick={() => setLanguage("en")} className="bg-blue-500 hover:bg-blue-700
                   text-white font-bold py-2 px-4 rounded m-2">🇺🇸 EN</button>
            <button onClick={() => setLanguage("es")} className="bg-blue-500 hover:bg-blue-700
                   text-white font-bold py-2 px-4 rounded m-2">🇪🇸 ES</button>
            <button onClick={() => setLanguage("fr")} className="bg-blue-500 hover:bg-blue-700
                   text-white font-bold py-2 px-4 rounded m-2">🇫🇷 FR</button>
            <h3 className="text-[20px]">Current language: {language}</h3>
        </div>
    );
}

function Translation() {
    const { language } = useContext(LanguageContext);
    return (
        <div className='w-full mb-52 justify-center text-center'>
            <h2 className="text-[30px]">{translations[language].greeting}</h2>
            <h2 className="text-[30px]">{translations[language].farewell}</h2>
        </div>
    );
}


export default function ChangeLanguageUseContext() {
    const page = PageData.filter((element) => element.path == "/ChangeLanguageUseContext")[0]
    const [language, setLanguage] = useState("en");

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap mb-6'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left
                 text-slate-900 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <LanguageContext.Provider value={{ language, setLanguage }}>
                <LanguageSwitcher />
                <Translation />
            </LanguageContext.Provider>
            <CodeBlock code={code} />
        </div>
    );
}

const code = `
import React, { useState, useContext } from "react";

const LanguageContext = React.createContext();

const translations = {
  en: {
    greeting: "Hello",
    farewell: "Goodbye",
  },
  es: {
    greeting: "Hola",
    farewell: "Adiós",
  },
  fr: {
    greeting: "Bonjour",
    farewell: "Au revoir",
  },
};

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div>
      <button onClick={() => setLanguage("en")}>EN</button>
      <button onClick={() => setLanguage("es")}>ES</button>
      <button onClick={() => setLanguage("fr")}>FR</button>
      <p>Current language: {language}</p>
    </div>
  );
}

function Translation() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <h2>{translations[language].greeting}</h2>
      <h3>{translations[language].farewell}</h3>
    </div>
  );
}


export default function ChangeLanguageUseContext() {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <LanguageSwitcher />
      <Translation />
    </LanguageContext.Provider>
  );
}
`
