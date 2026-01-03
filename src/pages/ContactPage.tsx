import React from 'react';
import ContactForm from '../components/ContactForm';
import { ContactAnimations } from '../components/ContactAnimations';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ACADEMY_DETAILS } from '../constants';

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-10 pb-20">
            <div className="container px-4 mx-auto md:px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-gray-900">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Have questions about our courses or admissions? We'd love to hear from you.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    {/* Info Side */}
                    <div className="bg-white/90 text-gray-900 p-10 md:p-14 md:w-2/5 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm border-r border-gray-100">
                        {/* Decor */}
                        <ContactAnimations />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full mix-blend-overlay filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-serif font-bold mb-8 text-black">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-brand-amber/20 rounded-lg text-brand-amber mt-1">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">Phone</p>
                                        <p className="font-bold text-lg text-black">{ACADEMY_DETAILS.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-brand-amber/20 rounded-lg text-brand-amber mt-1">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">Email</p>
                                        <p className="font-bold text-lg text-black break-all">{ACADEMY_DETAILS.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-brand-amber/20 rounded-lg text-brand-amber mt-1">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">Location</p>
                                        <p className="font-bold text-lg w-3/4 text-black">{ACADEMY_DETAILS.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-brand-amber/20 rounded-lg text-brand-amber mt-1">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">Office Hours</p>
                                        <p className="font-bold text-black">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-gray-400 text-sm">
                                Follow us on social media for updates and student showcases.
                            </p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="p-10 md:p-14 md:w-3/5">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
