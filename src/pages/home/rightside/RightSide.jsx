import Github from "./ContactLinks/Github";
import Linkedin from './ContactLinks/Linkedin';
import Whatsapp from './ContactLinks/Whatsapp';

const RightSide = () => {
	return (
		<div className="min-h-screen flex gap-10 justify-center items-center text-center px-6 ">
			<Linkedin />
			<Github />
			<Whatsapp />
		</div>
	);
};

export default RightSide;
