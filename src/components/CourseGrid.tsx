import React, { useState, useMemo } from 'react';
import { COURSES } from '../constants';
import CourseCard from './CourseCard';
import CourseHeroAnimation from './CourseHeroAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import clsx from 'clsx';

const CourseGrid: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // Extract unique categories
    const categories = ['All', ...new Set(COURSES.map(c => c.category))];

    // Filter logic
    const filteredCourses = useMemo(() => {
        return COURSES.filter(course => {
            const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
            const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    return (
        <section id="courses" className="py-24 bg-white">
            <div className="container px-4 mx-auto md:px-6">

                {/* Hero Animation */}
                <CourseHeroAnimation />

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-gray-900">
                        Our Courses
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Explore our diverse range of programs designed to nurture creativity and intellect.
                    </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={clsx(
                                    "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                                    activeCategory === category
                                        ? "bg-gray-900 text-white shadow-lg scale-105"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                        />
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <p>No courses found matching your criteria.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CourseGrid;
