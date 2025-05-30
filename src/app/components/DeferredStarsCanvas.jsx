"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const StarsCanvas = dynamic(() => import("./StarBackground"), {
	ssr: false,
});

export default function DeferredStarsCanvas() {
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		requestIdleCallback(() => setShouldRender(true));
	}, []);

	return shouldRender ? <StarsCanvas /> : null;
}
