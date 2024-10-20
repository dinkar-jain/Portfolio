import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function StandardDraft() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['center end', '1.5 end']
    });

    const firstImageYOffset = useTransform(scrollYProgress, [0, 1], [-116, -46]);
    const secondImageYOffset = useTransform(scrollYProgress, [0, 1], [128, 88]);

    return (
        <div ref={ref} className='flex flex-col lg:flex-row sm:items-center sm:justify-center gap-5 sm:gap-10'>
            <div className="flex basis-1/2 justify-end">
                <div className="hidden sm:block relative h-96 w-[400px] sm:w-[500px] md:w-[600px]">
                    <motion.img
                        src="/StandardDraft/Signing.png"
                        className={`absolute rounded-lg shadow-md w-[90%]`}
                        style={{ top: firstImageYOffset }}
                        alt="Signing"
                    />
                    <motion.img
                        src="/StandardDraft/Landing.png"
                        className="absolute rounded-lg shadow-md left-[-90px]"
                        style={{ top: secondImageYOffset }}
                        alt="Landing"
                    />
                    <img
                        src="/StandardDraft/Negotiation.png"
                        className="absolute rounded-lg shadow-md top-9 -right-24 lg:right-0 w-[85%]"
                        alt="Negotiation"
                    />
                </div>
                <div className="sm:hidden p-4">
                    <img
                        src="/StandardDraft/Landing.png"
                        className="rounded-lg shadow-md"
                        alt="Landing"
                    />
                </div>
            </div>

            <div className="flex w-full basis-1/2 md:justify-center lg:justify-start">
                <div className="p-4">
                    <h1 className="text-3xl sm:text-5xl mb-4">Standard Draft</h1>
                    <p className="text-gray-600 text-lg">
                        Designed, built & deployed Standard Draft, an AI-powered legal contract creation, negotiation & signing platform.
                    </p>
                    <ul className="list-disc text-gray-600 text-lg mt-4 pl-4">
                        <li>First-of-it’s kind legal contract templating engine to draft & negotiate enterprise-ready NDAs in minutes via wizard-style interface.</li>
                        <li>Cut down contract creation time from days to hours. <b>10x faster. Several times cheaper.</b></li>
                    </ul>
                    <div className="flex gap-4 mt-8">
                        {[
                            { label: 'Landing Page', link: 'https://www.standarddraft.com/' },
                            { label: 'View Demo', link: 'https://www.youtube.com/watch?v=DU1dUEYLFU8' }
                        ].map((e) => (
                            <button key={e.label} className="bg-black text-white px-4 py-2 rounded-xl">
                                <a href={e.link} target="_blank">{e.label}</a>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
