"use client";

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Patient Sentiment Monitoring System",
        duration: "March 2024 – May 2024",
        technologies: ["Python", "TensorFlow", "Hugging Face"],
        description: "Fine-tuned transformer models on custom Algerian dialect dataset for sentiment analysis. Engineered data augmentation pipeline for local dialects.",
        links: { github: "#", external: "#" }
    },
    {
        title: "YouTube Transcription & Summarizer",
        duration: "August 2024",
        technologies: ["Python", "Flask", "NLTK", "Flutter"],
        description: "Back-end service to transcribe and summarize YouTube videos. Built both responsive web (Streamlit) and mobile (Flutter) front-ends.",
        links: { github: "#", external: "#" }
    },
    {
        title: "Chat with PDF using RAG",
        duration: "May 2024 – June 2024",
        technologies: ["Python", "OpenAI API", "RAG", "Streamlit"],
        description: "Conversational AI tool allowing users to upload and query PDF documents using natural language with Retrieval-Augmented Generation.",
        links: { github: "#", external: "#" }
    }
];

const shoutOuts = [
    {
        name: "Artifood",
        description: "Specialized food tech platform.",
        url: "https://artifood.shop/ar",
    },
    {
        name: "e-Facility",
        description: "Consumption loans & FinTech integration platform.",
        url: "https://e-faciliti.dz/",
    },
    {
        name: "Condor Tawdif",
        description: "Official recruitment portal for Condor Group.",
        url: "https://tawdif.condor.dz/",
    }
];

const SideProjects = () => {
    return (
        <div className="flex flex-col gap-12">
            <div>
                <h1 className="text-2xl font-bold mb-6">Experimental & Side Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-lg font-bold group-hover:text-blue-600 transition-colors uppercase tracking-tight">{project.title}</h2>
                                <div className="flex gap-2">
                                    <Github className="size-5 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                                    <ExternalLink className="size-5 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">{project.duration}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 italic">
                                &quot;{project.description}&quot;
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="text-[10px] bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded border border-gray-100 dark:border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-8 rounded-3xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    Featured Platforms & Shout-outs
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {shoutOuts.map((shout, index) => (
                        <a 
                            key={index} 
                            href={shout.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col gap-1 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors group"
                        >
                            <span className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 flex items-center gap-1">
                                {shout.name}
                                <ExternalLink className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </span>
                            <span className="text-xs text-gray-500">{shout.description}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SideProjects;
