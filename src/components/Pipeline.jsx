import React from 'react';

export default function Pipeline() {
	return (
		<section className="relative w-full h-auto min-h-screen md:h-screen flex flex-col md:flex-row overflow-hidden border-t border-white/10">
			{/* Left Side: Solid Dark Background */}
			<div className="w-full md:w-1/2 min-h-[50vh] md:h-full bg-[#050605] flex flex-col px-8 md:px-16 pt-16 md:pt-24 pb-12 justify-between">
				<div className="flex flex-col w-full text-right">
					<h2 className="font-anton text-[12vw] md:text-[6vw] lg:text-[7rem] uppercase leading-[0.9] tracking-wider text-white m-0">
						Not Just<br />A Logo
					</h2>
				</div>
				
				<div className="mt-16 md:mt-auto border-l-2 border-white/20 pl-6 md:pl-8 max-w-md ml-auto text-left">
					<span className="font-inter font-semibold text-white/50 tracking-widest uppercase text-xs md:text-sm block mb-4">
						Strategic Acquisition
					</span>
					<p className="font-inter text-lg md:text-xl text-white/90 leading-relaxed font-light">
						Your sticker on our chassis is just the surface. Sponsoring
						Nodus Racing is a true acquisition of talent. You gain a
						first-look, direct pipeline to SRM IST’s elite engineering and
						management minds before they hit the open market.
					</p>
				</div>
			</div>

			{/* Right Side: Clean Light Background & Fully Visible Image */}
			<div className="w-full md:w-1/2 h-[50vh] md:h-full bg-[#f5f2f7] flex flex-col pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-12">
				<div className="px-4 md:px-0 flex flex-col mb-8 text-left">
					<h2 className="font-anton text-[12vw] md:text-[6vw] lg:text-[7rem] uppercase text-[#050605] leading-[0.9] tracking-wider m-0">
						A<br />Pipeline
					</h2>
				</div>
				
				{/* Clean un-obscured image frame */}
				<div className="flex-1 w-full h-full relative flex flex-col">
					<div className="w-full h-full min-h-[300px] rounded-xl overflow-hidden bg-black/5 shadow-xl relative mt-auto">
						<img 
							src="/pictures/pipeline.jpg" 
							alt="Nodus Racing Talent Pipeline" 
							className="absolute inset-0 w-full h-full object-cover object-center" 
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
