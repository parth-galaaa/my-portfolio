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
import awsIcon from "../../../public/aws.svg";
import azureIcon from "../../../public/azure.svg";
import jupyterIcon from "../../../public/jupyter.svg";
import TableauIcon from "../../../public/tableau.svg";
import matplotlibIcon from "../../../public/matplotlib.svg";
import numpyIcon from "../../../public/numpy.svg";
import pandasIcon from "../../../public/pandas.svg";
import scikitIcon from "../../../public/scikitlearn.svg";
import tensorflowIcon from "../../../public/tensorflow.svg";
import kerasIcon from "../../../public/keras.svg";
import pytorchIcon from "../../../public/pytorch.svg";
import powerautomateIcon from "../../../public/powerautomate.svg";
import powerbiIcon from "../../../public/powerbi.svg";

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
                        { src: postmanlIcon, alt: "postmanlIcon" },
                        { src: awsIcon, alt: "awsIcon" },
                        { src: azureIcon, alt: "azureIcon" },
                        { src: jupyterIcon, alt: "jupyterIcon" },
                        { src: TableauIcon, alt: "TableauIcon" },
                        { src: matplotlibIcon, alt: "matplotlibIcon" },
                        { src: numpyIcon, alt: "numpyIcon" },
                        { src: pandasIcon, alt: "pandasIcon" },
                        { src: scikitIcon, alt: "scikitIcon" },
                        { src: tensorflowIcon, alt: "tensorflowIcon" },
                        { src: kerasIcon, alt: "kerasIcon" },
                        { src: pytorchIcon, alt: "pytorchIcon" },
                        { src: powerautomateIcon, alt: "powerautomateIcon" },
                        { src: powerbiIcon, alt: "powerbiIcon" },
                    ].map((icon, index) => (
                        <motion.div
                            key={icon.alt}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
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
                        <h3 className="font-bold text-2xl mb-2">University of Windsor</h3>
                        <p className="text-lg font-semibold">Bachelor of Computer Science Honours (Co-op)</p>
                        <p className="text-md text-gray-300 mb-1 font-medium">Specialization in AI and a Minor in Mathematics</p>
                    </div>
                    <div className="text-right">
                        <p className="text-md">Fall 2021 - Winter 2025</p>
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
                threshold: 0.1
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
        <section id="about" className="text-white sm:mb-16 md:mb-28 lg:mb-32" ref={aboutRef}>
            <div className="text-right">
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-8">About Me</h2>
                <p className="text-left text-lg mb-6">Hey there, I&apos;m passionate about turning lines of code into meaningful solutions. From late-night debugging sessions to the thrill of seeing my projects come to life, I&apos;m all about the journey.</p>
                <div className="flex flex-row justify-start space-x-4 mb-8">
                    {TAB_DATA.map((tabItem) => (
                        <TabButton key={tabItem.id} selectTab={() => handleTabChange(tabItem.id)} active={tab === tabItem.id}>
                            {tabItem.title}
                        </TabButton>
                    ))}
                </div>
                <div className="mt-8">
                    {inView && (
                        <AnimatePresence>
                            <motion.div
                                key={tab}
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {tab === "education" ? TAB_DATA.find((t) => t.id === tab).content : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 0 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {TAB_DATA.find((t) => t.id === tab).content}
                                    </motion.div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
