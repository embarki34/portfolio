"use client";

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string | null>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        setIsOpen(false); // Optionally close the menu on mobile after clicking
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection: string | null = null;

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionHeight = section.offsetHeight;

                if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
                    currentSection = section.getAttribute('id');
                }
            });

            setActiveLink(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">

                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ArtiCode_X</span>
                </a>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-menu"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div
                    id="navbar-menu"
                    className={`w-full md:w-auto ${isOpen ? "block" : "hidden"} md:flex md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
                >
                    <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 md:border-0 md:bg-white">
                        <li className="md:mr-6"> {/* Adjust margin here */}
                            <a
                                href="#intro"
                                onClick={() => handleLinkClick("intro")}
                                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white ${activeLink === "intro" ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:p-0 dark:bg-blue-800 dark:text-white" : "text-gray-900 dark:hover:text-white md:dark:hover:bg-transparent"}`}
                                aria-current={activeLink === "intro" ? "page" : undefined}
                            >
                                Home
                            </a>
                        </li>
                        <li className="md:mr-6"> {/* Adjust margin here */}
                            <a
                                href="#education"
                                onClick={() => handleLinkClick("education")}
                                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white ${activeLink === "education" ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:p-0 dark:bg-blue-800 dark:text-white" : "text-gray-900 dark:hover:text-white md:dark:hover:bg-transparent"}`}
                                aria-current={activeLink === "education" ? "page" : undefined}
                            >
                                Education
                            </a>
                        </li>
                        <li className="md:mr-6"> {/* Adjust margin here */}
                            <a
                                href="#technical-skills"
                                onClick={() => handleLinkClick("technical-skills")}
                                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white ${activeLink === "technical-skills" ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:p-0 dark:bg-blue-800 dark:text-white" : "text-gray-900 dark:hover:text-white md:dark:hover:bg-transparent"}`}
                                aria-current={activeLink === "technical-skills" ? "page" : undefined}
                            >
                                Technical Skills
                            </a>
                        </li>
                        <li className="md:mr-6"> {/* Adjust margin here */}
                            <a
                                href="#achievements"
                                onClick={() => handleLinkClick("achievements")}
                                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white ${activeLink === "achievements" ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:p-0 dark:bg-blue-800 dark:text-white" : "text-gray-900 dark:hover:text-white md:dark:hover:bg-transparent"}`}
                                aria-current={activeLink === "achievements" ? "page" : undefined}
                            >
                                Achievements
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
