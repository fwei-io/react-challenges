import React from "react";
import GitHub from '../assets/icons/github-mark-white.svg'

export default function Footer() {
    const currentYear = new Date(Date.now()).getFullYear();
    return (
        <footer id="footer" className="bg-teal-700 text-white text-xl">
            <section
                className="max-w-6xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between"
            >
                <a href="/">
                    <p className="text-sm font-light">React Challenges | { currentYear }</p>
                </a>
                <div className="flex flex-col sm:gap-2">
                    <a href="https://github.com/fwei-io/react-challenges.git" title="GitHub React Challenges">
                        <img src={GitHub} alt="GitHub" className="w-5 h-5 flex" />
                    </a>
                </div>
            </section>
        </footer>
    )
}