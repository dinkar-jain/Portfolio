import { motion, useScroll, useTransform } from 'framer-motion';
import StandardDraft from './work/StandardDraft';
import TicketVerse from './work/TicketVerse';
import EaseShop from './work/EaseShop';
import { useRef } from 'react';

export default function Work() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center end']
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

    return (
        <div ref={ref} className="bg-white w-full">
            <motion.div
                style={{ opacity, y }}
                className="text-center text-3xl sm:text-7xl font-extrabold text-gray-800 font-montserrat"
            >
                Experiences make You Great
            </motion.div>
            <motion.div
                style={{ opacity, y }}
                className="text-center text-sm sm:text-2xl text-gray-600 font-montserrat mb-10 sm:mb-20"
            >
                Here are some projects I’ve worked on.
            </motion.div>
            <EaseShop />
            <div className="mt-10 sm:mt-52">
                <StandardDraft />
            </div>
            <div className="mt-10 sm:mt-20 lg:mt-36">
                <TicketVerse />
            </div>
        </div>
    );
}
