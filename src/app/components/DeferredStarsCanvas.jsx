"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const StarsCanvas = dynamic(() => import("./StarBackground"), {
	ssr: false,
});

export default function DeferredStarsCanvas() {
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		// Use requestIdleCallback if available, else fallback to setTimeout
		const idleCallback = window.requestIdleCallback || function (cb) {
			return setTimeout(() => {
				cb();
			}, 200); // fallback delay
		};

		const id = idleCallback(() => setShouldRender(true));

		// If using requestIdleCallback, also cleanup on unmount
		return () => {
			if (window.cancelIdleCallback) {
				window.cancelIdleCallback(id);
			} else {
				clearTimeout(id);
			}
		};
	}, []);

	return shouldRender ? <StarsCanvas /> : null;
}
