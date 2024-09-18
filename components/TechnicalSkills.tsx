"use client";

const TechnicalSkills = () => {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold mb-4">Technical Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Programming Languages */}
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold mb-2">Programming Languages</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Python</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">HTML</span>
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">SQL</span>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">JavaScript</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Dart</span>
                    </div>
                </div>
                {/* Frameworks */}
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold mb-2">Frameworks</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">TensorFlow</span>
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">PyTorch</span>
                        <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">Keras</span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Flutter</span>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">FastAPI</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Flask</span>
                    </div>
                </div>
                {/* Libraries & Tools */}
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold mb-2">Libraries & Tools</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">NumPy</span>
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Pandas</span>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Scikit-learn</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">NLTK</span>
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Streamlit</span>
                    </div>
                </div>
                {/* Additional Skills */}
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold mb-2">Additional Skills</h2>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Extensive experience with generative AI APIs, as well as web and mobile development.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TechnicalSkills;
