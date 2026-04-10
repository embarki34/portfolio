"use client";

const TechnicalSkills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["JavaScript", "TypeScript", "Python", "SQL", "Bash"],
            color: "blue"
        },
        {
            title: "Backend & AI",
            skills: ["Node.js", "Express.js", "FastApi", "Flask", "LangChain", "Transformers", "PyTorch", "TensorFlow"],
            color: "green"
        },
        {
            title: "Frontend",
            skills: ["React.js", "Next.js", "React Native (Expo)", "Tailwind CSS", "ShadCN UI"],
            color: "purple"
        },
        {
            title: "Database & Storage",
            skills: ["MongoDB", "MariaDB", "PostgreSQL", "MinIO"],
            color: "red"
        },
        {
            title: "DevOps & Tools",
            skills: ["Docker (Swarm/Compose)", "Azure DevOps", "Linux", "Nginx", "Nexus", "Prometheus", "Grafana"],
            color: "orange"
        },
        {
            title: "Concepts",
            skills: ["REST APIs", "Microservices", "CI/CD", "Agile/Scrum", "System Design", "Testing (k6/SonarQube)"],
            color: "indigo"
        }
    ];

    const getColorClass = (color: string) => {
        const classes: { [key: string]: string } = {
            blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
            green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
            purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
            red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
            orange: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
            indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
        };
        return classes[color] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    };

    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold mb-4">Technical Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="flex flex-col p-4 border border-gray-100 dark:border-gray-800 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-semibold mb-3">{category.title}</h2>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIdx) => (
                                <span 
                                    key={sIdx} 
                                    className={`${getColorClass(category.color)} text-xs font-medium px-2.5 py-1 rounded-full`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnicalSkills;

