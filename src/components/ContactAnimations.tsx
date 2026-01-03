import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun } from 'lucide-react';

export const ContactAnimations: React.FC = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0 rounded-3xl">
            {/* Background Sky Elements */}
            <motion.div
                className="absolute top-4 right-8 text-yellow-400"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}
            >
                <Sun size={64} fill="currentColor" />
            </motion.div>

            <motion.div
                className="absolute top-8 left-16 text-blue-100 opacity-60"
                animate={{ x: [0, 40, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
                <Cloud size={48} fill="currentColor" />
            </motion.div>

            <motion.div
                className="absolute bottom-32 -right-12 text-blue-50 opacity-40"
                animate={{ x: [0, -60, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <Cloud size={96} fill="currentColor" />
            </motion.div>

            {/* Mail Bird Character */}
            <motion.div
                className="absolute top-1/4 -left-12 z-20"
                animate={{
                    x: ["-10vw", "120%"],
                    y: [0, -20, 0, 20, 0]
                }}
                transition={{
                    x: { duration: 15, repeat: Infinity, ease: "linear" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <div className="relative transform rotate-12">
                    {/* Bird Body */}
                    <div className="w-16 h-12 bg-white rounded-full border-2 border-gray-800 relative z-10 flex items-center justify-center shadow-md">
                        <div className="w-3 h-3 bg-black rounded-full absolute top-3 right-4"></div> {/* Eye */}
                        <div className="w-4 h-4 bg-orange-400 rounded-lg absolute top-4 -right-2 transform rotate-45 -z-10"></div> {/* Beak */}
                        <div className="w-8 h-4 bg-gray-200 rounded-full absolute top-6 left-2 opacity-50"></div> {/* Wing */}
                    </div>
                    {/* Carrying a Letter */}
                    <div className="absolute top-8 left-4 w-8 h-6 bg-white border border-gray-400 transform -rotate-12 flex items-center justify-center">
                        <div className="w-4 h-[1px] bg-gray-300"></div>
                        <div className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full"></div>
                    </div>
                    {/* Flapping Wing Animation */}
                    <motion.div
                        className="absolute -top-4 left-4 w-8 h-6 bg-white border-2 border-gray-800 rounded-full origin-bottom-left"
                        animate={{ rotate: [0, -30, 0] }}
                        transition={{ duration: 0.2, repeat: Infinity }}
                    />
                </div>
            </motion.div>

            {/* Pop-up Mailbox */}
            <motion.div
                className="absolute bottom-0 right-8 md:right-32 w-24 md:w-32"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
            >
                <div className="relative">
                    {/* Pole */}
                    <div className="w-4 h-24 bg-gray-400 mx-auto"></div>
                    {/* Box */}
                    <div className="w-full h-20 bg-brand-blue rounded-t-full rounded-b-lg border-4 border-gray-800 relative flex items-center justify-center overflow-hidden">
                        <div className="w-20 h-10 bg-blue-400 rounded-t-full opacity-30 absolute top-0"></div>
                    </div>
                    {/* Flag */}
                    <motion.div
                        className="absolute top-10 -right-2 w-2 h-12 bg-red-500 origin-bottom"
                        animate={{ rotate: [0, -45, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                        <div className="w-4 h-4 bg-red-500 rounded-full absolute -top-2 -left-1"></div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};
