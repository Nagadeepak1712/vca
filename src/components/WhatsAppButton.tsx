import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ACADEMY_DETAILS } from '../constants';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
    const handleClick = () => {
        const message = "Hi, I'm interested in knowing more about V Creative Academy courses.";
        const url = `https://wa.me/${ACADEMY_DETAILS.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <motion.button
            onClick={handleClick}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed z-50 p-4 text-white shadow-lg bottom-8 right-8 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
        </motion.button>
    );
};

export default WhatsAppButton;
