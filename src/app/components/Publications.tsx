'use client'

import { motion } from "framer-motion"

export default function Publications() {
    const publications = [
        {
            year: 2024,
            title: "Post-Quantum Selective Disclosure in Decentralized Identity and Blockchain-Based Electric Vehicle Inter-Charging Settlements",
            appNo: "202411046990",
            link: "https://iprsearch.ipindia.gov.in/publicsearch"
        },
        {
            year: 2024,
            title: "Telecom Decentralized Identity Network: A Paradigm Shift in Telecom",
            appNo: "NA",
            link: "https://www.hyperledger.org/hubfs/HL_SolutionsBrief_TDIDN-1.pdf"
        },
        {
            year: 2023,
            title: "Hybrid Post-Quantum Encryption on Private/Public Permissioned Blockchain Wallets on Decentralized Identity Ecosystem",
            appNo: "202311021374",
            link: "https://iprsearch.ipindia.gov.in/publicsearch"
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="container mx-auto px-4"
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold font-montserrat text-center sm:text-left"
            >
                Publications
            </motion.h1>
            <div className="overflow-x-auto">
                <table className="w-full mt-8">
                    <thead>
                        <tr className="text-left border-b border-gray-300">
                            <th className="py-4 px-2 sm:px-4 text-sm sm:text-base md:text-xl font-semibold">Year</th>
                            <th className="py-4 px-2 sm:px-4 text-sm sm:text-base md:text-xl font-semibold">Title</th>
                            <th className="py-4 px-2 sm:px-4 text-sm sm:text-base md:text-xl font-semibold">Application No.</th>
                            <th className="py-4 px-2 sm:px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {publications.map((pub, index) => (
                            <motion.tr
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                                viewport={{ once: true }}
                                className="border-b border-gray-300"
                            >
                                <td className="py-4 px-2 sm:px-4 text-sm sm:text-base md:text-lg font-semibold align-top">{pub.year}</td>
                                <td className="py-4 px-2 sm:px-4 text-sm sm:text-base md:text-lg min-w-64">{pub.title}</td>
                                <td className="py-4 px-2 sm:px-4 text-sm sm:text-base md:text-lg">{pub.appNo}</td>
                                <td className="py-4 px-2 sm:px-4">
                                    <button className="whitespace-nowrap group border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base font-semibold text-gray-800 hover:bg-gray-100 transition-colors duration-300">
                                        <a className="flex items-center" href={pub.link} target="_blank" rel="noopener noreferrer">
                                            Read More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" data-id="11">
                                                <path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            </svg>
                                        </a>
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    )
}