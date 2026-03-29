import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./rightside/RightSide";

const Home = () => {
	return (
		<div className="">
			<section className="flex -my-15 justify-around">
				{/* left side */}
				<LeftSide />

				{/* right side */}
				<RightSide />
			</section>

			<section className="py-20 px-6 max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12 text-white">
					What I Do
				</h2>

				<div className="grid md:grid-cols-3 gap-8">
					{/* Web Dev */}
					<div className="bg-[#111827] p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition">
						<h3 className="text-xl font-semibold text-blue-400 mb-3">
							💻 Web Development
						</h3>
						<p className="text-gray-400">
							I create modern, responsive websites using React and
							Tailwind CSS with clean UI and smooth user experience.
						</p>
					</div>

					{/* Design */}
					<div className="bg-[#111827] p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition">
						<h3 className="text-xl font-semibold text-blue-400 mb-3">
							🎨 Design Services
						</h3>
						<p className="text-gray-400">
							I design brochures, business cards, and invitation cards
							tailored to your brand using Canva.
						</p>
					</div>

					{/* Dashboard */}
					<div className="bg-[#111827] p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition">
						<h3 className="text-xl font-semibold text-blue-400 mb-3">
							📊 Smart Dashboards
						</h3>
						<p className="text-gray-400">
							I build advanced tracking dashboards for habits, expenses,
							fitness, and income with analytics and customization.
						</p>
					</div>
				</div>
			</section>

			{/* PROJECTS */}
			<section className="py-20 px-6 bg-[#111827]">
				<h2 className="text-3xl font-bold text-center mb-10 text-white">
					Featured Projects
				</h2>

				<div className="text-center text-gray-400 mb-6">
					Portfolio Website • Dashboard Systems • Business Designs
				</div>

				<div className="text-center">
					<button className="px-6 py-3 bg-blue-400 text-black rounded-lg hover:bg-blue-500 transition">
						View All Projects
					</button>
				</div>
			</section>

			{/* SERVICES */}
			<section className="py-20 px-6 max-w-5xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-10 text-white">Services</h2>

				<div className="space-y-6 text-gray-400">
					<p>
						<span className="text-blue-400 font-semibold">
							Website Development:
						</span>
						Custom responsive websites with modern UI.
					</p>

					<p>
						<span className="text-blue-400 font-semibold">
							Dashboard Creation:
						</span>{" "}
						Advanced tracking systems with analytics and custom features.
					</p>

					<p>
						<span className="text-blue-400 font-semibold">
							Business Design:
						</span>{" "}
						Brochures, business cards, and invitation designs.
					</p>

					<p className="text-blue-400">
						Custom solutions available based on your needs.
					</p>
				</div>
			</section>

			{/* WHY ME */}
			<section className="py-20 px-6 bg-[#111827] text-center">
				<h2 className="text-3xl font-bold mb-6 text-white">
					Why Choose Me
				</h2>

				<p className="max-w-2xl mx-auto text-gray-400">
					I focus on building solutions that are not just visually clean,
					but also practical and useful in real life. Every project is
					created with attention to detail, usability, and performance.
				</p>
			</section>

			{/* CTA */}
			<section className="py-20 px-6 text-center">
				<h2 className="text-3xl font-bold mb-4 text-white">
					Let’s Work Together
				</h2>

				<p className="text-gray-400 mb-6">
					Have an idea, need a website, or want a custom dashboard?
				</p>

				<button className="px-6 py-3 bg-blue-400 text-black rounded-lg hover:bg-blue-500 transition">
					Contact Me
				</button>
			</section>
		</div>
	);
};

export default Home;
