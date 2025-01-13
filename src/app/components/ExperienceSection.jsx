import React from 'react';

const ExperienceSection = () => {
    const workExperiences = [
        {
            id: 1,
            companyName: "Ground Effects Ltd",
            position: "Software Developer Co-op",
            duties: ["Designed and implemented optimized PHP code to address diverse project requirements, including database integration, back-end processing, and user interface functionality",
                "Leveraged complex SQL queries and stored procedures to ensure seamless data extraction and database operations",
                "Developed web applications and interactive pages, using Next.js to display real time data retrieved from database",
                "Analyzed data with visualization tools to produce actionable reports, driving data-driven decisions",
                "Deployed cloud-based workflows to automate routine tasks, improving operational efficiency and reducing manual effort by almost 80%"],
            duration: "Sept 2023 - Aug 2024",
        },
        {
            id: 2,
            companyName: "Malad Gas Service, BPCL",
            position: "Data Analyst",
            duties: [
                "Optimizing monthly statistics reporting by analyzing large datasets and integrating databases using SQL, improving accuracy by 40% and delivering valuable insights",
                "Designing interactive visualizations that simplified data insights, boosting stakeholder engagement and improving strategic business outcomes",
                "Collaborating with a team of 4-5 members to drive sales, and provide high-quality customer-service enhancing team performance and productivity"
            ],
            duration: "Jun 2023 - Present",
        },
        {
            id: 3,
            companyName: "University of Windsor",
            position: "Teaching Assistant",
            duties: [
                "Planned and facilitated labs for 30+ students on topics in Computer Science and provided personalized feedback",
                "Liaised with professor regarding development opportunities, challenges and assisting with conducting labs for students",
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