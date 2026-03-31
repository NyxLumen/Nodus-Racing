// src/components/Navbar.jsx
export default function Navbar() {
	return (
		// Swapped to Onyx (black) background, added a subtle border for a crisp edge
		<nav className="relative z-50 w-full flex justify-between items-center px-12 py-6 bg-onyx text-lavender-mist border-b border-white/5">
			<div className="flex items-center gap-5">
				{/* Removed 'invert' - your white SVG is back */}
				<img src="/logo.svg" alt="Nodus Logo" className="h-6" />
				<img src="/logo-text.svg" alt="Nodus Logo" className="h-6" />
			</div>

			{/* Forced the clean Inter font, widened the tracking, thinned the weight */}
			<div
				className="flex gap-12 text-xs font-light tracking-[0.2em] uppercase text-white/60"
				style={{ fontFamily: "'Inter', sans-serif" }}
			>
				<a
					href="#legacy"
					className="hover:text-white transition-colors duration-300"
				>
					Legacy
				</a>
				<a
					href="#sponsor"
					className="hover:text-white transition-colors duration-300"
				>
					Sponsor
				</a>
				<a
					href="#contact"
					className="hover:text-white transition-colors duration-300"
				>
					Contact
				</a>
			</div>
		</nav>
	);
}
