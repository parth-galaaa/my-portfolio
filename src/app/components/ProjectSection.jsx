"use client";

import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: "Text Analyzer",
        description: "AI-powered tool to perform summary, paraphrasing, sentiment analysis and translation",
        image: "/images/text.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/parth-galaaa/text-analyzer",
    },
    {
        id: 2,
        title: "Sentiment-Analysis-on-Amazon-Reviews",
        description: "What emotions do these reviews convey?",
        image: "/images/sentiment.png",
        tag: ["All", "CLI"],
        gitUrl: "https://github.com/parth-galaaa/Sentiment-Analysis-on-Amazon-Reviews",
    },
    {
        id: 3,
        title: "Real-Time Market Data Forecasting",
        description: "Market Data Forecasting using Machine Learning",
        image: "/images/stockprediction.png",
        tag: ["All", "CLI"],
        gitUrl: "https://github.com/parth-galaaa/Machine-Learning-Project",
    },
    {
        id: 4,
        title: "Personal Portfolio Website",
        description: "Welcome to my WEBSITE!",
        image: "/images/portfolio.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/parth-galaaa/my-portfolio",
    },
    {
        id: 5,
        title: "Expense Tracker App",
        description: "Want to keep your expenses in check?",
        image: "/images/expenseTracker1.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/parth-galaaa/ExpenseTracker",
    },
    {
        id: 6,
        title: "Ecommerce Website",
        description: "Thinking about elevating your everyday shopping experience?",
        image: "/images/ecommerce.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/parth-galaaa/Ecommerce-Website",
    },
    {
        id: 7,
        title: "Four in a Row",
        description: "Let's see who makes a 4 first..",
        image: "/images/fourinarow.webp",
        tag: ["All", "CLI"],
        gitUrl: "https://github.com/parth-galaaa/four-in-a-row",
    },
    {
        id: 8,
        title: "Calculator",
        description: "Trouble with calculations?",
        image: "/images/calculator.jpg",
        tag: ["All", "CLI"],
        gitUrl: "https://github.com/parth-galaaa/simple-calculator",
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section ref={ref} id="project">
            <h2 className="text-4xl lg:text-6xl font-bold text-white text-center mt-12">Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
                <ProjectTag onClick={handleTagChange} name="CLI" isSelected={tag === "CLI"} />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 and md:gap-12">
                {
                    filteredProjects.map((project) => (
                        <motion.li key={project.id} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: project.id * 0.4 }}>
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                            />
                        </motion.li>
                    ))}
            </ul>
        </section>
    )
}

export default ProjectSection