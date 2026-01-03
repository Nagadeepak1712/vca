import React, { useState } from 'react';
import { ACADEMY_DETAILS } from '../constants';
import { Heart, Star, Sparkles, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingShapes from '../components/FloatingShapes';

const AboutPage: React.FC = () => {
    const [isGlowing, setIsGlowing] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-gradient-to-b from-white to-blue-50 overflow-hidden min-h-screen relative">
            <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
                <FloatingShapes />
            </div>

            {/* Header */}
            <div className="relative bg-brand-red text-white py-24 text-center overflow-hidden rounded-b-[4rem] shadow-xl z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/p5.png')] opacity-10"></div>
                {/* Decorative Circles */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-amber/30 rounded-full blur-xl animate-pulse animation-delay-1000"></div>

                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="relative text-5xl md:text-7xl font-extrabold font-sans mb-6 tracking-tight drop-shadow-md"
                >
                    About Us <span className="text-brand-amber inline-block transform -rotate-3"></span>
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative text-red-100 max-w-2xl mx-auto px-4 text-xl font-medium"
                >
                    Where creativity meets learning in a world of color and joy.
                </motion.p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container px-4 mx-auto md:px-6 py-20 relative z-10"
            >
                {/* Director & Vision Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                    {/* Image Side */}
                    <motion.div variants={itemVariants} className="w-full md:w-1/2 flex justify-center">
                        <div className="relative group">
                            {/* Playful blob background */}
                            <div className="absolute inset-0 bg-blue-200 rounded-[3rem] transform rotate-6 scale-105 group-hover:rotate-3 transition-transform duration-500"></div>
                            <div className="absolute inset-0 bg-brand-amber/30 rounded-[3rem] transform -rotate-3 scale-105 group-hover:-rotate-1 transition-transform duration-500 delay-75"></div>

                            <img
                                src="/Images/vj.jpeg"
                                alt={ACADEMY_DETAILS.director.name}
                                onClick={() => setIsGlowing(!isGlowing)}
                                className={`relative rounded-[2.5rem] w-full max-w-sm h-auto object-cover cursor-pointer transition-all duration-500 border-8 border-white ${isGlowing
                                    ? 'ring-4 ring-brand-red shadow-[0_0_50px_rgba(220,38,38,0.6)] scale-105'
                                    : 'shadow-2xl group-hover:scale-[1.02]'
                                    }`}
                            />
                            {/* Floating Cute Badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -bottom-6 -right-6 bg-white p-3 rounded-2xl shadow-lg border-2 border-brand-red text-brand-red"
                            >
                                <Heart fill="currentColor" size={24} />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div variants={itemVariants} className="w-full md:w-1/2">
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border-2 border-red-50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-[100px] pointer-events-none"></div>

                            <h2 className="text-sm font-black text-brand-red tracking-widest uppercase mb-3 flex items-center gap-2">
                                <Sparkles size={16} /> Director's Message
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-black font-sans text-gray-900 mb-6 leading-tight">
                                Welcome to the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-amber">Family of Creators</span>
                            </h3>

                            <div className="relative">
                                <span className="absolute -top-4 -left-2 text-6xl text-brand-red/20 font-serif">"</span>
                                <p className="text-gray-600 leading-relaxed mb-6 text-lg font-medium relative z-10 italic">
                                    {ACADEMY_DETAILS.director.message}
                                </p>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-8">
                                We started with a simple mission: to provide a space where art and education converge. Over the years, we have grown into a vibrant community of learners, artists, and educators.
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">🎓</div>
                                <div>
                                    <p className="font-bold text-gray-900 text-xl">{ACADEMY_DETAILS.director.name}</p>
                                    <p className="text-gray-500 font-medium text-sm text-brand-red">Founder & Director</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Our Vision Block */}
                <motion.div
                    variants={itemVariants}
                    className="mb-24 text-center max-w-4xl mx-auto bg-violet-600 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                    {/* Background Glows */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-500 rounded-full blur-[80px] opacity-40"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400 rounded-full blur-[80px] opacity-40"></div>

                    <h2 className="relative text-3xl md:text-5xl font-extrabold mb-6 font-sans">Our Big Vision 🚀</h2>
                    <p className="relative text-xl md:text-2xl opacity-90 leading-relaxed font-light">
                        "To be the coolest playground for unlocking human potential! We want every child to find their superpower—whether it's painting a masterpiece, solving math magic, or writing their own story."
                    </p>
                </motion.div>

                {/* Values / Why Choose Us */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {[
                        {
                            title: "Expert Faculty",
                            desc: "Learn from award-winning artists and certified super-teachers!",
                            icon: Star,
                            color: "bg-red-50",
                            iconColor: "text-brand-red",
                            borderColor: "border-brand-red"
                        },
                        {
                            title: "Personal Attention",
                            desc: "Small groups mean everyone gets to be the star of the show.",
                            icon: Heart,
                            color: "bg-amber-50",
                            iconColor: "text-brand-amber",
                            borderColor: "border-brand-amber"
                        },
                        {
                            title: "Holistic Growth",
                            desc: "We grow smart brains AND happy creative hearts together.",
                            icon: Sun,
                            color: "bg-blue-50",
                            iconColor: "text-blue-500",
                            borderColor: "border-blue-300"
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className={`${item.color} p-8 rounded-[2rem] border-2 ${item.borderColor} shadow-lg transition-all relative overflow-hidden group`}
                        >
                            <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center ${item.iconColor} mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                                <item.icon size={28} fill="currentColor" className="opacity-80" />
                            </div>
                            <h4 className="text-2xl font-bold mb-3 font-sans text-gray-900">{item.title}</h4>
                            <p className="text-gray-700 font-medium leading-relaxed">{item.desc}</p>

                            {/* Decorative Corner */}
                            <div className={`absolute -bottom-8 -right-8 w-24 h-24 ${item.iconColor} opacity-5 rounded-full`}></div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default AboutPage;
