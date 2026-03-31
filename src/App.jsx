// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
	return (
		<main className="relative h-screen w-full bg-[radial-gradient(ellipse_at_center,_var(--color-oxford-navy)_0%,_#0a1b3a_100%)] overflow-hidden flex flex-col">
			<Navbar />
			<Hero />
		</main>
	);
}
