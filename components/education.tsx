"use client";

const Education = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Education</h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022 – 2024</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Master’s in Business Intelligence</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">University of Bordj Bou Arreridj, Bordj Bou Arreridj, Algeria</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018 – 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor’s in Computer Science</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">University of Bordj Bou Arreridj, Bordj Bou Arreridj, Algeria</p>
                </li>
            </ol>
        </div>
    );
};

export default Education;
