import Navbar from "./components/Navbar/Navbar";
import Home from './pages/home/Home';
import About from './pages/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import Services from './pages/Services';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/services" element={<Services />} />
				<Route path="/*" element={<Notfound />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
