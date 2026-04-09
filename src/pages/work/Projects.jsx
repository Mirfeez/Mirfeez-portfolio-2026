import React from "react";
import { motion } from "motion/react";

const Projects = () => {
	const projectList = [
		{
			title: "Portfolio Website",
			client: "My Portfolio in 2025",
			webLink: "https://mirfeez.github.io/Mirfeez-portfolio/",
			info: "My first responsive portfolio with clean UI using HTML, CSS & JS.",
		},
		{
			title: "Age Difference Checker",
			client: "Utility Project",
			webLink: "https://mirfeez.github.io/p1-difference/",
			info: "Check age difference between two people or calculate your exact age.",
		},
		{
			title: "Body Fat Calculator",
			client: "Health Tool",
			webLink: "https://mirfeez.github.io/p2-calculate-body-fat/",
			info: "Calculate body fat using US Navy & BMI methods.",
		},
		{
			title: "Rotating Clock",
			client: "Fun Project",
			webLink: "https://mirfeez.github.io/p3-clock/",
			info: "A real-time rotating clock inspired by creative UI designs.",
		},
		{
			title: "Calculator",
			client: "CASIO Inspired",
			webLink: "https://mirfeez.github.io/p4-calculator/",
			info: "A functional calculator inspired by CASIO design.",
		},
		{
			title: "Love Calculator",
			client: "Fun Project",
			webLink: "https://p5-love-calculator.onrender.com/",
			info: "A fun calculator built with HTML, CSS & JS.",
		},
		{
			title: "Freelancing Website",
			client: "DigiPixelTech",
			webLink: "https://digipixeltechh.netlify.app/",
			info: "A responsive freelancing website built with React.",
		},
	];

	return (
		<section id="projects" className="px-6 py-16 max-w-7xl mx-auto">
			{/* Title */}
			<motion.h1
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12"
			>
				My Projects
			</motion.h1>

			{/* Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{projectList.map((project, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						whileHover={{
							y: -8,
							scale: 1.02,
							boxShadow: "0 15px 30px rgba(59,130,246,0.2)",
						}}
						className="
							bg-zinc-900 
							border border-zinc-700 
							rounded-2xl 
							overflow-hidden 
							flex flex-col
						"
					>
						{/* Preview */}
						<iframe
							src={project.webLink}
							title={project.title}
							className="w-full h-48 border-none"
						/>

						{/* Content */}
						<div className="p-4 flex flex-col gap-3 flex-1">
							<h2 className="text-lg font-semibold text-white">
								{idx + 1}. {project.title}
							</h2>

							<p className="text-sm text-zinc-400">{project.client}</p>

							<p className="text-sm text-zinc-500 flex-1">
								{project.info}
							</p>

							{/* Button */}
							<a
								href={project.webLink}
								target="_blank"
								rel="noopener noreferrer"
								className="
									mt-3 text-center 
									px-4 py-2 
									bg-blue-400 
									text-black 
									font-medium 
									rounded-lg 
									hover:bg-blue-500 
									transition-colors
								"
							>
								View Demo
							</a>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Projects;
