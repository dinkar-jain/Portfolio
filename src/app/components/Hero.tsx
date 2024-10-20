import Typewriter from 'typewriter-effect';
import Marquee from "react-fast-marquee";

const organizations = [
    '/logos/WaltId.png',
    '/logos/Sportpass.svg',
    '/logos/LinuxFoundation.svg',
    '/logos/HyperledgerTelecomSIG.png',
    '/logos/DU.png',
    '/logos/Ionio.png',
    '/logos/StandardDraft.png',
    '/logos/GurugramPolice.jpg',
];

export default function Hero() {
    return (
        <div className="relative min-h-[95vh] sm:min-h-screen bg-[url('/bg.png')] bg-cover flex flex-col justify-center items-center text-gray-800 overflow-hidden p-4">
            <h1 className="text-2xl md:text-3xl font-serif flex gap-2 items-center text-center leading-tight mb-5 sm:mb-0">
                👋, my name is
                <img src="/me.png" className="h-20 rounded-full mb-5 hidden sm:block" alt="Dinkar" />
                {` Dinkar and I am a`}
            </h1>

            <div className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl uppercase font-montserrat">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('Full Stack')
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString('Blockchain')
                            .pauseFor(2500)
                            .start();
                    }}
                    options={{ loop: true }}
                />
            </div>
            <div className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl uppercase font-playfair mt-2">
                Developer
            </div>

            <blockquote className="hidden sm:block italic text-gray-600 mt-6 leading-relaxed text-lg">
                "Who can make things happen with code."
            </blockquote>
            <blockquote className="sm:hidden italic text-gray-600 mt-6 leading-relaxed">
                "Who can make things happen."
            </blockquote>

            {/* Motion */}
            <div className='absolute bottom-10 w-full sm:w-[90%]'>
                <Marquee gradient={true} speed={40} autoFill={true}>
                    {organizations.map((org, index) => (
                        <img key={index} src={org} className="h-6 sm:h-8 mx-6" />
                    ))}
                </Marquee>
            </div>
        </div>
    );
}
