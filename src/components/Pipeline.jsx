import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Pipeline() {
	const pRef = useRef();

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: pRef.current,
				start: "top 75%"
			}
		});

		tl.fromTo('.pipe-title-part',
			{ y: 150, opacity: 0, rotateX: -20 },
			{ y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out' }
		);

		tl.fromTo('.pipe-line, .pipe-content',
			{ x: -50, opacity: 0 },
			{ x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' },
			"-=0.8"
		);

		tl.fromTo('.pipe-image',
			{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", scale: 1.1 },
			{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", scale: 1, duration: 1.5, ease: 'power4.inOut' },
			"-=1.5"
		);
	}, { scope: pRef });

	return (
		<section ref={pRef} className="relative w-full h-auto min-h-screen flex flex-col md:flex-row overflow-hidden border-t border-white/10 text-white" style={{ perspective: "1000px" }}>
			{/* Left Side: Solid Dark Background */}
			<div className="w-full md:w-1/2 min-h-[50vh] flex flex-col px-8 md:px-16 pt-16 md:pt-24 pb-12 justify-between bg-[#050605] relative z-20">
				<div className="flex flex-col w-full text-right overflow-hidden">
					<h2 className="pipe-title-part font-anton text-[12vw] md:text-[6vw] lg:text-[7rem] uppercase leading-[0.9] tracking-wider m-0 text-white">
						Not Just
					</h2>
					<h2 className="pipe-title-part font-anton text-[12vw] md:text-[6vw] lg:text-[7rem] uppercase leading-[0.9] tracking-wider m-0 text-white/50">
						A Logo
					</h2>
				</div>
				
				<div className="mt-16 md:mt-auto border-l-2 border-[#0a1b3a] pipe-line pl-6 md:pl-8 max-w-md ml-auto text-left relative">
					<span className="pipe-content font-inter font-bold text-[#406eb5] tracking-widest uppercase text-xs md:text-sm block mb-4">
						Strategic Acquisition
					</span>
					<p className="pipe-content font-inter text-lg md:text-xl text-white/90 leading-relaxed font-light">
						Your sticker on our chassis is just the surface. Sponsoring
						Nodus Racing is a true acquisition of talent. You gain a
						first-look, direct pipeline to SRM IST’s elite engineering and
						management minds before they hit the open market.
					</p>
				</div>
			</div>

			{/* Right Side: Clean Light Background & Fully Visible Image */}
			<div className="w-full md:w-1/2 min-h-[50vh] bg-lavender-mist flex flex-col pt-16 md:pt-24 pb-8 md:px-12 px-4 relative z-10">
				<div className="px-4 md:px-0 flex flex-col mb-8 text-left overflow-hidden">
					<h2 className="pipe-title-part font-anton text-[12vw] md:text-[6vw] lg:text-[7rem] uppercase text-[#050605] leading-[0.9] tracking-wider m-0">
						A Pipeline
					</h2>
				</div>
				
				{/* Clean un-obscured image frame */}
				<div className="flex-1 w-full h-full relative flex flex-col items-center justify-center">
					<div className="pipe-image w-full h-full min-h-[400px] max-h-[70vh] rounded-none overflow-hidden bg-black/5 shadow-2xl relative hover-target will-change-transform">
						<div className="absolute inset-0 bg-[#0a1b3a] mix-blend-overlay opacity-0 hover:opacity-30 transition-opacity duration-500 z-10 pointer-events-none"></div>
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
