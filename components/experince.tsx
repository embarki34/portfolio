"use client";

import React from 'react';
import Image from 'next/image';

const experiences = [
    {
        title: "Patient Sentiment Monitoring System",
        duration: "March 2024 – Present",
        technologies: "Python, TensorFlow, Hugging Face",
        description: [
            "Performed data augmentation on an Algerian dialect dataset.",
            "Utilized state-of-the-art transformers and fine-tuning techniques.",
            "Created a mobile and web interface.",
        ],
        image: "/images/icons8-hugging-face-96.png", // Replace with actual image path
    },
    {
        title: "YouTube Transcription and Summarizing",
        duration: "August 2024 – August 2024",
        technologies: "Python, Flask, NLTK, Hugging Face, Flutter",
        description: [
            "Implemented a Flask API with Streamlit for web interface and a mobile interface with Flutter.",
        ],
        image: "/images/icons8-transcript-100.png", // Replace with actual image path
    },
    {
        title: "Multi-Vendor E-commerce Web Application",
        duration: "March 2022 – June 2022",
        technologies: "HTML, CSS, JavaScript, SQL, Bootstrap",
        description: [
            "Managed database operations and queries with SQL.",
            "Utilized Bootstrap for consistent and responsive styling.",
        ],
        image: "/images/icons8-online-shop-100.png", // Replace with actual image path
    },
    {
        title: "Chat with PDF Utilizing ChatGPT API and Context Embedding",
        duration: "May 2024 – June 2024",
        technologies: "Python, ChatGPT API, Context Embedding, WebUI",
        description: [
            "Built an NLP project utilizing the ChatGPT API with context embedding for dynamic conversation with PDFs.",
        ],
        image: "/images/icons8-chat-100.png", // Replace with actual image path
    },
];

const Experience = () => {
    return (
        <div className="experience-container p-6">
            <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold mb-6">Projects & Experience</h1>
            <div className="grid gap-8">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="experience-item flex flex-col md:flex-row items-center border p-4 rounded-lg shadow-md"
                    >
                        <Image
                            src={experience.image}
                            alt={experience.title}
                            width={100}
                            height={100}
                            className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg mb-4 md:mb-0"
                        />
                        <div className="md:ml-6">
                            <h2 className="text-xl font-semibold">{experience.title}</h2>
                            <p className="text-sm text-gray-500">{experience.duration}</p>
                            <p className="text-sm text-gray-700 mt-2">
                                <strong>Technologies:</strong> {experience.technologies}
                            </p>
                            <ul className="list-disc ml-5 mt-2">
                                {experience.description.map((desc, i) => (
                                    <li key={i} className="text-sm text-gray-600">
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Experience;
