import { motion } from "motion/react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<section className="px-6 py-16 max-w-6xl mx-auto">
			{/* Title */}
			<motion.h1
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
			>
				About Me
			</motion.h1>

			{/* Top Section */}
			<div className="grid md:grid-cols-2 gap-10 items-center mb-16">
				{/* Left - Text */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					className="text-zinc-400 space-y-4"
				>
					<p>
						I’m{" "}
						<span className="text-2xl text-blue-400 font-bold">
							Mahammad Mirfeez Makbool
						</span>
						, a self-taught frontend developer passionate about building
						modern and interactive web applications.
					</p>

					<p>
						I completed my BBA in 2025, and during college I discovered
						web development. What started as curiosity quickly became my
						career goal.
					</p>

					<p>
						I focus on React, UI design, and animations using GSAP and
						Motion. I also create dashboards and work as a freelancer.
					</p>

					{/* Buttons */}
					<div className="flex gap-4 mt-4">
						<a
							target="_blank"
							href="../pdf/resume.pdf"
							className="px-4 py-2 bg-blue-500 text-black rounded-lg font-medium hover:bg-blue-400"
						>
							View Resume
						</a>

						<Link
							to="/contact"
							className="px-4 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black"
						>
							Hire Me
						</Link>
					</div>
				</motion.div>

				{/* Right - Image */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					className="flex justify-center"
				>
					<motion.img
						whileHover={{
							scale: 1.03,
						}}
						initial={{ y: -200, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 120,
							damping: 6, // lower = more bounce
						}}
						src="../pics/coat pic.jpg"
						alt=""
						className="w-60 h-60 md:w-60 md:h-60 rounded-full object-cover"
					/>
				</motion.div>
			</div>

			{/* Stats */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
			>
				{[
					{ label: "Projects", value: "7+" },
					{ label: "Skills", value: "8+" },
					{ label: "Freelancer ", value: "Status" },
					{ label: "Frontend Developer", value: "Designation" },
				].map((item) => (
					<div
						key={item.label}
						className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 text-center"
					>
						<h3 className="text-2xl font-bold text-white">
							{item.value}
						</h3>
						<p className="text-zinc-400 text-sm">{item.label}</p>
					</div>
				))}
			</motion.div>

			{/* Skills */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="bg-zinc-900 border border-zinc-700 p-6 rounded-2xl mb-12"
			>
				<h2 className="text-xl font-semibold text-white mb-4">Skills</h2>

				<div className="flex flex-wrap gap-3">
					{[
						"HTML",
						"CSS",
						"JavaScript",
						"React",
						"Tailwind",
						"GSAP",
						"Motion",
						"Node.js",
						"Excel",
						"Canva",
						"Design",
					].map((skill) => (
						<span
							key={skill}
							className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
						>
							{skill}
						</span>
					))}
				</div>
			</motion.div>

			{/* Bottom CTA */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="text-center"
			>
				<p className="text-zinc-400 mb-10">
					I’m currently looking for frontend developer opportunities and
					freelance projects.
				</p>

				<Link
					to="/contact"
					className="px-6 py-3 bg-blue-500 text-black rounded-lg font-medium hover:bg-blue-400 "
				>
					Let’s Work Together
				</Link>
			</motion.div>
		</section>
	);
};

export default About;
