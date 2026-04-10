"use client";

const Achievements = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold ">Achievements</h1>

            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Academic Excellence & Top Rankings</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Ranked 1st in Master 1 and graduated among the top 7 students at Bordj Bou Arreridj University.
                    </p>
                </li>

                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Hackathon Winner</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        1st Place at Bordj Bou Arreridj University Hackathon and 2nd Place at Msila 4-day National Hackathon.
                    </p>
                </li>

                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Conference & Keynote Speaker</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 italic">
                        &quot;AI in Healthcare&quot; &amp; &quot;Sentiment Analysis for Mental Health&quot;
                    </p>
                    <p className="text-sm text-gray-500">
                        Presented at international summits in Boumerdes and Msila, and delivered keynote for Condor Academy.
                    </p>
                </li>

                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Ranked Developer</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Ranked among the top 4 developers at Laghouat University.
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default Achievements;
