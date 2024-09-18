"use client";

import Image from "next/image";

const Achievements = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold ">Achievements</h1>

            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        1st Place Hackathon, University of Bordj Bou Arreridj
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Infiniti Club Bordj Bou Arreridj, Algeria
                    </p>
                </li>

                <li className="mb-10 ml-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        2nd Place, 3-Day Hackathon, University of Msila
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Infiniti Club Msila, Algeria
                    </p>
                </li>

                <li className="mb-10 ml-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        4th Place, National Competition for Best Developers
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Infiniti Club El Agouat, Algeria
                    </p>
                </li>

                <li className="mb-10 ml-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        AI Open Days Organizer
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Infiniti Club Bordj Bou Arreridj, Algeria
                    </p>
                </li>

                <li className="ml-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Web Development Bootcamp Speaker
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Infiniti Club
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default Achievements;
