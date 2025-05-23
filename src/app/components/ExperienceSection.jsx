import React from 'react';

const ExperienceSection = () => {
    const workExperiences = [
        {
            id: 1,
            companyName: "Ground Effects Ltd",
            position: "Software Developer Co-op",
            duties: ["Designed and optimized web applications using PHP and JavaScript to address diverse project requirements, including database integration, back-end processing, responsive user interface",
                "Developed and maintained data pipelines supporting 3+ cross-functional teams, by leveraging complex SQL queries and stored procedures for efficient data extraction and transformation",
                "Analyzed data using different visualization tools to generate actionable reports, driving data-driven decisions",
                "Automated workflows using Azure and AWS cloud solutions to perform routine tasks, reducing manual effort byalmost 80%"],
            duration: "Sept 2023 - Aug 2024",
        },
        {
            id: 2,
            companyName: "Malad Gas Service, BPCL",
            position: "Data Analyst",
            duties: [
                "Optimized monthly statistics reporting by analyzing large datasets and integrating databases using SQL, improving accuracy by 60% and delivering valuable insights",
                "Created interactive visualizations that simplified data insights, boosting stakeholder engagement and improving strategic business outcomes by 40%",
                "Collaborated with a team of 4-5 members to drive sales, and provide high-quality customer-service enhancing team performance and productivit"
            ],
            duration: "May 2022 - Aug 2023",
        },
        {
            id: 3,
            companyName: "University of Windsor",
            position: "Teaching Assistant",
            duties: [
                "Planned and facilitated labs for 30+ students for courses in Computer Science and provided personalized feedback",
                "Liaised with professor regarding development opportunities, challenges and assisting with lectures for students",
                "Coordinated with grading and assessment of 25+ student work, including assignments, quizzes, and tests"
            ],
            duration: "Jan 2023 - Dec 2024",
        }
    ];

    return (
        <section id="experiences" className="text-white mt-2 sm:mb-16 md:mb-28 lg:mb-32">
            <h2 className="text-4xl lg:text-6xl font-bold text-white text-left mb-8 mt-12">Work Experience</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
                {workExperiences.map((experience) => (
                    <div key={experience.id} className="rounded-lg overflow-hidden shadow-lg h-full" style={{ background: 'linear-gradient(135deg, #12100E, #2c3e50)' }}>
                        <div className="px-6 py-4 h-full flex flex-col justify-between">
                            <div>
                                <div className="font-bold text-xl mb-2 text-white">{experience.companyName}</div>
                                <p className="text-gray-200 text-base mb-2">{experience.position}</p>
                                <ul className="list-disc list-inside overflow-auto max-h-36" style={{ textAlign: 'justify' }}>
                                    {experience.duties.map((duty, index) => (
                                        <li key={index} className="text-gray-300 text-sm mb-1">{duty}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-gray-300 text-base">{experience.duration}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;