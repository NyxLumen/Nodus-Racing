import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment, Html } from "@react-three/drei";
import { Suspense } from "react";

function TrackModel() {
	// Scaled up slightly since it's full screen now
	const { scene } = useGLTF("/track.glb");
	return <primitive object={scene} scale={1} rotation={[-Math.PI / 2, 0, 0]} />;
}

function Loader() {
	return (
		<Html center>
			<div className="text-[#f5f2f7] font-inter font-bold tracking-widest uppercase">
				Loading Telemetry...
			</div>
		</Html>
	);
}

export default function Destination() {
	const destRef = useRef();

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: destRef.current,
				start: "top top",
				end: "bottom top", 
				scrub: 1, 
			}
		});

		// Fading elements gracefully as we scroll past the section
		tl.to('.hud-text-top', { y: -80, opacity: 0, ease: 'none'}, 0);
		tl.to('.hud-text-bottom', { y: 100, opacity: 0, ease: 'none'}, 0);
		tl.to('.bg-hud-text', { y: -200, ease: 'none' }, 0);
		
		// Entry reveals when scrolling INTO the section
		gsap.fromTo('.dest-reveal',
			{ y: 50, opacity: 0 },
			{ scrollTrigger: { trigger: destRef.current, start: "top 70%" }, y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
		);

	}, { scope: destRef });

	return (
		<section
			ref={destRef}
			id="destination"
			className="w-full bg-[#050605] h-[120vh] relative overflow-hidden border-t border-white/10"
		>
			{/* MASSIVE BACKGROUND TYPOGRAPHY (z-0) */}
			<div className="bg-hud-text absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.04]">
				<h1 className="font-anton text-[25vw] leading-none text-white tracking-widest uppercase rotate-[-5deg]">
					BUDDH
				</h1>
			</div>

			{/* Subtle decorative overlays */}
			<div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0a1b3a] to-transparent opacity-30 transform -rotate-12 z-0"></div>
			<div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0a1b3a] to-transparent opacity-30 transform rotate-6 z-0"></div>

			{/* 3D CANVAS FULL SCREEN (z-10) */}
			<div className="absolute inset-0 z-10 hover-target cursor-grab active:cursor-grabbing">
				<Canvas camera={{ position: [0, 100, 180], fov: 45 }}>
					<ambientLight intensity={1.5} />
					<directionalLight position={[10, 20, 10]} intensity={3} color="#ffffff" />
					<directionalLight position={[-10, 5, -10]} intensity={2} color="#406eb5" />

					<Environment preset="city" />

					<Suspense fallback={<Loader />}>
						<Center>
							<TrackModel />
						</Center>
					</Suspense>

					<OrbitControls
						autoRotate
						autoRotateSpeed={0.6}
						enablePan={false}
						enableZoom={false}
						maxPolarAngle={Math.PI / 2.2}
					/>
				</Canvas>
			</div>

			{/* HUD / EDITORIAL FOREGROUND TYPOGRAPHY (z-20) */}
			<div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-8 md:p-16 lg:p-24 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
				
				{/* Top Left HUD */}
				<div className="hud-text-top dest-reveal max-w-2xl mt-12 md:mt-16">
					<h4 className="font-inter font-bold text-sm md:text-lg text-[#406eb5] tracking-[0.2em] uppercase flex items-center gap-4 mb-4">
						<span className="w-12 h-[2px] bg-[#406eb5] inline-block drop-shadow-[0_0_10px_rgba(64,110,181,0.8)]"></span> Destination
					</h4>
					<h2 className="font-anton font-black text-5xl md:text-7xl lg:text-[7rem] text-white tracking-tight uppercase leading-[0.9] drop-shadow-2xl">
						Buddh International<br/>Circuit 2026
					</h2>
				</div>

				{/* Bottom Right HUD */}
				<div className="hud-text-bottom dest-reveal self-end max-w-lg mb-12 md:mb-16">
					<h3 className="font-inter font-bold text-2xl md:text-4xl text-white tracking-wide uppercase mb-6 drop-shadow-xl text-right">
						The Ultimate<br/>Proving Ground
					</h3>
					<div className="w-full h-[1px] bg-white/20 mb-6 relative">
						<div className="absolute top-0 right-0 w-1/3 h-full bg-[#406eb5]"></div>
					</div>
					<p className="font-inter text-base md:text-lg text-[#f5f2f7]/90 leading-relaxed font-light text-right drop-shadow-md">
						The Indian Karting Race isn't just a championship; it is a <span className="text-[#406eb5] font-bold">crucible</span>. 
						We are engineering a high-performance machine designed to shatter collegiate benchmarks on India's premier F1 track. Raw speed, refined by precision.
					</p>
				</div>
			</div>
		</section>
	);
}
