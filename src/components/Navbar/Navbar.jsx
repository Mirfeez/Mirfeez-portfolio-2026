import Logo from "./Logo";
import Navlinks from "./Navlinks";


const Navbar = () => {
	
	return (
		<div className="sticky top-0 flex justify-between items-center px-6 py-4 shadow-md shadow-black z-50 bg-transparent backdrop-blur-md">
			<Logo />
			<Navlinks />
		</div>
	);
};

export default Navbar;
