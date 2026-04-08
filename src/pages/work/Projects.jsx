import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Projects = () => {
	const projectList = [
		{
			title: "Portfolio Website",
			client: "Personal Portfolio of 2025",
			webLink: "https://mirfeez.github.io/Mirfeez-portfolio/",
			info: "My first responsive and performance-focused portfolio website built to showcase design projects with a clean UI using tools like HTML, CSS and JS and a professional online presence.",
		},
		{
			title: "Age difference check",
			client: "Benificial Project",
			webLink: "https://mirfeez.github.io/p1-difference/",
			info: "This is an fun project to showcase the age difference between 2 person (friends or couples). and also can check single person's age with seconds (like how much seconds did i live.",
		},
		{
			title: "Body fat % check",
			client: "benificial project",
			webLink: "https://mirfeez.github.io/p2-calculate-body-fat/",
			info: "this is an project that shows your body fat percentage using US Method nad BMI Method. all we have to put some inputs. This project is for both male and female",
		},
		{
			title: "A rotating clock",
			client: "fun & challenging",
			webLink: "https://mirfeez.github.io/p3-clock/",
			info: "This project is challenging project for me. this is an simple rotating clock that gives you exact time of your device. this project's design was taken insipirations from youtube and ai ",
		},
		{
			title: "A Calculator",
			client: "Fun & Challenging",
			webLink: "https://mirfeez.github.io/p4-calculator/",
			info: "A Calculator from brand called CASIO. I had an calculator which i used from 2021. i have created an exact same calculator using HTML, CSS and then created its engine using JS.",
		},
		{
			title: "Love Calculator",
			client: "Fun Project",
			webLink: "https://p5-love-calculator.onrender.com/",
			info: "This is love calculator which i used to play in my school days with my friends. we used to calculate using pen & paper by wasting a lot papers and time, so i decided to create one using html, css, js. And this project has 🤫.",
		},
		{
			title: "Freelancing site",
			client: "DigiPixelTech",
			webLink: "https://digipixeltechh.netlify.app/",
			info: "I'm an freelancer, I have created my freelancing website with the help of my co-worker. this is responsive and created by using React.",
		},
	];
	return (
		<div id="Projects">
			<motion.h1
				initial={{
					x: 50,
					opacity: 0,
				}}
				animate={{
					x: 0,
					opacity: 1,
				}}
				className="text-3xl flex justify-self-center font-bold text-blue-400"
			>
				My Projects ...
			</motion.h1>
			{projectList.map((props, idx) => {
				return (
					<motion.div
						initial={{
							x: -50,
							opacity: 0,
						}}
						animate={{
							x: 0,
							opacity: 1,
						}}
						key={idx + 1}
						className="m-10 h-150 rounded"
					>
						<div className="h-100 w-150 flex flex-col justify-self-center rounded-2xl shadow-black shadow-2xl overflow-hidden">
							<iframe
								className=" rounded h-70"
								src={props.webLink}
							></iframe>
							<h1 className="text-xl mt-5">
								<span className="flex justify-self-center font-mono items-center">
									<span className=" text-black rounded-full w-5 h-5 text-center font-semibold  text-sm bg-blue-400 mr-1">
										{idx + 1}
									</span>
									<span>{props.title}</span>
								</span>
							</h1>
							<a
								target="_blank"
								href={props.webLink}
								className=" mt-2 cursor-pointer"
							>
								<span 
									className="featured-project justify-self-center flex px-4 py-2 rounded text-black bg-blue-400 font-bold hover:bg-white hover:text-black hover:rounded-4xl transition-all duration-500"
								>
									View Live
								</span>
							</a>
						</div>
						<div className="project-info m-3 text-center border-b-2 py-3 pb-8">
							<h1 className="text-2xl mb-2 justify-self-center">
								{props.client}
							</h1>
							<p className="parah text-gray-400">{props.info}</p>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
};

export default Projects;
