import { Data } from "./Data";
import Card from "./Card";
import { motion } from "motion/react";

const Services = () => {
	return (
		<section className="px-6 py-12 ">
			<motion.h1
				initial={{
					y: -10,
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
				transition={{
					duration:0.41
				}}
				className="text-3xl md:text-4xl font-bold text-blue-400 text-center mb-12"
			>
				My Services ...
			</motion.h1>

			{Data.map((section) => (
				<motion.div
				initial={{
					y:20,
					opacity:0
				}}
				animate={{
					y:0,
					opacity:1
				}}
				transition={{
					duration:0.5
				}}
					key={section.category}
					className="mb-12 bg-[#1e1e1e] rounded-xl p-7 lg:m-15"
				>
					{/* Category Title */}
					<h2 className="text-xl md:text-3xl font-semibold text-blue-100 mb-6 font-mono">
						{section.category}
					</h2>

					{/* Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{section.items.map((item) => (
							<Card
								key={item.title}
								icon={item.icon}
								title={item.title}
								desc={item.desc}
							/>
						))}
					</div>
				</motion.div>
			))}
		</section>
	);
};

export default Services;
