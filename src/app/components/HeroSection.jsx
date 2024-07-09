"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
	const [showAboutMe, setShowAboutMe] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight * 0.5) {
				setShowAboutMe(true);
			} else {
				setShowAboutMe(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleDownloadCV = () => {
		const a = document.createElement('a');
		a.href = './ParthGala_Resume.pdf';
		a.download = 'ParthGala_Resume.pdf';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

	return (
		<section className="hero-section" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
					<div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
						<h1 className="text-white mb-4 sm:text-4xl md:text-5xl lg:text-8xl lg:leading-normal  font-extrabold" style={{ lineHeight: '1.1' }}>
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
								Hello, I&apos;m{" "}
							</span>
							<br />
							<TypeAnimation
								sequence={[
									'Parth Gala',
									1000,
									'Software Developer',
									1000,
									'Data Analyst',
									1000,
									'Web Developer',
									1000,
									'Mobile Developer',
									1000,
								]}
								wrapper="span"
								speed={50}
								repeat={Infinity}
							/>
						</h1>
						<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
							Welcome to my online space, where you&apos;ll discover a fusion of my skills, experiences, and creativity, offering insight into who I am...
						</p>
						<div>
							<button className="px-1 py-1 sm:w-fit rounded-full mr-3 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 ">
								<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2" onClick={handleDownloadCV}>Download CV</span>
							</button>
							<Link href="#about">
								<button className="px-6 py-3 sm:w-fit rounded-full hover:bf-slate-200 text-white">Learn More
									<ChevronRightIcon className="text-white" />
								</button>
							</Link>
						</div>
					</div>
				</motion.div>
				<motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
					<div className="w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative" style={{ transform: showAboutMe ? 'rotateY(-30deg)' : 'rotateY(0deg)', transition: 'transform 1s' }}>
						<Image
							src="/images/laptop.png"
							alt="dev"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={500}
							height={500}
							priority
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
