import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment, Html } from "@react-three/drei";
import { Suspense } from "react";

function TrackModel() {
	const { scene } = useGLTF("/track.glb");
	return <primitive object={scene} scale={0.8} rotation={[-Math.PI / 2, 0, 0]} />;
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
	const titleRef = useRef();
	const subRef = useRef();

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: destRef.current,
				start: "top 80%",
				end: "bottom center",
				scrub: 1, // Smooth scrub for parallax
			}
		});

		// Parallax movement for the massive background title (if any) or just the header
		tl.to(titleRef.current, { y: 150, ease: 'none' }, 0);
		tl.to(subRef.current, { y: -100, ease: 'none' }, 0);
		
		// Entry reveals
		gsap.fromTo(destRef.current.querySelector('.intro-text'),
			{ y: 50, opacity: 0 },
			{ scrollTrigger: { trigger: destRef.current, start: "top 75%" }, y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
		);

	}, { scope: destRef });

	return (
		<section
			ref={destRef}
			id="destination"
			className="w-full bg-[#050605] py-24 px-8 md:px-12 flex flex-col justify-between min-h-screen border-t border-white/10 relative overflow-hidden"
		>
			<div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0a1b3a] to-transparent opacity-20 transform -rotate-12"></div>

			<div className="max-w-7xl mx-auto w-full space-y-2 relative z-10 intro-text">
				<h4 className="font-inter font-bold text-xl md:text-2xl text-[#406eb5] tracking-widest uppercase flex items-center gap-4">
					<span className="w-12 h-px bg-[#406eb5] inline-block"></span> Destination
				</h4>
				<h2 ref={titleRef} className="font-anton font-black text-5xl md:text-7xl lg:text-[6rem] text-white tracking-tight uppercase leading-none mix-blend-difference z-20 relative pt-4">
					Buddh International<br/>Circuit 2026
				</h2>
				<h3 className="font-inter font-bold text-xl md:text-3xl text-white/50 tracking-wide uppercase pt-4">
					The Ultimate Proving Ground.
				</h3>
			</div>

			<div className="w-full h-[60vh] md:h-[70vh] relative my-12 cursor-grab active:cursor-grabbing hover-target z-10">
				<Canvas camera={{ position: [0, 80, 120], fov: 45 }}>
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
						autoRotateSpeed={0.8}
						enablePan={false}
						enableZoom={false}
						maxPolarAngle={Math.PI / 2.2}
					/>
				</Canvas>
			</div>

			<div ref={subRef} className="max-w-4xl mx-auto w-full text-center relative z-20">
				<p className="font-inter text-lg md:text-2xl text-white/70 leading-relaxed font-light">
					The Indian Karting Race isn't just a championship; it is a <span className="text-white font-bold">crucible</span>.
					We are engineering a high-performance machine designed to shatter collegiate benchmarks on India's premier F1 track. Raw speed, refined by precision.
				</p>
			</div>
		</section>
	);
}
