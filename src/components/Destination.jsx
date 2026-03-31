// src/components/Destination.jsx
import { Canvas } from "@react-three/fiber";
// Brought in Center, Environment, and Html to fix the void
import {
	OrbitControls,
	useGLTF,
	Center,
	Environment,
	Html,
} from "@react-three/drei";
import { Suspense } from "react";

function TrackModel() {
	const { scene } = useGLTF("/track.glb");

	return (
		// The rotation array is [X, Y, Z].
		// -Math.PI / 2 physically grabs the track and slams it 90 degrees flat onto the ground.
		<primitive object={scene} scale={0.8} rotation={[-Math.PI / 2, 0, 0]} />
	);
}

// A simple loading text so you aren't staring at a void guessing if it's frozen
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
	return (
		<section
			id="destination"
			className="w-full bg-[#090b09] py-12 px-8 md:px-12 flex flex-col justify-between min-h-screen border-t border-white/10"
		>
			<div className="max-w-7xl mx-auto w-full space-y-1">
				<h4 className="font-inter font-bold text-xl md:text-2xl text-white tracking-widest uppercase">
					// Destination
				</h4>
				<h2 className="font-inter font-black text-4xl md:text-6xl text-white tracking-tight uppercase">
					Buddh International Circuit 2026
				</h2>
				<h3 className="font-inter font-bold text-xl md:text-3xl text-white/50 tracking-wide uppercase">
					The Ultimate Proving Ground.
				</h3>
			</div>

			<div className="w-full h-[50vh] md:h-[60vh] relative my-12 cursor-grab active:cursor-grabbing">
				{/* Pulled the camera WAY back to [0, 50, 100] so we can see the whole map */}
				<Canvas camera={{ position: [0, 80, 120], fov: 45 }}>
					<ambientLight intensity={1} />
					<directionalLight position={[10, 20, 10]} intensity={2} />

					{/* This provides realistic reflections to the track materials */}
					<Environment preset="city" />

					<Suspense fallback={<Loader />}>
						{/* Center forces the 3D model to sit exactly at [0,0,0] regardless of how it was exported */}
						<Center>
							<TrackModel />
						</Center>
					</Suspense>

					<OrbitControls
						autoRotate
						autoRotateSpeed={1.0}
						enablePan={false}
						enableZoom={false}
						/* Restricts the camera angle so users can't look underneath the track */
						maxPolarAngle={Math.PI / 2.2}
					/>
				</Canvas>
			</div>

			<div className="max-w-4xl mx-auto w-full text-center">
				<p className="font-inter text-lg md:text-xl text-white/70 leading-relaxed">
					The Indian Karting Race isn't just a championship; it is a crucible.
					We are engineering a high-performance machine designed to shatter
					collegiate benchmarks on India's premier F1 track. Raw speed, refined
					by precision.
				</p>
			</div>
		</section>
	);
}
