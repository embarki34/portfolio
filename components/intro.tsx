"use client";

import Image from "next/image";  // Import the Image component from Next.js

const Intro = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start ">
            <div className="flex flex-col gap-4 w-full md:w-9/12 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold animate-pop">Hi! I'm Embarki Omar</h1>
                <p className="text-sm md:text-base font-medium text-gray-700 ">
                    A passionate, intelligent young man with a strong academic background and high potential. With
                    degrees in Computer Science and Business Intelligence, I possess technical and analytical skills.
                    Fluent in English, French, and Arabic, I am committed to delivering innovative solutions.
                </p>
            </div>
            <div className="w-36 md:w-3/12 flex justify-center md:justify-end">
                <Image src="/images/me.jpg" alt="Omar Embarki" width={144} height={144}
                       className="rounded-full border border-gray-400 h-36 w-36 "/>
            </div>
        </div>
    );
};

export default Intro;
