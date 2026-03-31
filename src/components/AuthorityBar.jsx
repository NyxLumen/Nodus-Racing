// src/components/AuthorityBar.jsx
export default function AuthorityBar() {
	return (
		// Background changed to true black, border changed to a faint white line
		<section className="w-full bg-[#090b09] py-10 px-12 border-t border-white/10">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4">
				{/* 1. SRM Logo */}
				<div className="flex items-center justify-center w-64">
					<img
						src="/srm-logo.svg"
						alt="SRM Institute of Science & Technology"
						/* Stripped out the opacity. Pure, solid white inverted logo now. */
						className="w-full grayscale invert"
					/>
				</div>

				{/* 2. NAAC Accreditation */}
				<div className="text-center flex flex-col items-center">
					{/* Main text is solid Lavender Mist, subtext is dimmed to 60% opacity */}
					<span className="text-5xl font-normal text-[#f5f2f7] tracking-wide">
						NAAC A++
					</span>
					<span className="text-base tracking-[0.15em] mt-1 text-[#f5f2f7]/60">
						ACCREDITED
					</span>
				</div>

				{/* 3. UGC Status */}
				<div className="text-center flex flex-col items-center">
					<span className="text-5xl font-normal text-[#f5f2f7] tracking-wide">
						UGC CATEGORY-I
					</span>
					<span className="text-base tracking-[0.15em] mt-1 text-[#f5f2f7]/60">
						STATUS
					</span>
				</div>
			</div>
		</section>
	);
}
