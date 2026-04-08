import React from "react";

const Footer = () => {
   return (
		<footer className="bg-[#0B0F1A] text-gray-300 px-6 py-10 mt-20">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
				{/* Left */}
				<div>
					<h1 className="text-2xl font-bold text-blue-400 mb-2">
						&lt;Mirfeez /&gt;
					</h1>
					<p className="text-sm text-gray-400">
						Building modern web experiences with clean UI and smooth
						animations.
					</p>
				</div>

				{/* Center */}
				<div className="flex flex-col gap-2">
					<h2 className="text-white font-semibold mb-2">Quick Links</h2>
					<a href="/" className="hover:text-blue-400">
						Home
					</a>
					<a href="/Works" className="hover:text-blue-400">
						Works
					</a>
					<a href="/about" className="hover:text-blue-400">
						About
					</a>
					<a href="/contact" className="hover:text-blue-400">
						Contact
					</a>
				</div>

				{/* Right */}
				<div>
					<h2 className="text-white font-semibold mb-2">Connect</h2>
				
				</div>
			</div>

			{/* Bottom */}
			<div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
				© {new Date().getFullYear()} Mirfeez. All rights reserved.
			</div>
		</footer>
	);
}

export default Footer;