import React from "react";

const LeftSide = () => {
   return (
		<div className=" text-gray-300 ">
			{/* HERO */}
			<section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">
					Hi, I’m <span className="text-blue-400">Mirfeez</span> 👋
				</h1>

				<h2 className="text-xl md:text-2xl mb-4 text-gray-400">
					Frontend Developer, Digital Product & Advanced Excel Dashboard Creator
				</h2>

				<p className="max-w-2xl mb-6 text-gray-400">
					I build modern, responsive web applications, design business
					assets, and create powerful dashboards that help people track and
					improve their life.
				</p>

				<div className="flex gap-4">
					<button className="px-6 py-3 bg-blue-400 text-black rounded-lg font-medium hover:bg-blue-500 transition">
						View Projects
					</button>
					<button className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition">
						Explore Services
					</button>
				</div>
			</section>

			{/* WHAT I DO */}
			
		</div>
	);
}

export default LeftSide;