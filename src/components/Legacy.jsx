import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Legacy() {
	const legacyRef = useRef();

	useGSAP(() => {
		const blocks = legacyRef.current.querySelectorAll('.legacy-block');
		
		blocks.forEach((block) => {
			const textElements = block.querySelectorAll('.reveal-text');
			const imageReveal = block.querySelector('.image-reveal');
			const imageObj = block.querySelector('img');

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: block,
					start: "top 80%",
				}
			});

			tl.fromTo(imageReveal, 
				{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
				{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.5, ease: "power4.inOut" }
			);

			tl.fromTo(imageObj,
				{ scale: 1.2 },
				{ scale: 1, duration: 1.5, ease: "power3.out" },
				"-=1.5"
			);

			tl.fromTo(textElements,
				{ y: 50, opacity: 0 },
				{ y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out" },
				"-=1.0"
			);
		});
		
		// Header Reveal
		gsap.fromTo(legacyRef.current.querySelector('.header-reveal'),
			{ y: 100, opacity: 0 },
			{ scrollTrigger: { trigger: legacyRef.current, start: "top 85%" }, y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
		);

	}, { scope: legacyRef });

	return (
		<section ref={legacyRef} id="legacy" className="w-full bg-lavender-mist py-32 px-8 md:px-12 text-[#050605] relative z-20">
			<div className="max-w-7xl mx-auto flex flex-col gap-32">
				<div className="overflow-hidden">
					<h2 className="header-reveal font-anton text-6xl md:text-[8vw] tracking-wider uppercase m-0 leading-none">
						The DNA of Speed
					</h2>
				</div>

				<div className="legacy-block flex flex-col md:flex-row items-center gap-10 md:gap-16">
					<div className="flex-1 space-y-6">
						<h3 className="reveal-text font-inter font-bold text-3xl md:text-5xl tracking-tight uppercase flex items-center gap-4">
							Aerox <span className="text-crimson-red">//</span> Raw Dynamics
						</h3>
						<p className="reveal-text font-inter text-lg md:text-xl leading-relaxed text-[#050605]/80 max-w-xl">
							Forged in the rigorous environment of Formula Student, the AeroX
							architecture established our baseline for aggressive aerodynamics,
							high-G cornering stability, and unapologetic power delivery. It
							was the proving ground for our performance geometry.
						</p>
					</div>
					<div className="flex-1 w-full">
						<div className="image-reveal w-full aspect-[4/3] bg-black/10 rounded-none overflow-hidden drop-shadow-sm flex items-center justify-center group hover-target relative will-change-transform">
							<div className="absolute inset-0 border-[4px] border-transparent group-hover:border-[#dc143c] transition-colors duration-500 z-10 pointer-events-none"></div>
							<img src="/pictures/aerox-car.png" alt="AeroX on track" className="w-full h-full object-cover" />
						</div>
					</div>
				</div>

				<div className="legacy-block flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
					<div className="flex-1 space-y-6">
						<h3 className="reveal-text font-inter font-bold text-3xl md:text-5xl tracking-tight uppercase">
							Hypergreen <span className="text-crimson-red">//</span>
							<br />
							Ruthless Efficiency
						</h3>
						<p className="reveal-text font-inter text-lg md:text-xl leading-relaxed text-[#050605]/80 max-w-xl">
							Speed without intelligence is waste. Competing in the Shell
							Eco-Marathon engineered a team obsessed with hyper-lightweight
							fabrication, extreme energy conservation, and frictionless
							drivetrain mechanics.
						</p>
					</div>
					<div className="flex-1 w-full relative">
						<div className="image-reveal w-full aspect-[4/3] bg-black/10 rounded-none overflow-hidden drop-shadow-sm flex items-center justify-center group hover-target relative will-change-transform">
							<div className="absolute inset-0 border-[4px] border-transparent group-hover:border-[#dc143c] transition-colors duration-500 z-10 pointer-events-none"></div>
							<img src="/pictures/hypergreen-car.jpg" alt="Hypergreen concept" className="w-full h-full object-cover" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
