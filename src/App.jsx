// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AuthorityBar from "./components/AuthorityBar";

export default function App() {
	return (
		<>
			<main className="w-full flex flex-col min-h-screen bg-oxford-navy">
				{/* We moved your gradient, height lock, and overflow hide into this specific block. 
          This ensures the Hero still looks identical and takes up exactly 100% of the screen on load. 
      */}
				<div className="relative h-screen w-full bg-[radial-gradient(ellipse_at_center,_var(--color-oxford-navy)_0%,_#0a1b3a_100%)] overflow-hidden flex flex-col">
					<Navbar />
					<Hero />
				</div>

				{/* When you scroll past the 100vh Hero, this is waiting for you */}
			</main>
			<AuthorityBar />
		</>
		// The main tag is now unlocked. It just lets the page flow naturally.
	);
}
