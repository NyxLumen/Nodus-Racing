// src/components/Legacy.jsx
export default function Legacy() {
	return (
		<section
			id="legacy"
			className="w-full bg-[#f5f2f7] py-24 px-8 md:px-12 text-[#090b09]"
		>
			{/* Reduced massive gap-32 down to gap-20 */}
			<div className="max-w-7xl mx-auto flex flex-col gap-20">
				{/* Section Header */}
				<div>
					<h2 className="font-anton text-6xl md:text-[7vw] tracking-wider uppercase m-0 leading-none">
						The DNA of Speed
					</h2>
				</div>

				{/* Block 1: AeroX */}
				{/* Tightened md:gap-24 down to md:gap-16 */}
				<div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
					<div className="flex-1 space-y-4">
						{" "}
						{/* Tightened space-y-6 to space-y-4 */}
						<h3 className="font-inter font-bold text-3xl md:text-5xl tracking-tight uppercase">
							Aerox // Raw Dynamics
						</h3>
						<p className="font-inter text-lg md:text-xl leading-relaxed text-[#090b09]/80 max-w-xl">
							Forged in the rigorous environment of Formula Student, the AeroX
							architecture established our baseline for aggressive aerodynamics,
							high-G cornering stability, and unapologetic power delivery. It
							was the proving ground for our performance geometry.
						</p>
					</div>
					<div className="flex-1 w-full">
						<div className="w-full aspect-[4/3] bg-black/10 rounded-2xl overflow-hidden drop-shadow-sm flex items-center justify-center group cursor-pointer hover:shadow-xl transition-shadow duration-300">
							<img src="/pictures/aerox-car.png" alt="AeroX on track" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
						</div>
					</div>
				</div>

				{/* Block 2: Hypergreen */}
				<div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
					<div className="flex-1 space-y-4">
						<h3 className="font-inter font-bold text-3xl md:text-5xl tracking-tight uppercase">
							Hypergreen //
							<br />
							Ruthless Efficiency
						</h3>
						<p className="font-inter text-lg md:text-xl leading-relaxed text-[#090b09]/80 max-w-xl">
							Speed without intelligence is waste. Competing in the Shell
							Eco-Marathon engineered a team obsessed with hyper-lightweight
							fabrication, extreme energy conservation, and frictionless
							drivetrain mechanics.
						</p>
					</div>
					<div className="flex-1 w-full">
						<div className="w-full aspect-[4/3] bg-black/10 rounded-2xl overflow-hidden drop-shadow-sm flex items-center justify-center group cursor-pointer hover:shadow-xl transition-shadow duration-300">
							<img src="/pictures/hypergreen-car.jpg" alt="Hypergreen concept" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
