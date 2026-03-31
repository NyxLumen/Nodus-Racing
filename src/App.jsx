// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AuthorityBar from "./components/AuthorityBar";
import Legacy from "./components/Legacy";

export default function App() {
	return (
		<main className="w-full flex flex-col min-h-screen bg-oxford-navy scroll-smooth">
			<div className="relative h-screen w-full bg-[radial-gradient(ellipse_at_center,_var(--color-oxford-navy)_0%,_#0a1b3a_100%)] overflow-hidden flex flex-col">
				<Navbar />
				<Hero />
			</div>

			<AuthorityBar />

			{/* Drops in right below the Authority Bar */}
			<Legacy />
		</main>
	);
}
