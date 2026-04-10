"use client";

import React from 'react';


const professionalExperiences = [
    {
        company: "Condor Electronics Algeria",
        role: "Full-Stack Developer & AI Engineer",
        duration: "Oct 2024 – Present",
        description: [
            "Insurance Management System: Engineered a platform (Node.js, React, MongoDB) for policy and premium management with dynamic object creation.",
            "Litigation Management System: Centralized case tracking for the legal department, automating PDF reports and documentation.",
            "eFacility (E-Commerce & FinTech): Developed a specialized platform for consumption loans with banking integration and fidelity programs.",
            "Law No. 18-07 Compliance: Built a digital consent system with document signing, saving over 500,000 DZD in operational costs.",
            "Cristor AI Chatbot: Integrated LLMs (LangChain, Transformers) for a context-aware internal support assistant.",
            "DevOps: Established CI/CD pipelines (Azure DevOps, Docker Swarm) and monitoring (Prometheus, Grafana)."
        ],
        image: "/images/condor_electronics_logo.png", // Attempting a standard logo path or placeholder
        technologies: "Node.js, React, MongoDB, LangChain, Azure DevOps, Docker"
    },
    {
        company: "Freelance",
        role: "Full-Stack Developer",
        duration: "2020 – Present",
        description: [
            "Lyvio Pro (SaaS): Developed a comprehensive invoicing and business management platform for freelancers.",
            "Sarl Devatech: Built a corporate platform with a user-friendly product catalog for poultry equipment.",
            "Delivered end-to-end web solutions for diverse clients, managing full lifecycle from requirements to deployment."
        ],
        image: "/images/freelance_logo.png",
        technologies: "Next.js, React, PostgreSQL, Node.js"
    },
    {
        company: "Infinity Club Bordj Bou Arreridj",
        role: "Development Team Lead & AI Organizer",
        duration: "2023 – 2024",
        description: [
            "Led a team of student developers, mentoring on modern web technologies and git workflows.",
            "Organized AI Open Days and coding workshops, delivering keynote speeches on AI trends."
        ],
        image: "/images/infinity_club_logo.png",
        technologies: "Git, Leadership, AI, Public Speaking"
    }
];

const Experience = () => {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold mb-4">Professional Experience</h1>
            <div className="flex flex-col gap-12">
                {professionalExperiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-0">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full md:w-3/4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h2>
                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit">
                                        {exp.duration}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">{exp.company}</h3>
                                <ul className="space-y-3 mb-4">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 group">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                                    {exp.technologies.split(', ').map((tech, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-gray-500 dark:text-gray-500">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;

