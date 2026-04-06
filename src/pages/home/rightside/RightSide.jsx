import Github from "./ContactLinks/Github";
import Linkedin from "./ContactLinks/Linkedin";
import Whatsapp from "./ContactLinks/Whatsapp";
import Phone from "./ContactLinks/Phone";
import Contact from "./../../Contact";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const RightSide = () => {
	useGSAP(() => {
		gsap.to("#yoyo", {
			y: 10,
			duration: 1.5,
			delay: 0.5,
			repeat: -1,
			yoyo: true,
		});
	});

	return (
			<div className=" min-h-screen flex gap-10 justify-center items-center text-center px-6">
				<div id="yoyo">
					<motion.div
						initial={{
							x: 500,
							y: 500,
						}}
						animate={{
							x: 0,
							y: 0,
						}}
						whileTap={{
							scale: 0.7,
						}}
						transition={{
							delay:1,
							duration:0.3,
						}}
					>
						<Linkedin />
					</motion.div>
				</div>
				<div id="yoyo">
					<motion.div
						initial={{
							x: -500,
							y: -500,
						}}
						animate={{
							x: 0,
							y: 0,
						}}
						whileTap={{
							scale: 0.7,
						}}
						transition={{
							delay:1,
							duration:0.3,
						}}
					>
						<Github />
					</motion.div>
				</div>

				<div id="yoyo">
					<motion.div
						initial={{
							x: 500,
							y: 500,
						}}
						animate={{
							x: 0,
							y: 0,
						}}
						whileTap={{
							scale: 0.7,
						}}
						transition={{
							delay:1,
							duration:0.3,
						}}
					>
						<Whatsapp />
					</motion.div>
				</div>

				<div id="yoyo">
					<motion.div
						initial={{
							x: -500,
							y: -500,
						}}
						animate={{
							x: 0,
							y: 0,
						}}
						whileTap={{
							scale: 0.7,
						}}
						transition={{
							delay:1,
							duration:0.3,
						}}
					>
						<Phone />
					</motion.div>
				</div>
			</div>
	);
};

export default RightSide;
