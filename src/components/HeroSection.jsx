import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
    const texts = [
        "Full Stack Engineer",
        "Backend Developer ",
        "React Native Developer",
        "Android && ios Developer",
        "Node Js Developer",
        "Freelancer"
    ];

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (index === texts.length) return;

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 50 : 120);

        if (!reverse && subIndex === texts[index].length + 1) {
            setTimeout(() => setReverse(true), 1000);
            return;
        }

        if (reverse && subIndex === 0) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <div className="bg-[#ACDBFB]/50 md:min-h-screen flex flex-col-reverse sm:flex-row items-center px-4 sm:px-12 py-6 sm:py-12 gap-4 sm:gap-8">

            {/* Left Section */}
            <motion.div
                className="flex-1 flex flex-col justify-center space-y-3 sm:space-y-6 text-center sm:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
                    Hi, I'm <span className="text-cyan-700">Nitesh Gupta</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600">
                    A passionate full-stack developer who loves building modern web applications.
                </p>

                <h2 className="text-lg sm:text-3xl font-bold text-cyan-700">
                    {texts[index].substring(0, subIndex)}
                    <span className="border-r-2 border-cyan-700 animate-pulse ml-1"></span>
                </h2>
            </motion.div>

            {/* Right Section */}
            <motion.div
                className="flex-1 flex md:justify-end lg:justify-end sm:justify-start relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >


                <motion.img
                    src="/me.png"
                    alt="Smart Coder"
                    className="h-56 w-56 sm:h-80 sm:w-80 md:h-96 md:w-96 shadow-[0_0_25px_5px_rgba(0,255,255,0.6)] outline-4 outline-gray-100 rounded-full object-cover"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </div>
    );
}
