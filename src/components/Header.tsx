import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { ACADEMY_DETAILS } from '../constants';

const MotionLink = motion(Link);

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Courses', path: '/courses' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={clsx(
                'fixed top-4 left-4 right-4 z-40 transition-all duration-500 ease-in-out rounded-2xl border border-white/10',
                isScrolled
                    ? 'bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-transparent backdrop-blur-xl shadow-lg py-3 px-6'
                    : 'bg-transparent py-4 px-2'
            )}
        >
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <MotionLink
                        to="/"
                        className="flex items-center gap-3 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src="/Images/logo.png" alt="V Creative Academy" className="w-14 h-14 object-contain drop-shadow-md" />
                        <span className={clsx(
                            "text-2xl md:text-3xl font-bold font-serif tracking-tight transition-colors",
                            isScrolled ? "text-white" : "text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-amber"
                        )}>
                            {ACADEMY_DETAILS.name}
                        </span>
                    </MotionLink>

                    {/* Desktop Nav */}
                    <nav className={clsx(
                        "hidden md:flex items-center gap-2 p-1.5 rounded-full border shadow-sm transition-all",
                        isScrolled ? "bg-white/10 border-white/20" : "bg-white/50 border-white/40"
                    )}>
                        {navLinks.map((link) => (
                            <MotionLink
                                key={link.path}
                                to={link.path}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={clsx(
                                    "px-4 py-2 text-sm font-bold rounded-full transition-all duration-300",
                                    location.pathname === link.path
                                        ? "bg-gradient-to-r from-brand-red to-brand-amber text-white shadow-md"
                                        : isScrolled ? "text-gray-200 hover:bg-white/20 hover:text-white" : "text-gray-600 hover:bg-white hover:text-brand-red"
                                )}
                            >
                                {link.name}
                            </MotionLink>
                        ))}
                        <MotionLink
                            to="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="ml-2 px-6 py-2.5 text-sm font-bold text-white transition-all bg-gray-900 rounded-full hover:bg-black shadow-lg shadow-gray-200"
                        >
                            Get Started
                        </MotionLink>
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden p-2 text-gray-700 bg-white/50 rounded-full backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="absolute top-full left-0 right-0 mt-4 mx-4 bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <div className="p-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <MotionLink
                                    key={link.path}
                                    to={link.path}
                                    whileTap={{ scale: 0.98 }}
                                    className={clsx(
                                        "block px-4 py-3 text-base font-bold rounded-xl transition-all",
                                        location.pathname === link.path
                                            ? "bg-gradient-to-r from-brand-red/10 to-brand-amber/10 text-brand-red"
                                            : "text-gray-700 hover:bg-gray-50"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </MotionLink>
                            ))}
                            <MotionLink
                                to="/contact"
                                whileTap={{ scale: 0.95 }}
                                className="block w-full px-5 py-4 text-center text-white bg-gradient-to-r from-brand-red to-brand-amber rounded-xl font-bold shadow-lg mt-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Started
                            </MotionLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
