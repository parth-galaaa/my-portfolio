"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import cIcon from "../../../public/c.svg";
import javaIcon from "../../../public/java.svg";
import pythonIcon from "../../../public/python.svg";
import htmlIcon from "../../../public/html.svg";
import cssIcon from "../../../public/css.svg";
import javascriptIcon from "../../../public/javascript.svg";
import phpIcon from "../../../public/php.svg";
import sqlIcon from "../../../public/sql.svg";
import reactIcon from "../../../public/react.svg";
import nodejsIcon from "../../../public/nodejs.svg";
import nextjsIcon from "../../../public/nextjs.svg";
import tailwindIcon from "../../../public/tailwind.svg";
import gitIcon from "../../../public/git.svg";
import firebaseIcon from "../../../public/firebase.svg";
import vercelIcon from "../../../public/vercel.svg";
import mysqlIcon from "../../../public/mysql.svg";
import postmanlIcon from "../../../public/postman.svg";
import { AnimatePresence, motion } from 'framer-motion';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="socials flex flex-row flex-wrap gap-2 md:gap-3 lg:gap-4">
                <AnimatePresence>
                    {[
                        { src: cIcon, alt: "cIcon" },
                        { src: javaIcon, alt: "javaIcon" },
                        { src: pythonIcon, alt: "pythonIcon" },
                        { src: htmlIcon, alt: "htmlIcon" },
                        { src: cssIcon, alt: "cssIcon" },
                        { src: javascriptIcon, alt: "javascriptIcon" },
                        { src: phpIcon, alt: "phpIcon" },
                        { src: sqlIcon, alt: "sqlIcon" },
                        { src: reactIcon, alt: "reactIcon" },
                        { src: nodejsIcon, alt: "nodejsIcon" },
                        { src: nextjsIcon, alt: "nextjsIcon" },
                        { src: tailwindIcon, alt: "tailwindIcon" },
                        { src: gitIcon, alt: "gitIcon" },
                        { src: firebaseIcon, alt: "firebaseIcon" },
                        { src: vercelIcon, alt: "vercelIcon" },
                        { src: mysqlIcon, alt: "mysqlIcon" },
                        { src: postmanlIcon, alt: "postmanlIcon" }
                    ].map((icon, index) => (
                        <motion.div
                            key={icon.alt}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Image src={icon.src} alt={icon.alt} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <div className="border border-gray-300 rounded-md p-4">
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-auto md:flex-grow">
                        <h3 className="font-bold text-lg mb-2">University of Windsor</h3>
                        <p className="text-sm">Bachelor of Computer Science Honours (Co-op)</p>
                        <p className="text-xs text-gray-300 mb-1">Minor in Mathematics along with a Specialization in AI</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm">Fall 2021 - Present</p>
                    </div>
                </div>
            </div>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [inView, setInView] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {
                threshold: 0.5 // Adjust as needed
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    const handleTabChange = (id) => {
        setTab(id);
    };

    return (
        <section id="about" className="text-white" ref={aboutRef}>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 sl:gap-16 xl:px-16">
                <Image src="/images/setup.jpg" alt="Setup" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">Description</p>
                    <div className="flex flex-row justify-start mt-8">
                        {TAB_DATA.map((tabItem) => (
                            <TabButton key={tabItem.id} selectTab={() => handleTabChange(tabItem.id)} active={tab === tabItem.id}>
                                {tabItem.title}
                            </TabButton>
                        ))}
                    </div>
                    <div className="mt-8">
                        {inView && (
                            <AnimatePresence>
                                {TAB_DATA.find((t) => t.id === tab).content}
                            </AnimatePresence>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
