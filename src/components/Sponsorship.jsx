import React from 'react';

const tiers = [
	{
		name: "ASSOCIATE",
		price: "₹80,000",
		image: "/pictures/sapphire-car.png",
		features: [
			"Premium Kart Body Branding",
			"Talent Pipeline Access",
			"Title Status at Launch"
		],
		color: "from-blue-600 to-blue-900",
		borderColor: "border-blue-500",
		textColor: "text-blue-400",
		glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
	},
	{
		name: "GOLD",
		price: "₹60,000",
		image: "/pictures/gold-car.png",
		features: [
			"Promotional Visibility",
			"Social Media Spotlight",
			"Priority Event Recognition"
		],
		color: "from-yellow-500 to-amber-700",
		borderColor: "border-yellow-500",
		textColor: "text-yellow-400",
		glow: "hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]"
	},
	{
		name: "SILVER",
		price: "₹40,000",
		image: "/pictures/silver-car.png",
		features: [
			"Enhanced Website Branding",
			"Venue Standee Placement",
			"Digital Print Association"
		],
		color: "from-gray-300 to-gray-500",
		borderColor: "border-gray-400",
		textColor: "text-gray-300",
		glow: "hover:shadow-[0_0_40px_rgba(156,163,175,0.3)]"
	},
	{
		name: "BRONZE",
		price: "₹20,000",
		image: "/pictures/bronze-car.png",
		features: [
			"Foundational Event Branding",
			"Official Brochure Inclusion",
			"Digital Web Presence"
		],
		color: "from-orange-600 to-orange-800",
		borderColor: "border-orange-500",
		textColor: "text-orange-500",
		glow: "hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]"
	}
];

export default function Sponsorship() {
	return (
		<section id="sponsorship" className="relative w-full h-auto min-h-screen lg:h-screen bg-[#050605] flex flex-col justify-center overflow-hidden z-0 py-12 lg:py-0 border-t border-white/10">
			{/* Aggressive background elements */}
			<div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
				<h1 className="font-anton text-[25vw] italic whitespace-nowrap tracking-tighter text-white">
					DOMINATE
				</h1>
			</div>

			{/* Diagonal racing slash across background */}
			<div className="absolute top-0 right-1/4 w-[2px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent skew-x-[-20deg] z-[-1]"></div>

			<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center py-12">
				
				{/* Header Section */}
				<div className="flex flex-col md:flex-row md:items-end justify-between border-b-[3px] border-white/10 pb-6 mb-8">
					<div className="uppercase">
						<h3 className="font-inter font-bold text-[#cc203e] tracking-[0.3em] mb-2 text-sm">// JOIN THE GRID</h3>
						<h2 className="font-anton text-5xl md:text-7xl lg:text-8xl text-white tracking-widest italic pr-4 leading-none">
							SPONSORSHIP
						</h2>
					</div>
					<div className="mt-8 md:mt-0 group shrink-0 hidden md:block">
						<button className="relative px-10 py-4 bg-[#cc203e] text-white font-anton text-2xl uppercase tracking-wider italic skew-x-[-15deg] hover:bg-white hover:text-[#cc203e] transition-colors duration-300 shadow-[0_0_20px_rgba(204,32,62,0.5)]">
							<span className="block skew-x-[15deg]">Secure Position</span>
							<div className="absolute inset-0 border-2 border-[#cc203e] translate-x-3 -translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-[-1]"></div>
						</button>
					</div>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch perspective-1000">
					{tiers.map((tier, index) => (
						<div 
							key={index} 
							className={`group relative bg-[#0a0c0a]/80 backdrop-blur-sm border-t-4 border-l border-r border-b ${tier.borderColor} border-l-white/5 border-r-white/5 border-b-white/5 flex flex-col p-5 transition-all duration-300 hover:-translate-y-2 ${tier.glow}`}
						>
							{/* Background gradient slash */}
							<div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${tier.color} opacity-10 group-hover:opacity-30 transition-opacity blur-2xl rounded-full transform translate-x-8 -translate-y-8`}></div>
							
							<div className="relative z-10 flex flex-col h-full">
								<div className="flex justify-between items-start mb-1">
									<h4 className={`font-anton text-xl italic tracking-wider ${tier.textColor}`}>
										{tier.name}
									</h4>
									<span className={`font-anton text-base ${tier.textColor} opacity-30`}>
										0{index + 1}
									</span>
								</div>
								
								<div className="font-anton text-4xl lg:text-5xl text-white tracking-wider mb-4">
									{tier.price}
								</div>
								
								{/* Image Container perfectly touches borders without overflowing */}
								<div className="relative w-[calc(100%+32px)] -mx-4 flex items-center justify-center my-6 h-[100px] md:h-[120px]">
									<img 
										src={tier.image} 
										alt={tier.name} 
										className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.05]" 
									/>
								</div>

								{/* Features block sits tight at bottom */}
								<div className="mt-6 border-t border-white/10 pt-4">
									<ul className="space-y-3">
										{tier.features.map((f, i) => (
											<li key={i} className="flex items-start gap-3">
												<span className={`font-anton text-sm ${tier.textColor} mt-0.5`}>&gt;&gt;</span>
												<span className="font-inter text-xs md:text-xs text-[#f5f2f7]/70 uppercase tracking-widest leading-snug">
													{f}
												</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Mobile Only Button */}
				<div className="mt-12 group shrink-0 md:hidden flex justify-center">
					<button className="relative px-10 py-4 bg-[#cc203e] text-white font-anton text-2xl uppercase tracking-wider italic skew-x-[-15deg] hover:bg-white hover:text-[#cc203e] transition-colors duration-300 w-full shadow-[0_0_20px_rgba(204,32,62,0.5)]">
						<span className="block skew-x-[15deg]">Secure Position</span>
					</button>
				</div>
			</div>
		</section>
	);
}
