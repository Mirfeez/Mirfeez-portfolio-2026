import Github from "./ContactLinks/Github";
import Linkedin from "./ContactLinks/Linkedin";
import Whatsapp from "./ContactLinks/Whatsapp";
import Phone from "./ContactLinks/Phone";
import Contact from "./../../Contact";
import { easeIn, easeInOut, motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowAltCircleDown } from "react-icons/fa";

const RightSide = () => {

	
	useGSAP(() => {
		gsap.to(".ship", {
			y: 15,
			duration: 1.5,
			delay: 3,
			ease: "sine.inOut",
			yoyo: true,
			repeat: -1,
		});

		gsap.to("#rotate", {
			rotate: 360,
			duration: 4,
		});

		gsap.to("#line", {
			scale: 0,
			delay: 0,
			duration: 5,
		});

	});

	return (
		<div
			id="rotate"
			className="ship w-full h-[85vh] flex gap-10 justify-center items-center text-center px-6"
		>
			<div>
				<motion.div
					initial={{
						x: 500,
						y: 500,
					}}
					animate={{
						x: -50,
						y: 0,
						scale:1.5,
					}}
					whileTap={{
						scale: 0.7,
					}}
					transition={{
						delay: 0.5,
						duration: 2,
					}}
				>
					<Linkedin />
				</motion.div>
			</div>

			<div id="line" className="absolute h-15 w-1 bg-blue-400"></div>

			<div>
				<motion.div
					initial={{
						x: -500,
						y: -500,
					}}
					animate={{
						x: 35,
						scale:1.5,
						y: -150,
					}}
					whileTap={{
						scale: 0.7,
					}}
					transition={{
						delay: 0.5,
						duration: 2,
					}}
				>
					<Github />
				</motion.div>
			</div>

			<div
				id="line"
				className="absolute h-15 w-1 bg-blue-400 rotate-90"
			></div>

			<div>
				<motion.div
					initial={{
						x: 500,
						y: 500,
					}}
					animate={{
						x: -35,
						y: 150,
						scale:1.5,
					}}
					whileTap={{
						scale: 0.7,
					}}
					transition={{
						delay: 0.5,
						duration: 2,
					}}
				>
					<Whatsapp />
				</motion.div>
			</div>

			<div>
				<motion.div
					initial={{
						x: -500,
						y: -500,
					}}
					animate={{
						x: 50,
						y: 0,
						scale:1.5,
					}}
					whileTap={{
						scale: 0.7,
					}}
					transition={{
						delay: 0.5,
						duration: 2,
					}}
				>
					<Phone />
				</motion.div>
			</div>
		</div>
	);
};

export default RightSide;
