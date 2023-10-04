import React from "react";

export default function Navbar() {
    return (
        <header className="bg-teal-700 text-white sticky top-0 z-10">
            <section className="max-w-6xl mx-auto p-4 flex justify-between items-center">
                <a href="/" title="React">
                    <div class="flex items-center">
                        <img src="/images/logo-x1.png" alt="Logo" class="h-8 w-8 mr-2"/>
                        <p className="text-3xl font-medium">React Challenges</p>
                    </div>
                </a>
                <div>
                    <button
                    id="hamburger-button"
                    className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
                    >
                        <div
                            className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"
                        ></div>
                    </button>
                </div>
            </section>
            <section
                id="mobile-menu"
                className="absolute top-68 bg-black w-full text-5xl flex-col justify-center origin-top animate-open-menu hidden text-papayawhip-light"
            >
                <nav
                    className="flex flex-col min-h-screen items-center py-8"
                    aria-label="mobile"
                >
                    <a href="#hero" className="w-full text-center py-6 hover:opacity-90">
                        Home
                    </a>
                </nav>
            </section>
        </header>

    );
}