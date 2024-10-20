import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4">
                <div className="relative flex items-center justify-center">
                    INTERESTED IN
                    <img className='absolute -top-[35px] -right-[40px] sm:-top-[20px] sm:-right-[0px] md:-top-[100px] md:-right-[80px] lg:-top-[90px] lg:-right-[65px] w-24 h-24 md:w-60 md:h-60' src='/ThumbsUp.svg' />
                </div>
                WORKING TOGETHER?
            </h1>
            <div className="relative text-center">
                <p className="text-base sm:text-lg text-gray-500">Contact me:</p>
                <a href="mailto:dinkarjain05@gmail.com" className="text-gray-600 hover:text-blue-600 sm:text-lg font-bold">
                    dinkarjain05@gmail.com
                </a>
                <motion.img
                    initial={{ x: 0, rotate: -24 }}
                    animate={{ x: [0, 20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -right-9 top-7 sm:-right-20 w-8 h-8 sm:w-16 sm:h-16"
                    src="/Arrow.avif" />
            </div>
        </div>
    )
}