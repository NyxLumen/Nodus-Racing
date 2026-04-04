import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Footer() {
	const footerRef = useRef();

	useGSAP(() => {
		// Massive text scale down effect on scroll
		gsap.fromTo('.footer-title',
			{ scale: 1.5, y: -50, opacity: 0 },
			{ scrollTrigger: { trigger: footerRef.current, start: "top 90%", end: "center center", scrub: 0.5 }, scale: 1, y: 0, opacity: 1, ease: 'power2.out' }
		);

		// Link staggers
		gsap.fromTo('.footer-link',
			{ y: 20, opacity: 0 },
			{ scrollTrigger: { trigger: footerRef.current, start: "top 70%" }, y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out' }
		);
	}, { scope: footerRef });

	return (
		<footer ref={footerRef} className="w-full bg-[#050605] pt-24 pb-8 px-6 md:px-12 border-t border-white/10 relative overflow-hidden text-[#f5f2f7] group/footer">
			{/* Clean background elements */}
			<div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-white/10 to-transparent skew-x-[-25deg] z-0"></div>
			<div className="absolute bottom-0 right-[25%] w-[1px] h-full bg-gradient-to-t from-white/10 to-transparent skew-x-[-25deg] z-0 transition-colors duration-700 group-hover/footer:from-[#dc143c]/50"></div>
			
			<div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
				<div className="flex flex-col lg:flex-row justify-between items-start mb-24">
					
					<div className="flex flex-col mb-16 lg:mb-0">
						<div className="flex items-center gap-4 mb-4">
							<span className="w-12 h-[1px] bg-[#dc143c]"></span>
							<span className="font-inter font-bold text-[#dc143c] tracking-[0.3em] uppercase text-sm">Join the Grid</span>
						</div>
						<div className="overflow-visible">
							<h2 className="footer-title font-anton text-7xl md:text-[8rem] leading-[0.85] text-white tracking-widest uppercase origin-top-left">
								Let's Build<br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc143c] via-white to-white">The Apex</span>
							</h2>
						</div>
						<a 
							href="mailto:partnerships@nodusracing.com" 
							className="hover-target mt-10 font-inter text-xl md:text-2xl text-[#f5f2f7]/50 hover:text-white flex items-center gap-4 transition-colors duration-300 w-fit group"
						>
							<span className="font-inter font-bold text-[#dc143c] group-hover:translate-x-3 transition-transform duration-300">-</span>
							partnerships@nodusracing.com
						</a>
					</div>

					<div className="flex gap-16 md:gap-32 lg:pt-16">
						<div className="flex flex-col">
							<h4 className="font-inter font-bold text-sm text-white/50 tracking-[0.2em] mb-8 uppercase">QUICK LINKS</h4>
							<ul className="space-y-6">
								{[
									{ name: 'Home', path: '#' },
									{ name: 'Legacy', path: '#legacy' },
									{ name: 'Destination', path: '#destination' },
									{ name: 'Sponsorship', path: '#sponsorship' }
								].map((link) => (
									<li key={link.name} className="footer-link">
										<a href={link.path} className="hover-target relative font-inter text-[#f5f2f7]/50 hover:text-white uppercase tracking-widest text-sm transition-all duration-300 hover:translate-x-4 flex items-center group">
											<span className="absolute -left-5 text-[#dc143c] opacity-0 group-hover:opacity-100 transition-all duration-300 font-bold scale-50 group-hover:scale-100">/</span>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>

						<div className="flex flex-col">
							<h4 className="font-inter font-bold text-sm text-white/50 tracking-[0.2em] mb-8 uppercase">SOCIALS</h4>
							<ul className="space-y-6">
								<li className="footer-link">
									<a href="#" className="hover-target relative font-inter text-[#f5f2f7]/50 hover:text-white uppercase tracking-widest text-sm transition-all duration-300 hover:translate-x-4 flex items-center group">
										<span className="absolute -left-5 text-[#dc143c] opacity-0 group-hover:opacity-100 transition-all duration-300 font-bold scale-50 group-hover:scale-100">/</span>
										Instagram
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="font-inter text-[#f5f2f7]/40 text-sm tracking-widest uppercase">
						© 2026 Nodus Racing. Engineered in India.
					</p>
					<div className="font-anton text-white/10 text-4xl tracking-widest italic select-none">
						NODUS
					</div>
				</div>
			</div>
		</footer>
	);
}
