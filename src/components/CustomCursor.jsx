// src/components/CustomCursor.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
	const cursorRef = useRef(null);
	const followerRef = useRef(null);
	const [isTouch, setIsTouch] = useState(false);

	useEffect(() => {
		// Detect touch/coarse pointer devices and bail out
		const touchDevice = window.matchMedia('(pointer: coarse)').matches;
		setIsTouch(touchDevice);
		if (touchDevice) return;

		const cursor = cursorRef.current;
		const follower = followerRef.current;

		if (!cursor || !follower) return;

		// Move cursor and follower using GSAP quickTo for performance
		const xToCursor = gsap.quickTo(cursor, "x", {
			duration: 0.1,
			ease: "power3",
		});
		const yToCursor = gsap.quickTo(cursor, "y", {
			duration: 0.1,
			ease: "power3",
		});

		const xToFollower = gsap.quickTo(follower, "x", {
			duration: 0.3,
			ease: "power3",
		});
		const yToFollower = gsap.quickTo(follower, "y", {
			duration: 0.3,
			ease: "power3",
		});

		const onMouseMove = (e) => {
			const { clientX, clientY } = e;
			// Center the cursor
			xToCursor(clientX - 6);
			yToCursor(clientY - 6);

			// Center the follower
			xToFollower(clientX - 20);
			yToFollower(clientY - 20);
		};

		window.addEventListener("mousemove", onMouseMove);

		// Handle hover effects for specific elements (a, button)
		const hoverElements = document.querySelectorAll("a, button, .hover-target");
		
		const handleMouseEnter = () => {
			gsap.to(cursor, { scale: 1.5, backgroundColor: "#ffffff", duration: 0.3 });
			gsap.to(follower, { scale: 1.5, borderColor: "#ffffff", duration: 0.3 });
		};

		const handleMouseLeave = () => {
			gsap.to(cursor, { scale: 1, backgroundColor: "#dc143c", duration: 0.3 });
			gsap.to(follower, { scale: 1, borderColor: "#dc143c", duration: 0.3 });
		};

		hoverElements.forEach((el) => {
			el.addEventListener("mouseenter", handleMouseEnter);
			el.addEventListener("mouseleave", handleMouseLeave);
		});

		// Hide cursor when leaving window
		const handleMouseOut = () => {
			gsap.to([cursor, follower], { opacity: 0, duration: 0.3 });
		};
		const handleMouseOver = () => {
			gsap.to([cursor, follower], { opacity: 1, opacity: 0.5, duration: 0.3 }); // Follower naturally has 0.5 opacity in CSS
			gsap.to(cursor, { opacity: 1, duration: 0.3 }); 
		};

		document.addEventListener("mouseout", handleMouseOut);
		document.addEventListener("mouseover", handleMouseOver);

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			hoverElements.forEach((el) => {
				el.removeEventListener("mouseenter", handleMouseEnter);
				el.removeEventListener("mouseleave", handleMouseLeave);
			});
			document.removeEventListener("mouseout", handleMouseOut);
			document.removeEventListener("mouseover", handleMouseOver);
		};
	}, []);

	// Don't render anything on touch devices
	if (isTouch) return null;

	return (
		<>
			<div ref={cursorRef} className="custom-cursor"></div>
			<div ref={followerRef} className="custom-cursor-follower"></div>
		</>
	);
}
