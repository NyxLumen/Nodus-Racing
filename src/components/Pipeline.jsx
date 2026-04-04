import React from 'react';

export default function Pipeline() {
	return (
		<section className="relative w-full min-h-screen md:h-screen overflow-hidden">
			{/* Edge-to-Edge Background Split */}
			<div className="absolute inset-0 flex flex-col md:flex-row z-0">
				{/* Dark Left Background */}
				<div className="w-full h-1/2 md:h-full md:w-1/2 bg-[#090b09]"></div>
				{/* Light Right Background with Image Placeholder */}
				<div className="w-full h-1/2 md:h-full md:w-1/2 bg-white relative">
					{/* Placeholder for the user to add an image later */}
					<div className="absolute inset-0 w-full h-full bg-gray-100 mix-blend-multiply"></div>
				</div>
			</div>

			{/* Perfectly Aligned Content Container */}
			<div className="relative z-10 w-full h-full max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row pointer-events-none">
				
				{/* Left Content (Dark Side) */}
				<div className="w-full md:w-1/2 flex flex-col pt-8 md:pt-16 pb-12 md:pb-20 pr-2 md:pr-4 h-1/2 md:h-full pointer-events-auto text-white">
					{/* Heading positioned near the top */}
					<div className="w-full flex justify-end">
						<h2 className="font-anton text-[12vw] md:text-[6vw] uppercase leading-[1.0] tracking-wider text-right m-0">
							Not Just<br />A Logo
						</h2>
					</div>
					
					{/* Paragraph beautifully restyled and vertically centered */}
					<div className="my-auto border-l-[3px] border-white/20 pl-6 md:pl-8 py-2 max-w-lg">
						<span className="font-inter font-bold text-white/50 tracking-widest uppercase text-sm md:text-base block mb-6">
							// Strategic Acquisition
						</span>
						<p className="font-inter text-xl md:text-2xl text-white/90 leading-relaxed font-light">
							Your sticker on our chassis is just the surface. Sponsoring
							Nodus Racing is a true acquisition of talent. You gain a
							first-look, direct pipeline to SRM IST’s elite engineering and
							management minds before they hit the open market.
						</p>
					</div>
				</div>

				{/* Right Content (Light Side) */}
				<div className="w-full md:w-1/2 flex flex-col pt-8 md:pt-16 pb-12 md:pb-20 pl-2 md:pl-4 h-1/2 md:h-full pointer-events-auto">
					<div className="w-full flex justify-start">
						<h2 className="font-anton text-[12vw] md:text-[6vw] uppercase text-black leading-[1.0] tracking-wider text-left m-0">
							A<br />Pipeline
						</h2>
					</div>
				</div>

			</div>
		</section>
	);
}
