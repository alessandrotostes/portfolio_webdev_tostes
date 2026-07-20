'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ImageData {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: ImageData[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen overflow-hidden">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className={`absolute top-0 flex h-full w-full items-center justify-center ${
								index === 1
									? '[&>div]:!top-[-15vh] md:[&>div]:!-top-[30vh] [&>div]:!left-[2vw] md:[&>div]:!left-[5vw] [&>div]:!h-[20vh] md:[&>div]:!h-[30vh] [&>div]:!w-[40vw] md:[&>div]:!w-[35vw]'
									: ''
							} ${
								index === 2
									? '[&>div]:!top-[-5vh] md:[&>div]:!-top-[10vh] [&>div]:!-left-[30vw] md:[&>div]:!-left-[25vw] [&>div]:!h-[35vh] md:[&>div]:!h-[45vh] [&>div]:!w-[25vw] md:[&>div]:!w-[20vw]'
									: ''
							} ${
								index === 3
									? '[&>div]:!left-[20vw] md:[&>div]:!left-[27.5vw] [&>div]:!h-[18vh] md:[&>div]:!h-[25vh] [&>div]:!w-[30vw] md:[&>div]:!w-[25vw]'
									: ''
							} ${
								index === 4
									? '[&>div]:!top-[20vh] md:[&>div]:!top-[27.5vh] [&>div]:!left-[2vw] md:[&>div]:!left-[5vw] [&>div]:!h-[20vh] md:[&>div]:!h-[25vh] [&>div]:!w-[25vw] md:[&>div]:!w-[20vw]'
									: ''
							} ${
								index === 5
									? '[&>div]:!top-[20vh] md:[&>div]:!top-[27.5vh] [&>div]:!-left-[28vw] md:[&>div]:!-left-[22.5vw] [&>div]:!h-[20vh] md:[&>div]:!h-[25vh] [&>div]:!w-[35vw] md:[&>div]:!w-[30vw]'
									: ''
							} ${
								index === 6
									? '[&>div]:!top-[18vh] md:[&>div]:!top-[22.5vh] [&>div]:!left-[22vw] md:[&>div]:!left-[25vw] [&>div]:!h-[12vh] md:[&>div]:!h-[15vh] [&>div]:!w-[18vw] md:[&>div]:!w-[15vw]'
									: ''
							} `}
						>
							<div className="relative h-[20vh] md:h-[25vh] w-[30vw] md:w-[25vw] rounded-2xl overflow-hidden bg-secondary/15 dark:bg-white/5 border border-primary/10 shadow-2xl p-1.5 flex items-center justify-center">
								<Image
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									fill
									className="object-contain p-1"
									sizes="(max-width: 768px) 40vw, 25vw"
									priority={index < 3}
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
