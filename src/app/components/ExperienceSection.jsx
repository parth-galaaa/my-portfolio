import React from 'react';

const ExperienceSection = () => {
    const workExperiences = [
        {
            id: 1,
            companyName: "Ground Effects Ltd",
            position: "IT Co-op",
            duties: ["Developed and implemented cloud flows to effortlessly transfer attachments from Outlook to the SharePoint server, leading to a 60% reduction in manual effort",
                "Optimized database performance by creating and altering complex SQL queries and stored procedures, resulting in faster query execution time and better overall system efficiency",
                "Integrated with the PHP codebase to meet several task requirements, contributing to seamless and efficient results, such as automatic import of data from external files into database tables, thereby saving hours of manual data import",
                "Utilized Report Builder to develop comprehensive reports, facilitating data-driven decision-making",
                " Designed and modified React components, using JavaScript for building interactive web experiences to display real time data retrieved from database tables"],
            duration: "Sept 2023 - Present",
        },
        {
            id: 2,
            companyName: "Malad Gas Service, BPCL",
            position: "Data Analyst and Sales Associatree",
            duties: [
                "Analyzing and processing data using SQL to create and test new functionalities along with integrating databases to generate reports to keep track of monthly statistics",
                "Leading a team of 4-5 members to collaborate on sales, and provide high-quality customer-service enhancing team performance and productivity"
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
        <section id="experiences" className="text-white mt-2">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
                Work Experience
            </h2>
            {workExperiences.map((experience) => (
                <div key={experience.id} className="rounded-b-xl bg-[#181818] p-4 mb-4">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="font-bold mb-1 flex items-center">
                                <span className="text-2xl">{experience.companyName}</span>
                            </h3>
                            <p className="text-1xl">{experience.position}</p>
                            <ul className="list-disc list-inside mt-2">
                                {experience.duties.map((duty, index) => (
                                    <li key={index} className="text-sm">{duty}</li>
                                ))}
                            </ul>
                        </div>
                        <span className="text-1xl">{experience.duration}</span>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ExperienceSection;