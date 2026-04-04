import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
	const heroRef = useRef();
	const titleRef1 = useRef();
	const titleRef2 = useRef();
	const carRef = useRef();

	useGSAP(() => {
		const tl = gsap.timeline();

		// Text reveal effect (cutting off characters from bottom up)
		tl.fromTo([titleRef1.current, titleRef2.current], 
			{ y: 150, opacity: 0, rotationX: -15, transformOrigin: '50% 100%' }, 
			{ y: 0, opacity: 1, rotationX: 0, duration: 1.5, stagger: 0.2, ease: 'power4.out', delay: 0.5 }
		);

		tl.fromTo(carRef.current,
			{ scale: 1.1, opacity: 0, y: 50 },
			{ scale: 1, opacity: 1, y: 0, duration: 2, ease: 'power3.out' },
			"-=1"
		);

		// Mouse parallax simply tracking inside the container
		const handleMouseMove = (e) => {
			const { clientX, clientY } = e;
			const { innerWidth, innerHeight } = window;
			
			const xPos = (clientX / innerWidth - 0.5) * 30; // 30px movement bounds
			const yPos = (clientY / innerHeight - 0.5) * 30;

			// Move text opposite to car roughly
			gsap.to([titleRef1.current, titleRef2.current], {
				x: -xPos * 0.5,
				y: -yPos * 0.5,
				duration: 1,
				ease: 'power2.out'
			});

			gsap.to(carRef.current, {
				x: xPos,
				y: yPos,
				rotationY: xPos * 0.1,
				rotationX: -yPos * 0.1,
				duration: 1,
				ease: 'power2.out'
			});
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, { scope: heroRef });

	return (
		<section ref={heroRef} className="relative grow flex items-center justify-center w-full overflow-hidden" style={{ perspective: "1000px" }}>
			{/* Aggressive crimson geometric slash behind the text */}
			<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
				<div className="w-[120%] h-[2px] bg-[#dc143c] rotate-[-15deg] shadow-[0_0_30px_rgba(220,20,60,0.8)]"></div>
			</div>

			<div className="relative z-10 flex flex-col items-center justify-center text-center text-lavender-mist w-full -translate-y-[8vh]">
				<div className="overflow-hidden p-2">
					<h1 ref={titleRef1} className="font-anton text-[22vw] tracking-wider leading-none m-0 uppercase drop-shadow-lg">
						NODUS
					</h1>
				</div>

				<div className="overflow-hidden -mt-[4vw] p-2">
					<h1 ref={titleRef2} className="font-anton text-[22vw] tracking-wider leading-none m-0 uppercase drop-shadow-lg">
						RACING
					</h1>
				</div>
			</div>

			<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none translate-y-[16vh] mix-blend-luminosity">
				<img
					ref={carRef}
					src="/pictures/car.png"
					alt="Nodus Racing"
					className="w-[105%] max-w-[100rem] object-contain drop-shadow-[0_45px_35px_rgba(0,0,0,0.8)] will-change-transform"
				/>
			</div>
		</section>
	);
}
