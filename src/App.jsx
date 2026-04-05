import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AuthorityBar from "./components/AuthorityBar";
import Legacy from "./components/Legacy";
import Destination from "./components/Destination";
import Pipeline from "./components/Pipeline";
import Sponsorship from "./components/Sponsorship";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.08,
			smoothWheel: true,
			syncTouch: true
		});

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		const handleGlobalAnchorClick = (e) => {
			const path = e.composedPath ? e.composedPath() : [];
			const anchor = path.find(el => el.tagName === 'A' && el.getAttribute('href')?.startsWith('#'));
			if (anchor) {
				const href = anchor.getAttribute('href');
				if (href === '#') {
					e.preventDefault();
					lenis.scrollTo('top', { duration: 1.5 });
				} else {
					const targetElement = document.querySelector(href);
					if (targetElement) {
						e.preventDefault();
						lenis.scrollTo(targetElement, { duration: 1.5 });
					}
				}
			}
		};

		document.addEventListener('click', handleGlobalAnchorClick);

		return () => {
			document.removeEventListener('click', handleGlobalAnchorClick);
			lenis.destroy();
			gsap.ticker.remove(lenis.raf);
		};
	}, []);

	return (
		<main className="w-full flex flex-col min-h-screen bg-[#050605] overflow-x-hidden selection:bg-[#0a1b3a] selection:text-[#f5f2f7]">
			<div className="relative h-screen w-full bg-[#050605] overflow-hidden flex flex-col">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-oxford-navy)_0%,_#050605_60%)] opacity-30 z-0 mix-blend-color-dodge pointer-events-none will-change-transform [transform:translateZ(0)] isolate"></div>
				<Navbar />
				<Hero />
			</div>

			<AuthorityBar />
			<Legacy />
			<Destination />
			<Pipeline />
			<Sponsorship />
			<Footer />
		</main>
	);
}
