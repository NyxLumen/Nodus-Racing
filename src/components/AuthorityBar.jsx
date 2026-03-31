// src/components/AuthorityBar.jsx
export default function AuthorityBar() {
	return (
		<section className="w-full bg-[#f5f2f7] py-10 px-12 border-t border-black/10">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4">
				{/* 1. SRM Logo */}
				<div className="flex items-center justify-center w-64">
					<img
						src="/srm-logo.svg"
						alt="SRM Institute of Science & Technology"
						/* Kept grayscale, dropped opacity slightly to 60% to perfectly match the new text hex */
						className="w-full grayscale opacity-60"
					/>
				</div>

				{/* 2. NAAC Accreditation */}
				<div className="text-center flex flex-col items-center">
					{/* Increased to text-3xl, exact grey hex #6a6a6a, lighter font weight */}
					<span className="text-3xl font-normal text-[#6a6a6a] tracking-wide">
						NAAC A++
					</span>
					<span className="text-base tracking-[0.15em] mt-1 text-[#6a6a6a]">
						ACCREDITED
					</span>
				</div>

				{/* 3. UGC Status */}
				<div className="text-center flex flex-col items-center">
					<span className="text-3xl font-normal text-[#6a6a6a] tracking-wide">
						UGC CATEGORY-I
					</span>
					<span className="text-base tracking-[0.15em] mt-1 text-[#6a6a6a]">
						STATUS
					</span>
				</div>
			</div>
		</section>
	);
}
