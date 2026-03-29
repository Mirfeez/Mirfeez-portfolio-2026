import {  FaLinkedinIn } from "react-icons/fa";
import { motion } from "motion/react";

const Linkedin = () => {
	return (
		<motion.div
			whileHover={{
				scale: 1.3,
				boxShadow: "0 0 10px 5px rgba(59, 130, 246, 0.4)",
			}}
			
			transition={{ type: "spring", stiffness: 200 }}
			className="w-8 h-8 border-2 border-blue-400  rounded-full flex justify-center items-center hover:bg-blue-400 hover:text-black text-blue-400 "
		>
			<a href="https://www.linkedin.com/in/mahammad-mirfeez-1a5961243/">
				<FaLinkedinIn />
			</a>
		</motion.div>
	);
};

export default Linkedin;
