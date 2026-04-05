import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Pipeline() {
	const containerRef = useRef();

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top 60%", // when top of section hits 60% of viewport
			}
		});

		// 1. The crimson line bursts/disappears
		tl.to('.slit-line', { scaleY: 0, opacity: 0, duration: 0.3, ease: 'power2.inOut' });

		// 2. The dark panels slide violently apart
		tl.to('.panel-left', { xPercent: -100, duration: 1.2, ease: 'power4.inOut' }, "<0.1");
		tl.to('.panel-right', { xPercent: 100, duration: 1.2, ease: 'power4.inOut' }, "<");

		// 3. Text slams in from the sides
		tl.fromTo('.text-left-slam',
			{ x: -100, opacity: 0 },
			{ x: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out' },
			"-=0.6"
		);
		tl.fromTo('.text-right-slam',
			{ x: 100, opacity: 0 },
			{ x: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out' },
			"<"
		);

	}, { scope: containerRef });

	return (
		<section ref={containerRef} id="pipeline" className="relative w-full h-screen lg:h-[120vh] bg-onyx overflow-hidden flex items-center justify-center border-t border-white/10" style={{ perspective: "1500px" }}>
			
			{/* Background Image Layer (revealed when panels split) */}
			<div className="absolute inset-0 z-0 flex items-center justify-center bg-[#0a1b3a]">
				<img 
					src="/pictures/pipeline.jpg" 
					alt="Nodus Racing Talent Pipeline" 
					className="w-full h-full object-cover grayscale contrast-125 brightness-75 mix-blend-luminosity will-change-transform scale-105"
				/>
				{/* Navy/Dark blue tint overlay to match motorsport theme */}
				<div className="absolute inset-0 bg-[#0a1b3a] mix-blend-multiply opacity-60"></div>
				<div className="absolute inset-0 bg-linear-to-t from-onyx via-transparent to-onyx opacity-90"></div>
			</div>

			{/* Revealed Content layer (z-10) */}
			<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col md:flex-row items-center justify-between pointer-events-none">
				
				{/* Left Side Content */}
				<div className="flex-1 flex flex-col justify-center text-left w-full h-full pt-[20vh] md:pt-0">
					<div className="overflow-hidden p-2">
						<h2 className="text-left-slam font-anton text-[15vw] md:text-[8vw] lg:text-[12rem] uppercase leading-[0.9] tracking-wider m-0 text-white drop-shadow-2xl">
							NOT JUST
						</h2>
					</div>
					<div className="overflow-hidden p-2">
						<h2 className="text-left-slam font-anton text-[15vw] md:text-[8vw] lg:text-[12rem] uppercase leading-[0.9] tracking-wider m-0 text-white/50 drop-shadow-2xl">
							A LOGO
						</h2>
					</div>
				</div>

				{/* Right Side Content (The Paragraph) */}
				<div className="flex-1 flex flex-col justify-end md:justify-center items-end text-right w-full h-full pb-[15vh] md:pb-0 z-20">
					<div className="text-right-slam border-r-4 border-crimson-red pr-6 md:pr-8 max-w-lg bg-onyx/60 backdrop-blur-md p-6 pointer-events-auto shadow-2xl">
						<span className="font-inter font-bold text-[#406eb5] tracking-[0.2em] uppercase text-xs md:text-sm flex mb-4 items-center justify-end gap-3">
							Strategic Acquisition <span className="w-8 h-[2px] bg-[#406eb5] inline-block"></span>
						</span>
						<p className="font-inter text-base md:text-2xl text-white/90 leading-relaxed font-light drop-shadow-md">
							Your sticker on our chassis is just the surface. Sponsoring
							Nodus Racing is a true acquisition of talent. You gain a
							first-look, direct pipeline to SRM IST’s elite engineering and
							management minds before they hit the open market.
						</p>
					</div>
				</div>

			</div>

			{/* Splitting Solid Panels (z-20) */}
			<div className="panel-left absolute top-0 left-0 w-1/2 h-full bg-onyx z-20 flex justify-end will-change-transform">
				{/* Glow Line attached to left panel edge */}
				<div className="slit-line w-[2px] h-full bg-crimson-red shadow-[0_0_20px_rgba(220,20,60,0.8)] translate-x-px"></div>
			</div>
			
			<div className="panel-right absolute top-0 right-0 w-1/2 h-full bg-onyx z-20 will-change-transform border-l border-white/5">
			</div>

		</section>
	);
}
