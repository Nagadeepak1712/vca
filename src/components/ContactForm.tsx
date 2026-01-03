import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import clsx from 'clsx';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const { name, email, phone, course, message } = formData;

        // Construct WhatsApp Message
        const text = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Course:* ${course}%0A*Message:* ${message}`;

        const whatsappUrl = `https://wa.me/919843291412?text=${text}`;

        // Simulate short delay for UX then redirect
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', course: '', message: '' });
        }, 800);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-blue-50 border-2 border-transparent focus:border-brand-blue focus:bg-white transition-all outline-none shadow-sm hover:shadow-md focus:scale-[1.02] duration-200"
                        placeholder="Your Name ✨"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-purple-50 border-2 border-transparent focus:border-purple-400 focus:bg-white transition-all outline-none shadow-sm hover:shadow-md focus:scale-[1.02] duration-200"
                        placeholder="hello@email.com 📧"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-green-50 border-2 border-transparent focus:border-green-400 focus:bg-white transition-all outline-none shadow-sm hover:shadow-md focus:scale-[1.02] duration-200"
                        placeholder="+91 98765 43210 📱"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">I'm interested in</label>
                    <div className="relative">
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-2xl bg-orange-50 border-2 border-transparent focus:border-brand-amber focus:bg-white transition-all outline-none shadow-sm hover:shadow-md focus:scale-[1.02] duration-200 appearance-none cursor-pointer"
                        >
                            <option value="">Select a Cool Course! 🎨</option>
                            <option value="Art">Visual Arts</option>
                            <option value="Music">Music Academy</option>
                            <option value="Abacus">Abacus Math</option>
                            <option value="Handwriting">Handwriting</option>
                            <option value="Games">Chess & Strategy</option>
                            <option value="Other">Other Query</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-orange-400">▼</div>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-pink-50 border-2 border-transparent focus:border-brand-red focus:bg-white transition-all outline-none resize-none shadow-sm hover:shadow-md focus:scale-[1.02] duration-200"
                    placeholder="Tell us something awesome! 🌈"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={clsx(
                    "w-full py-5 rounded-2xl font-bold text-white text-lg flex items-center justify-center gap-3 transition-all relative overflow-hidden group",
                    status === 'sending' ? "bg-gray-400 cursor-not-allowed" :
                        status === 'success' ? "bg-green-500 scale-95" :
                            "bg-gradient-to-r from-brand-red to-orange-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01]"
                )}
            >
                {status === 'sending' ? (
                    <>
                        <Loader2 className="animate-spin" size={24} />
                        Sending via Pigeon Post... 🐦
                    </>
                ) : status === 'success' ? (
                    "Message Delivered! 🎉"
                ) : (
                    <>
                        Send Message 🚀
                        <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                )}
            </button>

            {status === 'error' && (
                <p className="text-red-600 text-center text-sm mt-2 font-medium bg-red-50 p-2 rounded-lg border border-red-100">
                    Oops! Carrier pigeon got lost. Please try WhatsApp directly! 😅
                </p>
            )}
        </form>
    );
};

export default ContactForm;
