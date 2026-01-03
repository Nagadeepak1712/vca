import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart, Circle, Cloud, Sparkles, Music, Pencil, Palette } from 'lucide-react';

/* eslint-disable react-hooks/purity */
const icons = [ Heart, Circle, Cloud, Sparkles, Music, Pencil, Palette];
const colors = ['text-red-300', 'text-yellow-300', 'text-blue-300', 'text-green-300', 'text-purple-300', 'text-pink-300'];

const FloatingShapes: React.FC = () => {
    // Generate static random positions for hydration stability
    const shapes = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        Icon: icons[i % icons.length],
        color: colors[i % colors.length],
        size: Math.random() * 20 + 10,
        initialX: Math.random() * 100, // vw
        initialY: Math.random() * 100, // vh
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5
    })), []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    className={`absolute ${shape.color} opacity-40`}
                    initial={{ x: `${shape.initialX}vw`, y: `${shape.initialY}vh` }}
                    animate={{
                        y: [`${shape.initialY}vh`, `${shape.initialY - 20}vh`, `${shape.initialY}vh`],
                        x: [`${shape.initialX}vw`, `${shape.initialX + 10}vw`, `${shape.initialX}vw`],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: shape.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: shape.delay
                    }}
                    style={{
                        width: shape.size,
                        height: shape.size,
                    }}
                >
                    <shape.Icon size={shape.size} fill="currentColor" className="opacity-50" />
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingShapes;
