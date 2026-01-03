import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseProps {
    course: {
        id: string;
        title: string;
        category: string;
        image: string;
        description: string;
        features: string[];
        duration: string;
    };
}

const CourseCard: React.FC<CourseProps> = ({ course }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative flex flex-col overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300"
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Floating Like Button */}
                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0 hover:bg-white hover:scale-110 shadow-lg z-10">
                    <Heart className="text-gray-400 hover:text-brand-red hover:fill-brand-red transition-colors" size={20} />
                </button>

                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-white">
                    <span className="text-sm font-medium bg-brand-red px-3 py-1 rounded-full shadow-lg">
                        {course.duration}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6 relative">
                {/* Decorative background shape */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-bl-[100px] -z-0 transition-transform duration-500 origin-top-right scale-0 group-hover:scale-100"></div>

                <div className="flex items-center justify-between mb-3 relative z-10">
                    <span className="text-xs font-bold tracking-wider text-brand-amber uppercase">
                        {course.category}
                    </span>
                </div>

                <h3 className="mb-3 text-xl font-bold font-serif text-gray-900 group-hover:text-brand-red transition-colors relative z-10">
                    {course.title}
                </h3>

                <ul className="mb-6 space-y-1.5 flex-grow relative z-10">
                    {course.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                        </li>
                    ))}
                </ul>

                <Link
                    to={`/courses/${course.id}`} // Assuming we have detailed pages or section
                    className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-brand-red transition-colors mt-auto relative z-10"
                >
                    Learn More
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
            </div>
        </motion.div>
    );
};

export default CourseCard;
