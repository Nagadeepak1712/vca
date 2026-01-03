import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-orange-50">
            <div className="container px-4 mx-auto md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-gray-900">
                        What Our Students Say
                    </h2>
                    <p className="text-gray-600">
                        Hear from our community about their learning journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
                        >
                            <Quote className="absolute top-6 right-6 text-brand-amber/20" size={48} />

                            <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-bold">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                                        {testimonial.role}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
