import React, { useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { COURSES } from '../constants';
import { ArrowLeft, Check, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const CourseDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const course = useMemo(() => {
        const foundCourse = COURSES.find(c => c.id === id);
        if (!foundCourse) {
            navigate('/courses');
            return null;
        }
        return foundCourse;
    }, [id, navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!course) return null;

    return (
        <div className="min-h-screen bg-gray-50 pb-20">

            {/* Hero Banner */}
            <div className="relative h-[50vh] min-h-[400px]">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
                    <div className="container px-4">
                        <span className="inline-block px-3 py-1 bg-brand-red text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                            {course.category}
                        </span>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-4xl md:text-6xl font-bold font-serif text-white mb-6"
                        >
                            {course.title}
                        </motion.h1>
                    </div>
                </div>
            </div>

            <div className="container px-4 mx-auto md:px-6 relative -mt-20 z-10">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
                    <Link to="/courses" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-red mb-8 font-medium">
                        <ArrowLeft size={20} />
                        Back to Courses
                    </Link>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">About the Course</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {course.description}
                                </p>
                                {/* Placeholder for extended description if available */}
                                <p className="text-gray-600 mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold font-serif mb-4 text-gray-900">What You Will Learn</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {course.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                                            <Check className="text-brand-red flex-shrink-0" size={20} />
                                            <span className="font-medium text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="md:col-span-1">
                            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 sticky top-24">
                                <h3 className="text-lg font-bold mb-6 border-b border-orange-200 pb-2">Course Info</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3">
                                        <Clock className="text-brand-amber" />
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase">Duration</p>
                                            <p className="font-semibold text-gray-900">{course.duration}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Calendar className="text-brand-amber" />
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase">Batches</p>
                                            <p className="font-semibold text-gray-900">Weekdays / Weekends</p>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    to="/contact"
                                    className="block w-full py-4 bg-brand-red text-white font-bold text-center rounded-xl shadow-lg hover:bg-brand-darkRed transition-colors hover:scale-105 transform duration-200"
                                >
                                    Enroll Now
                                </Link>
                                <p className="text-xs text-center text-gray-500 mt-4">
                                    Limited seats available per batch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;
