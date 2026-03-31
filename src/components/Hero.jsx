// src/components/Hero.jsx
export default function Hero() {
	return (
		<section className="relative flex-grow flex items-center justify-center w-full overflow-hidden">
			<div className="relative z-10 flex flex-col items-center justify-center text-center text-lavender-mist w-full -translate-y-[8vh]">
				{/* Added font-anton here to protect the heavy styling */}
				<h1 className="font-anton text-[22vw] tracking-wider leading-none m-0 uppercase drop-shadow-lg">
					NODUS
				</h1>

				{/* Added font-anton here */}
				<h1 className="font-anton text-[22vw] tracking-wider leading-none m-0 uppercase -mt-[4vw] drop-shadow-lg">
					RACING
				</h1>
			</div>

			<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none translate-y-[16vh] mix-blend-luminosity">
				<img
					src="/car.png"
					alt="Nodus Racing"
					className="w-[105%] max-w-[100rem] object-contain drop-shadow-2xl"
				/>
			</div>
		</section>
	);
}
