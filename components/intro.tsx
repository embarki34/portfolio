"use client";

import Image from "next/image"; // Import the Image component from Next.js

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center md:items-start ">
      <div className="w-48 md:w-3/12 flex justify-center md:justify-end">
        <Image
          src="/images/me.webp"
          alt="Omar Embarki"
          width={260}
          height={260}
          className="rounded-full border border-gray-400 h-48 w-48 shadow-lg shadow-gray-500/50 object-cover  object-[center_1%]"
        />
      </div>
    <div className="flex flex-col gap-4 w-full md:w-9/12 text-center md:text-left">
  <h1 className="text-3xl md:text-4xl font-bold animate-pop">
    Hi! I&apos;m Embarki Omar
  </h1>

  <ul className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
    <li>
      Results-driven Full-Stack Developer and AI Engineer
    </li>
    {/* <li>
      Strong academic foundation in Computer Science and Business Intelligence
    </li> */}
    <li>
      Experience across the full software development lifecycle
    </li>
    <li>
      Backend expertise with Node.js and scalable architecture design
    </li>
    <li>
      Frontend development with React and responsive UI design
    </li>
    <li>
      DevOps skills including Docker and CI/CD pipelines
    </li>
    <li>
      Focus on automation, security, and performance optimization
    </li>
  </ul>
</div>
    </div>
  );
};

export default Intro;
