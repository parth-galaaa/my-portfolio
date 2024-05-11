"use client";

import React, {useState, useRef} from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { animate, motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        description: "Welcome to my WEBSITE!",
        image: "/images/portfolio.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/parth-galaaa/ExpenseTracker.git",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Expense Tracker App",
        description: "Want to keep your expenses in check?",
        image: "/images/expenseTracker1.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/parth-galaaa/ExpenseTracker.git",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Ecommerce Website",
        description: "Thinking about elevating your everyday?",
        image: "/images/ecommerce.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/parth-galaaa/ExpenseTracker.git",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Four in a Row",
        description: "Let's see who makes a 4 first..",
        image: "/images/fourinarow.webp",
        tag: ["All","CLI"],
        gitUrl: "https://github.com/parth-galaaa/four-in-a-row.git",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Calculator",
        description: "Trouble with calculations?",
        image: "/images/calculator.jpg",
        tag: ["All", "CLI"],
        gitUrl: "https://github.com/parth-galaaa/simple-calculator.git",
        previewUrl: "/",
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
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1},
    };

  return (
    <section ref={ref} id="project">
        <h2 className = "text-center text-4xl font-bold text-white mt-4">
            My Projects
        </h2>
        <div className = "text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
            <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
            <ProjectTag onClick={handleTagChange} name="CLI" isSelected={tag === "CLI"} />
        </div>
        <ul ref={ref} className = "grid md:grid-cols-3 gap-8 and md:gap-12">
            {
                filteredProjects.map((project) => (
                    <motion.li key = {project.id} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration:0.3, delay: project.id * 0.4}}>
                        <ProjectCard  
                        title = {project.title} 
                        description = {project.description} 
                        imgUrl = {project.image} 
                        gitUrl={project.gitUrl} 
                        previewUrl={project.previewUrl} 
                        />
                    </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectSection