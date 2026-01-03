import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const WalkingMascot: React.FC = () => {
    const [behavior, setBehavior] = useState<'walking' | 'running' | 'dancing' | 'roasting' | 'idle'>('walking');
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();

    // Message Categories
    const messages = {
        greeting: ["Hi there! 👋", "I can fly now! ☁️", "Welcome! ✨", "Nice to see you!"],
        encouragement: ["Keep going! ⭐", "The sky is the limit! 🚀", "Explore new skills! 🎨"],
        roast: ["Catch me if you can! 💨", "Too slow! 😎", "I'm not a target! 🎯", "Focus on your work! 📚"],
        dance: ["Spin cycle! 🌪️", "Look at me go! 🤩", "Wheeeee! 🎉"]
    };

    const [currentMessage, setCurrentMessage] = useState(messages.greeting[0]);

    useEffect(() => {
        const moveRandomly = async () => {
            // Screen boundaries with some padding
            const maxX = window.innerWidth - 100;
            const maxY = window.innerHeight - 100;

            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;
            // Add some rotation for "floating" feel
            const randomRotate = Math.random() * 20 - 10;

            if (behavior === 'walking') {
                await controls.start({
                    x: randomX,
                    y: randomY,
                    rotate: randomRotate,
                    transition: { duration: 4, ease: "easeInOut" }
                });
            } else if (behavior === 'running') {
                await controls.start({
                    x: randomX,
                    y: randomY,
                    rotate: randomRotate * 2,
                    transition: { duration: 1.5, ease: "easeInOut" }
                });
            }
        };

        // Start creating an interval for movement when not interacting
        let interval: ReturnType<typeof setInterval>;
        if (!isHovered && (behavior === 'walking' || behavior === 'running')) {
            moveRandomly(); // Initial move
            interval = setInterval(moveRandomly, behavior === 'walking' ? 4000 : 1500);
        } else {
            controls.stop();
        }

        return () => clearInterval(interval);
    }, [behavior, isHovered, controls]);

    const handleInteraction = () => {
        const behaviors: ('running' | 'dancing' | 'roasting')[] = ['running', 'dancing', 'roasting'];
        const nextBehavior = behaviors[Math.floor(Math.random() * behaviors.length)];

        setBehavior(nextBehavior);

        if (nextBehavior === 'roasting') {
            setCurrentMessage(messages.roast[Math.floor(Math.random() * messages.roast.length)]);
            setTimeout(() => setBehavior('walking'), 3000);
        } else if (nextBehavior === 'dancing') {
            setCurrentMessage(messages.dance[Math.floor(Math.random() * messages.dance.length)]);
            setTimeout(() => setBehavior('walking'), 4000);
        } else if (nextBehavior === 'running') {
            setCurrentMessage("Zoomies! ⚡");
            setTimeout(() => setBehavior('walking'), 5000);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full z-[100] pointer-events-none overflow-hidden">
            <motion.div
                className="absolute pointer-events-auto cursor-pointer"
                animate={controls}
                initial={{ x: 0, y: window.innerHeight - 150 }}
                onHoverStart={() => {
                    setIsHovered(true);
                    controls.stop();
                    setCurrentMessage(messages.greeting[Math.floor(Math.random() * messages.greeting.length)]);
                }}
                onHoverEnd={() => {
                    setIsHovered(false);
                    if (behavior !== 'dancing' && behavior !== 'roasting') {
                        setBehavior('walking');
                    }
                }}
                onClick={handleInteraction}
                style={{ willChange: "transform" }}
            >
                <div className="relative group">
                    {/* Speech Bubble */}
                    <AnimatePresence>
                        {(isHovered || behavior === 'roasting' || behavior === 'dancing') && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                className="absolute -top-24 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-2xl shadow-xl border-2 border-brand-amber whitespace-nowrap min-w-[120px] text-center z-20"
                            >
                                <p className="font-bold text-gray-800 text-sm">{currentMessage}</p>
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-brand-amber transform rotate-45"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Anime Mascot Image */}
                    <motion.div
                        animate={{
                            y: behavior === 'dancing' ? [0, -30, 0] : [0, -10, 0],
                            scale: behavior === 'roasting' ? [1, 1.1, 1] : 1,
                            rotate: behavior === 'dancing' ? [0, 360, 0] : 0,
                        }}
                        transition={{
                            y: { duration: behavior === 'dancing' ? 0.5 : 2, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 0.2, repeat: Infinity },
                            rotate: { duration: 0.8, loop: Infinity }
                        }}
                        className="w-32 h-32 relative"
                    >
                        <img
                            src="/Images/mascot.png"
                            alt="Mascot"
                            className="w-full h-full object-contain drop-shadow-xl"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default WalkingMascot;
