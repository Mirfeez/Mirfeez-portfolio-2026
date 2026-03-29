import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

const Whatsapp = () => {
	return (
		<motion.div
			whileHover={{
				boxShadow: "0 0 10px 5px rgba(59, 130, 246, 0.4)",
				scale: 1.3,
			}}
			transition={{ type: "spring", stiffness: 200 }}
			className="w-8 h-8 border-2 border-blue-400  rounded-full flex justify-center items-center hover:bg-blue-400 hover:text-black text-green-400 "
		>
			<a href="https://api.whatsapp.com/send?phone=916360836891&text=Hi!%20Mirfeez!%20I%27m%20">
				<FaWhatsapp />
			</a>
		</motion.div>
	);
};

export default Whatsapp;
