import React, { useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const NAV_LINKS = [
	{ name: 'Legacy', path: '#legacy' },
	{ name: 'Destination', path: '#destination' },
	{ name: 'Sponsorship', path: '#sponsorship' },
	{ name: 'Contact', path: '#footer' }
];

export default function Navbar() {
	const navRef = useRef();
	const linkRefs = useRef([]);
	const mobileMenuRef = useRef();
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = useCallback(() => {
		setMenuOpen(prev => {
			const next = !prev;
			if (mobileMenuRef.current) {
				if (next) {
					gsap.to(mobileMenuRef.current, {
						height: 'auto',
						opacity: 1,
						duration: 0.5,
						ease: 'power3.out',
					});
					// Stagger links in
					gsap.fromTo(
						mobileMenuRef.current.querySelectorAll('.mobile-link'),
						{ y: 20, opacity: 0 },
						{ y: 0, opacity: 1, stagger: 0.08, duration: 0.4, ease: 'power3.out', delay: 0.15 }
					);
				} else {
					gsap.to(mobileMenuRef.current, {
						height: 0,
						opacity: 0,
						duration: 0.35,
						ease: 'power2.inOut',
					});
				}
			}
			return next;
		});
	}, []);

	const closeMenu = useCallback(() => {
		if (menuOpen) {
			setMenuOpen(false);
			if (mobileMenuRef.current) {
				gsap.to(mobileMenuRef.current, {
					height: 0,
					opacity: 0,
					duration: 0.35,
					ease: 'power2.inOut',
				});
			}
		}
	}, [menuOpen]);

	useGSAP(() => {
		// Entrance Animation
		gsap.from(navRef.current, {
			y: -100,
			opacity: 0,
			duration: 1.5,
			ease: 'power4.out',
			delay: 0.2
		});

		// Magnetic links effect — only on non-touch devices
		const isTouch = window.matchMedia('(pointer: coarse)').matches;
		if (isTouch) return;

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
		<nav ref={navRef} className="relative z-50 w-full flex justify-between items-center px-5 md:px-12 py-4 md:py-6 bg-onyx text-lavender-mist border-b border-white/5">
			<div className="flex items-center gap-3 md:gap-5 p-2" ref={addToRefs}>
				<img src="/logo.svg" alt="Nodus Logo" className="h-5 md:h-6" />
				<img src="/logo-text.svg" alt="Nodus Logo" className="h-5 md:h-6" />
			</div>

			{/* Desktop Navigation */}
			<div className="hidden md:flex gap-12 text-xs font-light tracking-[0.2em] uppercase text-white/60 font-inter">
				{NAV_LINKS.map((item) => (
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

			{/* Mobile Hamburger Button */}
			<button
				onClick={toggleMenu}
				className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-50"
				aria-label="Toggle navigation menu"
			>
				<span className={`block w-5 h-[1.5px] bg-lavender-mist transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}></span>
				<span className={`block w-5 h-[1.5px] bg-lavender-mist transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`}></span>
				<span className={`block w-5 h-[1.5px] bg-lavender-mist transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}></span>
			</button>

			{/* Mobile Slide-Down Menu */}
			<div
				ref={mobileMenuRef}
				className="md:hidden absolute top-full left-0 w-full bg-onyx/95 backdrop-blur-xl border-b border-white/10 overflow-hidden z-40"
				style={{ height: 0, opacity: 0 }}
			>
				<div className="flex flex-col items-center gap-1 py-6 px-6">
					{NAV_LINKS.map((item) => (
						<a
							key={item.name}
							href={item.path}
							onClick={closeMenu}
							className="mobile-link w-full text-center py-4 font-inter text-sm font-light tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-300 border-b border-white/5 last:border-b-0"
						>
							{item.name}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
}
