import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Cloud, GraduationCap } from 'lucide-react';

const LikingParent = ({ initialX, delay }: { initialX: number, delay: number }) => {
    return (
        <motion.div
            className="absolute bottom-0 z-10"
            style={{ left: `${initialX}%` }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: [50, 0, 0, 50], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, delay, repeat: Infinity, repeatDelay: 3 }}
        >
            <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-red flex items-center justify-center shadow-lg relative z-10">
                    <Heart className="text-brand-red animate-pulse" fill="#E11D48" size={24} />
                </div>
                <motion.div
                    className="absolute -top-8 -right-8 bg-white px-3 py-1 rounded-full shadow-md border border-gray-100 whitespace-nowrap"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.1, 1], opacity: 1 }}
                    transition={{ delay: delay + 0.5, duration: 0.3 }}
                >
                    <span className="text-xs font-bold text-gray-800">My kid loves this! ❤️</span>
                </motion.div>
            </div>
        </motion.div>
    );
};

const CourseHeroAnimation: React.FC = () => {
    return (
        <div className="relative w-full h-64 md:h-80 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white rounded-3xl mb-12 flex items-center justify-center">

            {/* Background Clouds */}
            <motion.div
                className="absolute top-10 left-10 text-blue-100"
                animate={{ x: [0, 50, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <Cloud size={80} fill="currentColor" />
            </motion.div>
            <motion.div
                className="absolute top-20 right-20 text-blue-100"
                animate={{ x: [0, -30, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
                <Cloud size={60} fill="currentColor" />
            </motion.div>

            {/* Animated Rocket */}
            <motion.div
                className="absolute"
                initial={{ x: -100, y: 100, rotate: 45 }}
                animate={{
                    x: [0, 200, 400],
                    y: [100, -50, -200],
                    scale: [0.5, 1, 0.5],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                }}
            >
                <div className="text-4xl">🚀</div>
                <motion.div
                    className="absolute -bottom-2 left-2 w-4 h-8 bg-orange-500 blur-sm rounded-full"
                    animate={{ height: [10, 20, 10], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.2, repeat: Infinity }}
                />
            </motion.div>

            {/* Central Playful Scene */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-end justify-center gap-4 mb-6">
                    {/* Cute Robot Character */}
                    <motion.div
                        className="relative"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-20 h-24 bg-gray-800 rounded-t-3xl rounded-b-xl relative border-4 border-gray-300 shadow-xl overflow-hidden">
                            {/* Eyes */}
                            <div className="absolute top-8 left-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(96,165,250,1)]"></div>
                            <div className="absolute top-8 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(96,165,250,1)]"></div>
                            {/* Mouth */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-2 bg-gray-600 rounded-full"></div>
                            {/* Antenna */}
                            <motion.div
                                className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-6 bg-gray-400"
                                animate={{ rotate: [-5, 5, -5] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                            >
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
                            </motion.div>
                        </div>
                        {/* Robot Arms */}
                        <motion.div
                            className="absolute top-12 -left-4 w-4 h-12 bg-gray-400 rounded-full border-2 border-gray-600 origin-top"
                            animate={{ rotate: [0, 25, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute top-12 -right-4 w-4 h-12 bg-gray-400 rounded-full border-2 border-gray-600 origin-top"
                            animate={{ rotate: [0, -25, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                        />
                    </motion.div>

                    {/* Happy Kid / Abstract Character */}
                    <motion.div
                        className="relative"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, type: "spring" }}
                    >
                        <div className="w-24 h-24 bg-brand-amber rounded-full border-4 border-white shadow-xl flex items-center justify-center relative overflow-hidden">
                            <div className="w-full h-1/2 bg-brand-red absolute bottom-0"></div>
                            {/* Face */}
                            <div className="absolute top-6 flex gap-4 z-10">
                                <div className="w-2 h-4 bg-gray-800 rounded-full"></div>
                                <div className="w-2 h-4 bg-gray-800 rounded-full"></div>
                            </div>
                            <div className="absolute top-12 w-6 h-3 border-b-4 border-gray-800 rounded-full z-10"></div>
                            {/* Cap */}
                            <GraduationCap className="absolute -top-2 left-2 text-gray-800 transform -rotate-12 z-20" size={40} />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white shadow-sm"
                >
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-brand-amber font-serif">
                        Where Learning is Magic! ✨
                    </h3>
                </motion.div>
            </div>

            {/* "Social Proof" Popups - More Frequent */}
            <LikingParent initialX={15} delay={0.5} />
            <LikingParent initialX={85} delay={1.5} />
            <LikingParent initialX={40} delay={3} />
            <LikingParent initialX={70} delay={4.5} />

        </div>
    );
};

export default CourseHeroAnimation;
