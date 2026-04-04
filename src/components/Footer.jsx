import React from 'react';

export default function Footer() {
	return (
		<footer className="w-full bg-[#050605] pt-24 pb-8 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
			{/* Clean background elements */}
			<div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-white/10 to-transparent skew-x-[-25deg] z-0"></div>
			<div className="absolute bottom-0 right-[25%] w-[1px] h-full bg-gradient-to-t from-white/10 to-transparent skew-x-[-25deg] z-0"></div>
			
			<div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
				{/* Top Section */}
				<div className="flex flex-col lg:flex-row justify-between items-start mb-24">
					
					{/* Huge Call to Action */}
					<div className="flex flex-col mb-16 lg:mb-0">
						<div className="flex items-center gap-4 mb-4">
							<span className="w-12 h-[1px] bg-white/30"></span>
							<span className="font-inter font-bold text-white/50 tracking-[0.3em] uppercase text-sm">Join the Grid</span>
						</div>
						<h2 className="font-anton text-7xl md:text-[8rem] leading-[0.85] text-white tracking-widest uppercase">
							Let's Build<br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a1b3a] via-white to-white">The Apex</span>
						</h2>
						<a 
							href="mailto:partnerships@nodusracing.com" 
							className="mt-10 font-inter text-xl md:text-2xl text-[#f5f2f7]/50 hover:text-white flex items-center gap-4 transition-colors duration-300 w-fit group"
						>
							<span className="font-inter font-bold text-white/40 group-hover:translate-x-3 transition-transform duration-300">-</span>
							partnerships@nodusracing.com
						</a>
					</div>

					{/* Links Section */}
					<div className="flex gap-16 md:gap-32 lg:pt-16">
						{/* Quick Links */}
						<div className="flex flex-col">
							<h4 className="font-inter font-bold text-sm text-white/50 tracking-[0.2em] mb-8 uppercase">QUICK LINKS</h4>
							<ul className="space-y-6">
								{[
									{ name: 'Home', path: '#' },
									{ name: 'Legacy', path: '#legacy' },
									{ name: 'Destination', path: '#destination' },
									{ name: 'Sponsorship', path: '#sponsorship' }
								].map((link) => (
									<li key={link.name}>
										<a href={link.path} className="relative font-inter text-[#f5f2f7]/50 hover:text-white uppercase tracking-widest text-sm transition-all duration-300 hover:translate-x-3 flex items-center group">
											{/* Slash is positioned absolutely to the left so it doesn't push the text when invisible */}
											<span className="absolute -left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">/</span>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Socials */}
						<div className="flex flex-col">
							<h4 className="font-inter font-bold text-sm text-white/50 tracking-[0.2em] mb-8 uppercase">SOCIALS</h4>
							<ul className="space-y-6">
								<li>
									<a href="#" className="relative font-inter text-[#f5f2f7]/50 hover:text-white uppercase tracking-widest text-sm transition-all duration-300 hover:translate-x-3 flex items-center group">
										<span className="absolute -left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">/</span>
										Instagram
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Bottom Footer Border & Copyright */}
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
