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
		<footer ref={footerRef} id="footer" className="w-full bg-[#050605] pt-16 md:pt-24 pb-6 md:pb-8 px-5 md:px-12 border-t border-white/10 relative overflow-hidden text-[#f5f2f7] group/footer">
			{/* Clean background elements */}
			<div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-white/10 to-transparent skew-x-[-25deg] z-0"></div>
			<div className="absolute bottom-0 right-[25%] w-[1px] h-full bg-gradient-to-t from-white/10 to-transparent skew-x-[-25deg] z-0 transition-colors duration-700 group-hover/footer:from-[#0a1b3a]/50"></div>
			
			<div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
				<div className="flex flex-col lg:flex-row justify-between items-start mb-16 md:mb-24 gap-12 lg:gap-8">
					
					{/* LEFT SIDE: Title + Primary Email + Staff Contacts */}
					<div className="flex flex-col mb-6 lg:mb-0 max-w-2xl w-full lg:w-auto">

						<div className="overflow-visible">
							<h2 className="footer-title font-anton text-5xl md:text-7xl lg:text-[8rem] leading-[0.85] text-white tracking-widest uppercase origin-top-left">
								Let's Build<br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#406eb5] via-white to-white">The Apex</span>
							</h2>
						</div>
						<a 
							href="mailto:NODUSRACING@GMAIL.COM" 
							className="hover-target mt-6 md:mt-10 font-inter text-base md:text-xl lg:text-2xl text-lavender-mist/50 hover:text-white flex items-center gap-3 md:gap-4 transition-colors duration-300 w-fit group"
						>
							<span className="font-inter font-bold text-[#406eb5] group-hover:translate-x-3 transition-transform duration-300">-</span>
							NODUSRACING@GMAIL.COM
						</a>

						{/* Moved CONTACTS to left side directly beneath email */}
						<div className="flex flex-col sm:flex-row gap-8 sm:gap-16 md:gap-24 mt-10 md:mt-16 pt-8 md:pt-12 border-t border-white/10 w-fit">
							<div className="footer-link flex flex-col">
								<span className="font-inter font-bold text-white tracking-widest text-xs lg:text-sm uppercase mb-2">Dr. Gyander Ghangas</span>
								<span className="font-inter text-lavender-mist/50 text-xs lg:text-sm tracking-wider mb-1">+91 94162 47553</span>
								<a href="mailto:gyanderg@srmist.edu.in" className="hover-target relative font-inter text-lavender-mist/50 hover:text-white text-xs lg:text-sm tracking-wider transition-all duration-300 group inline-flex items-center w-fit">
									gyanderg@srmist.edu.in
									<span className="absolute -bottom-1 left-0 w-0 h-px bg-[#406eb5] group-hover:w-full transition-all duration-300"></span>
								</a>
							</div>
							
							<div className="footer-link flex flex-col">
								<span className="font-inter font-bold text-white tracking-widest text-xs lg:text-sm uppercase mb-2">Saurabh Kumar</span>
								<span className="font-inter text-lavender-mist/50 text-xs lg:text-sm tracking-wider mb-1">+91 78360 48208</span>
								<a href="mailto:nodusracing@gmail.com" className="hover-target relative font-inter text-lavender-mist/50 hover:text-white text-xs lg:text-sm tracking-wider transition-all duration-300 group inline-flex items-center w-fit">
									nodusracing@gmail.com
									<span className="absolute -bottom-1 left-0 w-0 h-px bg-[#406eb5] group-hover:w-full transition-all duration-300"></span>
								</a>
							</div>
						</div>
					</div>

					{/* RIGHT SIDE: Quick Links + Socials */}
					<div className="flex gap-12 md:gap-20 lg:gap-32 lg:pt-16 shrink-0">
						<div className="flex flex-col">
							<h4 className="font-inter font-bold text-sm text-white/50 tracking-[0.2em] mb-6 md:mb-8 uppercase">QUICK LINKS</h4>
							<ul className="space-y-4 md:space-y-6">
								{[
									{ name: 'Home', path: '#' },
									{ name: 'Legacy', path: '#legacy' },
									{ name: 'Destination', path: '#destination' },
									{ name: 'Sponsorship', path: '#sponsorship' }
								].map((link) => (
									<li key={link.name} className="footer-link">
										<a href={link.path} className="hover-target relative font-inter text-lavender-mist/50 hover:text-white uppercase tracking-widest text-sm transition-all duration-300 hover:translate-x-4 flex items-center group">
											<span className="absolute -left-5 text-[#406eb5] opacity-0 group-hover:opacity-100 transition-all duration-300 font-bold scale-50 group-hover:scale-100">/</span>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>

						<div className="flex flex-col">
							<h4 className="font-inter font-bold text-sm text-white/50 tracking-[0.2em] mb-6 md:mb-8 uppercase">SOCIALS</h4>
							<ul className="space-y-4 md:space-y-6">
								<li className="footer-link">
									<a href="https://instagram.com/NODUSRACING" target="_blank" rel="noopener noreferrer" className="hover-target relative font-inter text-lavender-mist/50 hover:text-white uppercase tracking-widest text-sm transition-all duration-300 hover:translate-x-4 flex items-center group">
										<span className="absolute -left-5 text-[#406eb5] opacity-0 group-hover:opacity-100 transition-all duration-300 font-bold scale-50 group-hover:scale-100">/</span>
										@NODUSRACING
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="font-inter text-[#f5f2f7]/40 text-xs md:text-sm tracking-widest uppercase">
						© 2026 Nodus Racing. Engineered in India.
					</p>
					<img 
						src="/logo.svg" 
						alt="Nodus Racing Logo" 
						className="h-6 md:h-8 lg:h-10 opacity-20 select-none object-contain"
					/>
				</div>
			</div>
		</footer>
	);
}
