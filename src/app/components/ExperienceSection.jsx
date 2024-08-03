import React from 'react';

const ExperienceSection = () => {
    const workExperiences = [
        {
            id: 1,
            companyName: "Ground Effects Ltd",
            position: "Software Developer Co-op",
            duties: ["Integrating with the PHP codebase to develop solutions addressing diverse task requirements",
                "Proficiently using SQL to extract and manipulate data using complex queries and stored procedures, supporting seamless database operations and facilitating informed decision-making",
                "Developing React components and websites, using JavaScript for building interactive web experiences to display real time data retrieved from database tables",
                "Utilizing Report Builder to develop comprehensive reports, facilitating data-driven decision-making",
                "Designing and deploying cloud-based workflows to automate routine tasks, improving operational efficiency and reducing manual effort"],
            duration: "Sept 2023 - Present",
        },
        {
            id: 2,
            companyName: "Malad Gas Service, BPCL",
            position: "Data Analyst Intern",
            duties: [
                "Analyzing and processing data using SQL to create and test new functionalities along with integrating databases to generate reports to keep track of monthly statistics",
                "Designing and executing data visualizations to effectively communicate data insights by engaging with interactive dashboards",
                "Collaborating with a team of 4-5 members to drive sales, and provide high-quality customer-service enhancing team performance and productivity"
            ],
            duration: "Jun 2022 - Present",
        },
        {
            id: 3,
            companyName: "University of Windsor",
            position: "Teaching Assistant",
            duties: [
                "Planning and facilitating sessions for 20+ students on topics in Computer Science and providing personalized feedback",
                "Liaising with professor regarding development opportunities, challenges and assisting with conducting labs for students",
                "Coordinating with grading and assessment of 15+ student work, including homework, quizzes, and tests"
            ],
            duration: "Jan 2023 - Apr 2024",
        },
        {
            id: 4,
            companyName: "University of Windsor",
            position: "Human Resources Assistant",
            duties: [
                "Managing student hiring and transfer applications, prioritizing phone and in-person inquiries, resulting in improved administrative efficiency and enhanced communication",
                "Sorting and filing contracts and documents alphabetically, while maintaining and updating employee records of 10+ departments with VIP software"
            ],
            duration: "Oct 2022 - Aug 2023"
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