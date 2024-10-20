export default function Skill() {
    return (
        <>
            <div className="text-xl mb-10 mt-5 font-poppins">
                practicing developement since 2020, with my skills in:
            </div>
            <div className="w-full flex flex-col items-center justify-center overflow-hidden font-poppins sm:text-lg lg:text-3xl">
                <div className="flex gap-1 leading-tight mb-1">
                    <div className="relative border border-gray-300 rounded-full p-4 text-center bg-black text-white font-bold">
                        TypeScript
                        <div className="border border-gray-300 rounded-full px-4 py-2 text-center absolute top-2 -left-[5.8rem] lg:-left-[8.2rem] rotate-[-35deg] bg-white text-black font-semibold">
                            Node.js
                        </div>
                    </div>
                    <div className="border border-gray-300 rounded-full p-4 text-center font-semibold">
                        Next/Nuxt
                    </div>
                    <div className="border border-gray-300 rounded-full p-4 text-center">
                        Open Source
                    </div>
                    <div className="relative border border-gray-300 rounded-full p-4 text-center">
                        DevOps
                        <div className="border border-gray-300 rounded-full px-4 py-2 text-center absolute -top-1 -right-[8.5rem] lg:-right-52 rotate-[25deg] font-semibold">
                            Collaboration
                        </div>
                        <div className="border border-gray-300 rounded-full px-4 py-2 text-center absolute -bottom-[4.2rem] lg:-bottom-16 -right-[5.5rem] lg:-right-[6.5rem] text-6xl">
                            &
                        </div>
                    </div>
                </div>
                <div className="flex gap-1 leading-tight mr-12">
                    <div className="border border-gray-300 rounded-full py-1 px-0.5 flex items-center justify-center">
                        <div className="text-[10px] px-0.5 font-semibold">
                            Visual & UI
                        </div>
                    </div>
                    <div className="border border-gray-300 rounded-full p-4 text-center">
                        Information Security
                    </div>
                    <div className="border border-gray-300 rounded-full p-4 text-center bg-black text-white font-bold">
                        Solidity
                    </div>
                    <div className="border border-gray-300 rounded-full p-4 text-center font-semibold">
                        Communication
                    </div>
                </div>
            </div>
        </>
    );
}