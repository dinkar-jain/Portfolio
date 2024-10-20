import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function EaseShop() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', '1.5 end']
    });

    const image1Top = useTransform(scrollYProgress, [0, 1], [25, 0]);
    const image3Top = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <div ref={ref} className='flex flex-col lg:flex-row sm:items-center sm:justify-center gap-5 sm:gap-10 h-full lg:h-[400px]'>
            <div className="flex w-full md:justify-center lg:justify-end order-2 lg:order-1">
                <div className="p-4">
                    <h1 className="text-3xl sm:text-5xl mb-4">TicketVerse</h1>
                    <p className="text-gray-600 text-lg">
                        Designed, built & deployed TicketVerse, an NFT-based event ticketing platform.
                    </p>
                    <ul className="list-disc text-gray-600 text-lg mt-4 pl-4">
                        <li><b>Eliminate fraud and scalping</b>, providing peace of mind for fans and event organizers alike.</li>
                        <li>Accept payments in cryptocurrency, catering to the growing community of digital currency users.</li>
                    </ul>
                    <div className="flex gap-4 mt-8">
                        {[
                            { label: 'View Code', link: 'https://github.com/dinkar-jain/TicketVerse' },
                            { label: 'View Live', link: 'https://ticketverse.netlify.app/' }
                        ].map((e) => (
                            <button key={e.label} className="bg-black text-white px-4 py-2 rounded-xl">
                                <a href={e.link} target="_blank">{e.label}</a>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex justify-center lg:justify-start w-full h-full order-1 lg:order-2'>
                <div className="relative hidden sm:grid grid-cols-[minmax(0,0.3fr)_minmax(0,2fr)_minmax(0,1.5fr)_minmax(0,0.1fr)_minmax(0,0.1fr)] grid-rows-[minmax(0,0.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.2fr)] h-[400px] md:h-[500px] lg:h-[400px] w-full sm:w-[600px] md:w-[750px] lg:w-[600px]">
                    <motion.div
                        className={`hidden sm:block absolute h-full w-full col-start-1 col-end-5 row-start-2 row-end-4`}
                        style={{ top: image1Top }}
                    >
                        <img
                            src="/TicketVerse/BookedTicket.png"
                            className="rounded-lg shadow-md w-full h-full"
                        />
                    </motion.div>
                    <div className='absolute h-full w-full col-start-2 col-end-6 row-start-3 row-end-6'>
                        <img
                            src="/TicketVerse/EventPage.png"
                            className="rounded-lg shadow-md w-full h-full"
                        />
                    </div>
                    <motion.div
                        className={`hidden sm:block absolute h-full w-full col-start-3 col-end-4 row-start-1 row-end-5`}
                        style={{ top: image3Top }}
                    >
                        <img
                            src="/TicketVerse/LandingPage.png"
                            className="rounded-lg shadow-md w-full h-full"
                        />
                    </motion.div>
                </div>
                <div className="sm:hidden p-4">
                    <img
                        src="/TicketVerse/EventPage.png"
                        className="rounded-lg shadow-md"
                        alt="Landing"
                    />
                </div>
            </div>
        </div>
    );
}
