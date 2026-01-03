import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { ACADEMY_DETAILS } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container px-4 mx-auto md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Column 1: About */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/Images/logo.png" alt="V Creative Academy" className="w-10 h-10 object-contain bg-white rounded-full p-1" />
                            <h3 className="text-2xl font-serif font-bold text-brand-amber">
                                {ACADEMY_DETAILS.name}
                            </h3>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Empowering students through creativity and skill development. Join us to explore your potential in art, music, and cognitive growth.
                        </p>
                    </div>

                    {/* Column 2: Quick Links & Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-brand-red pl-3">
                            Quick Contact
                        </h4>
                        <div className="flex flex-col gap-4 text-gray-300">
                            <div className="flex items-start gap-3">
                                <MapPin className="flex-shrink-0 text-brand-amber mt-1" size={20} />
                                <span>{ACADEMY_DETAILS.location}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="flex-shrink-0 text-brand-amber" size={20} />
                                <a href={`tel:${ACADEMY_DETAILS.phone}`} className="hover:text-white transition-colors">
                                    {ACADEMY_DETAILS.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="flex-shrink-0 text-brand-amber" size={20} />
                                <a href={`mailto:${ACADEMY_DETAILS.email}`} className="hover:text-white transition-colors">
                                    {ACADEMY_DETAILS.email}
                                </a>
                            </div>
                        </div>

                        <h4 className="text-lg font-bold mt-8 mb-4 text-white border-l-4 border-brand-red pl-3">
                            Links
                        </h4>
                        <div className="flex gap-4 text-sm font-medium text-gray-400">
                            <Link to="/" className="hover:text-brand-amber transition-colors">Home</Link>
                            <Link to="/courses" className="hover:text-brand-amber transition-colors">Courses</Link>
                            <Link to="/about" className="hover:text-brand-amber transition-colors">About</Link>
                            <Link to="/contact" className="hover:text-brand-amber transition-colors">Contact</Link>
                        </div>
                    </div>

                    {/* Column 3: Map */}
                    <div className="h-64 md:h-full min-h-[250px] bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
                        <iframe
                            src={ACADEMY_DETAILS.googleMapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Academy Location"
                            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} {ACADEMY_DETAILS.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
