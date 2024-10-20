import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function EaseShop() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['center end', '1.5 end']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

    return (
        <motion.div ref={ref} style={{ scale }} className='flex flex-col lg:flex-row sm:items-center sm:justify-center gap-5 sm:gap-10 h-full lg:h-[400px]'>
            <div className="flex w-full md:justify-center lg:justify-end order-2 lg:order-1">
                <div className="p-4">
                    <h1 className="text-3xl sm:text-5xl mb-4">EaseShop</h1>
                    <p className="text-gray-600 text-lg">Designed, built & deployed Easeshop, an eCommerce platform for seamless buying and selling of products.</p>
                    <ul className="list-disc text-gray-600 text-lg mt-4 pl-4">
                        <li>Intuitive design that makes navigation effortless for buyers and sellers alike.</li>
                        <li>Comprehensive <b>seller tools</b> to manage listings, inventory, and analytics in one place.</li>
                    </ul>
                    <div className="flex gap-4 mt-8">
                        {[
                            { label: 'View Code', link: 'https://github.com/dinkar-jain/EaseShop' },
                            { label: 'View Live', link: 'https://easeshop.netlify.app/' }
                        ].map((e) => (
                            <button key={e.label} className="bg-black text-white px-4 py-2 rounded-xl">
                                <a href={e.link} target="_blank">{e.label}</a>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex justify-center lg:justify-start w-full h-full order-1 lg:order-2'>
                <div className="hidden sm:grid grid-cols-[20px_20px_minmax(0,1fr)_20px] grid-rows-4 h-[400px] w-full sm:w-[600px] md:w-[750px] lg:w-[600px]">
                    <div className="col-start-2 col-end-4 row-start-1 row-end-3">
                        <img
                            src="/EaseShop/Product.png"
                            className="rounded-lg shadow-md w-full h-full"
                        />
                    </div>
                    <div className="col-start-1 col-end-5 row-start-2 row-end-4">
                        <img
                            src="/EaseShop/Cart.png"
                            className="rounded-lg shadow-md w-full h-full"
                        />
                    </div>
                    <div className='col-start-3 col-end-4 row-start-3 row-end-5'>
                        <img
                            src="/EaseShop/Dashboard.png"
                            className="rounded-lg shadow-md w-full h-full"
                        />
                    </div>
                </div>
                <div className="sm:hidden p-4">
                    <img
                        src="/EaseShop/Cart.png"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>
        </motion.div>
    )
}
