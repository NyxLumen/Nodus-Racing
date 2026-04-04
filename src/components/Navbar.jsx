import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
	const navRef = useRef();
	const linkRefs = useRef([]);

	useGSAP(() => {
		// Entrance Animation
		gsap.from(navRef.current, {
			y: -100,
			opacity: 0,
			duration: 1.5,
			ease: 'power4.out',
			delay: 0.2
		});

		// Magnetic links effect
		linkRefs.current.forEach((link) => {
			if (!link) return;
			
			link.addEventListener('mousemove', (e) => {
				const rect = link.getBoundingClientRect();
				const x = (e.clientX - rect.left) - rect.width / 2;
				const y = (e.clientY - rect.top) - rect.height / 2;
				
				gsap.to(link, { x: x * 0.4, y: y * 0.4, duration: 0.4, ease: 'power2.out' });
			});
			
			link.addEventListener('mouseleave', () => {
				gsap.to(link, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
			});
		});
	}, []);

	const addToRefs = (el) => {
		if (el && !linkRefs.current.includes(el)) {
			linkRefs.current.push(el);
		}
	};

	return (
		<nav ref={navRef} className="relative z-50 w-full flex justify-between items-center px-12 py-6 bg-onyx text-lavender-mist border-b border-white/5">
			<div className="flex items-center gap-5 p-2" ref={addToRefs}>
				<img src="/logo.svg" alt="Nodus Logo" className="h-6" />
				<img src="/logo-text.svg" alt="Nodus Logo" className="h-6" />
			</div>

			<div className="flex gap-12 text-xs font-light tracking-[0.2em] uppercase text-white/60 font-inter">
				{[
					{ name: 'Legacy', path: '#legacy' },
					{ name: 'Destination', path: '#destination' },
					{ name: 'Sponsorship', path: '#sponsorship' },
					{ name: 'Contact', path: '#footer' }
				].map((item) => (
					<a
						key={item.name}
						href={item.path}
						ref={addToRefs}
						className="group relative hover:text-white transition-colors duration-300 p-2 block"
					>
						{item.name}
						<span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#406eb5] rounded-full opacity-0 transform scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
					</a>
				))}
			</div>
		</nav>
	);
}
