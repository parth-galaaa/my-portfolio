"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
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

const ICONS = [
    { src: cIcon, alt: "C" },
    { src: javaIcon, alt: "Java" },
    { src: pythonIcon, alt: "Python" },
    { src: htmlIcon, alt: "HTML" },
    { src: cssIcon, alt: "CSS" },
    { src: javascriptIcon, alt: "JavaScript" },
    { src: phpIcon, alt: "PHP" },
    { src: sqlIcon, alt: "SQL" },
    { src: reactIcon, alt: "React" },
    { src: nodejsIcon, alt: "Node.js" },
    { src: nextjsIcon, alt: "Next.js" },
    { src: tailwindIcon, alt: "Tailwind" },
    { src: gitIcon, alt: "Git" },
    { src: firebaseIcon, alt: "Firebase" },
    { src: vercelIcon, alt: "Vercel" },
    { src: mysqlIcon, alt: "MySQL" },
    { src: postmanlIcon, alt: "Postman" },
    { src: awsIcon, alt: "AWS" },
    { src: azureIcon, alt: "Azure" },
    { src: jupyterIcon, alt: "Jupyter" },
    { src: TableauIcon, alt: "Tableau" },
    { src: matplotlibIcon, alt: "Matplotlib" },
    { src: numpyIcon, alt: "NumPy" },
    { src: pandasIcon, alt: "Pandas" },
    { src: scikitIcon, alt: "Scikit-learn" },
    { src: tensorflowIcon, alt: "TensorFlow" },
    { src: kerasIcon, alt: "Keras" },
    { src: pytorchIcon, alt: "PyTorch" },
    { src: powerautomateIcon, alt: "Power Automate" },
    { src: powerbiIcon, alt: "Power BI" },
];

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: null, // We will render skills separately so we can control animation better
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
                        <p className="text-md text-gray-300 mb-1 font-medium">
                            Specialization in AI and a Minor in Mathematics
                        </p>
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
    const [skillsAnimate, setSkillsAnimate] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    setSkillsAnimate(true); // trigger animation on entering view
                } else {
                    setInView(false);
                    setSkillsAnimate(false); // reset animation when leaving view
                }
            },
            { threshold: 0.2 }
        );

        if (aboutRef.current) observer.observe(aboutRef.current);

        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        };
    }, []);

    const handleTabChange = (id) => {
        setTab(id);
    };

    return (
        <section
            id="about"
            className="text-white mt-2 sm:mb-16 md:mb-28 lg:mb-32"
            ref={aboutRef}
        >
            <div className="text-right">
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-8">
                    About Me
                </h2>
                <p className="text-left text-lg mb-6">
                    Hey there, I&apos;m passionate about turning lines of code into meaningful solutions. From late-night debugging sessions to the thrill of seeing my projects come to life, I&apos;m all about the journey.
                </p>
                <div className="flex flex-row justify-start space-x-4 mb-8">
                    {TAB_DATA.map((tabItem) => (
                        <TabButton
                            key={tabItem.id}
                            selectTab={() => handleTabChange(tabItem.id)}
                            active={tab === tabItem.id}
                        >
                            {tabItem.title}
                        </TabButton>
                    ))}
                </div>

                <div className="text-left mt-8 min-h-[250px]">
                    {tab === "education" ? (
                        TAB_DATA.find((t) => t.id === tab).content
                    ) : (
                        <div className="flex flex-wrap gap-4 items-center">
                            {ICONS.map((icon, index) => (
                                <div
                                    key={icon.alt}
                                    className={`transition-opacity transform duration-700 ease-in-out
                    ${skillsAnimate
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-6"
                                        }`}
                                    style={{ transitionDelay: `${index * 60}ms` }}
                                >
                                    <Image
                                        src={icon.src}
                                        alt={icon.alt}
                                        width={60}
                                        height={60}
                                        unoptimized
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
