import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function AuthorityBar() {
	const barRef = useRef();
	
	useGSAP(() => {
		const elements = barRef.current.querySelectorAll('.auth-item');
		
		gsap.from(elements, {
			scrollTrigger: {
				trigger: barRef.current,
				start: "top 90%",
			},
			y: 50,
			opacity: 0,
			stagger: 0.15,
			duration: 1,
			ease: "power3.out"
		});
	}, { scope: barRef });

	return (
		<section ref={barRef} className="w-full bg-[#050605] py-10 px-12 border-t border-white/10 relative overflow-hidden">
			{/* Crimson accent line at the top */}
			<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0a1b3a] to-transparent opacity-50"></div>
			
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4">
				<div className="auth-item flex items-center justify-center w-64 hover-target">
					<img
						src="/srm-logo.svg"
						alt="SRM Institute of Science & Technology"
						className="w-full grayscale invert opacity-80 hover:opacity-100 transition-opacity duration-300"
					/>
				</div>

				<div className="auth-item text-center flex flex-col items-center">
					<span className="text-5xl font-normal text-lavender-mist tracking-wide">
						NAAC A++
					</span>
					<span className="text-base tracking-[0.15em] mt-1 text-[#406eb5]">
						ACCREDITED
					</span>
				</div>

				<div className="auth-item text-center flex flex-col items-center">
					<span className="text-5xl font-normal text-lavender-mist tracking-wide">
						UGC CATEGORY-I
					</span>
					<span className="text-base tracking-[0.15em] mt-1 text-[#406eb5]">
						STATUS
					</span>
				</div>
			</div>
		</section>
	);
}
