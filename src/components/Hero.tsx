import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimationControls } from 'framer-motion';
import { Star, ArrowRight, Palette } from 'lucide-react';
import FloatingShapes from './FloatingShapes';

const Hero: React.FC = () => {
    const [textIndex, setTextIndex] = useState(0);
    const words = ["Artists", "Musicians", "Geniuses", "Leaders"];
    const controls = useAnimationControls();

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [words.length]);

    useEffect(() => {
        controls.start({
            y: [20, 0],
            opacity: [0, 1],
            transition: { duration: 0.5 }
        });
    }, [textIndex, controls]);

    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-white to-amber-50">

            {/* Playful Background Elements */}
            <FloatingShapes />

            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-red/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
            <div className="absolute top-20 -right-20 w-96 h-96 bg-brand-amber/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>

            <div className="container relative z-10 px-4 mx-auto md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Side: Text */}
                <div className="flex flex-col items-start text-left md:w-1/2 space-y-8 justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-brand-red rounded-full shadow-lg transform -rotate-2 hover:rotate-0 transition-transform cursor-default"
                    >
                        <Star size={16} fill="currentColor" className="text-yellow-300 animate-pulse" />
                        <span className="tracking-wide">Admissions Open for 2025!</span>
                    </motion.div>

                    <h1 className="max-w-4xl text-5xl font-extrabold font-sans leading-[1.1] text-gray-900 md:text-6xl lg:text-7xl tracking-tight">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            The <span className="text-brand-red inline-block transform hover:scale-105 transition-transform cursor-pointer">Creative</span>
                        </motion.span>
                        <br />
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-800"
                        >
                            Academy
                        </motion.span>
                        <span className="text-4xl md:text-5xl lg:text-6xl text-gray-500 font-bold block mt-2">
                            For Tomorrow's
                            <motion.span
                                key={words[textIndex]}
                                animate={controls}
                                className="ml-3 text-brand-amber inline-block underline decoration-wavy decoration-brand-red/30 underline-offset-8"
                            >
                                {words[textIndex]}
                            </motion.span>
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="max-w-xl text-lg text-gray-600 md:text-xl leading-relaxed font-medium"
                    >
                        <span className="inline-block p-1 bg-red-100 rounded-md text-brand-red mr-1">Art</span>
                        <span className="inline-block p-1 bg-yellow-100 rounded-md text-yellow-700 mr-1">Music</span>
                        <span className="inline-block p-1 bg-blue-100 rounded-md text-blue-700 mr-1">Abacus</span>
                        – One fun place for your child's limitless potential to bloom! 🌸
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto"
                    >
                        <Link
                            to="/contact"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all bg-brand-red rounded-full hover:bg-brand-darkRed hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start the Journey
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </Link>
                        <Link
                            to="/courses"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 transition-all bg-white border-2 border-gray-100 rounded-full hover:border-brand-amber hover:text-brand-amber hover:shadow-lg hover:-translate-y-1"
                        >
                            Explore Courses
                        </Link>
                    </motion.div>

                    {/* Stats with Icons */}
                    <div className="mt-10 flex gap-8 pt-8 border-t-2 border-dashed border-gray-200 w-full">
                        <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-3">
                            <div className="p-3 bg-red-50 rounded-2xl text-brand-red">
                                <Palette size={24} />
                            </div>
                            <div>
                                <div className='text-2xl font-bold text-gray-900'>1000+</div>
                                <div className='text-xs font-bold text-gray-500 uppercase tracking-wider'>Happy Kids</div>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-3">
                            <div className="p-3 bg-amber-50 rounded-2xl text-brand-amber">
                                <Star size={24} fill="currentColor" />
                            </div>
                            <div>
                                <div className='text-2xl font-bold text-gray-900'>4.9/5</div>
                                <div className='text-xs font-bold text-gray-500 uppercase tracking-wider'>Parent Rating</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side: Image with Floating Animation */}
                <div className="md:w-1/2 flex justify-center relative mt-12 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="relative z-10"
                    >
                        {/* Playful Frame */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-brand-amber via-brand-red to-purple-400 rounded-[2.5rem] rotate-6 opacity-30 blur-lg animate-pulse"></div>

                        <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                            <motion.img
                                src="/Images/header.jpg"
                                alt="Creative Kids"
                                className="w-full max-w-md object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center"
                        >
                            <span className="text-3xl">🎨</span>
                            <span className="text-xs font-bold text-gray-600 mt-1">Creative</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center"
                        >
                            <span className="text-3xl">🎵</span>
                            <span className="text-xs font-bold text-gray-600 mt-1">Fun</span>
                        </motion.div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
