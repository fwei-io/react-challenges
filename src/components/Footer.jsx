import React from "react";

export default function Footer() {
    const currentYear = new Date(Date.now()).getFullYear();
    return (
        <footer id="footer" className="bg-teal-700 text-white text-xl">
            <section
                className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between"
            >
                <address>
                    <a href="https://github.com/fwei-io/react-challenges.git">
                        <p className="text-sm">React Challenges</p>
                    </a>
                </address>

                <div className="flex flex-col sm:gap-2">
                    <a href="https://github.com/fwei-io/react-challenges.git">
                        <p className="text-right text-sm">fwei-io { currentYear }</p>
                    </a>
                </div>
            </section>
        </footer>
    )
}