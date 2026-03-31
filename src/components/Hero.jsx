export default function Hero() {
	return (
		<section className="relative flex-grow flex items-center justify-center w-full overflow-hidden">
			{/* THE MASSIVE TEXT (Z-Index 10) */}
			{/* Added -translate-y-[8vh] to physically lift the entire text block higher on the screen */}
			<div className="relative z-10 flex flex-col items-center justify-center text-center font-normal text-lavender-mist w-full -translate-y-[6vh]">
				<h1 className="text-[22vw] tracking-wider leading-none m-0 uppercase drop-shadow-lg">
					NODUS
				</h1>

				<h1 className="text-[22vw] tracking-wider leading-none m-0 uppercase -mt-[4vw] drop-shadow-lg">
					RACING
				</h1>
			</div>

			{/* THE CAR ASSET (Z-Index 20) */}
			{/* Car stays exactly where it is, letting the text shift up behind it */}
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
