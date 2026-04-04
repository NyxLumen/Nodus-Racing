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
import CustomCursor from "./components/CustomCursor";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.5,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smooth: true,
		});

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		return () => {
			lenis.destroy();
			gsap.ticker.remove(lenis.raf);
		};
	}, []);

	return (
		<main className="w-full flex flex-col min-h-screen bg-[#050605] overflow-x-hidden selection:bg-[#dc143c] selection:text-[#f5f2f7]">
			<CustomCursor />
			<div className="relative h-screen w-full bg-[#050605] overflow-hidden flex flex-col">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-oxford-navy)_0%,_#050605_60%)] opacity-30 z-0 mix-blend-color-dodge"></div>
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
