import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => (
    <div className="max-w-7xl mx-auto px-4 py-20 animate-fadeIn">
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
                <h2 className="text-5xl font-bold mb-8 font-serif">Get in Touch</h2>
                <p className="text-slate-400 text-lg mb-12">Whether you want to cater an event, leave feedback, or just say hello, our team is always ready to listen.</p>

                <div className="space-y-8">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-red-500"><MapPin /></div>
                        <div>
                            <p className="text-slate-500 text-sm">Our Location</p>
                            <p className="font-bold">123 Pizza Blvd, New York, NY 10012</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-red-500"><Phone /></div>
                        <div>
                            <p className="text-slate-500 text-sm">Call Us</p>
                            <p className="font-bold">+1 (555) 123-SLICE</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-red-500"><Mail /></div>
                        <div>
                            <p className="text-slate-500 text-sm">Email</p>
                            <p className="font-bold">ciao@sliceheaven.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 bg-white rounded-[2.5rem] p-8 lg:p-12">
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                        <input type="text" required className="w-full p-4 rounded-2xl border border-slate-100 outline-none focus:ring-2 focus:ring-red-100 text-slate-900" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                        <input type="email" required className="w-full p-4 rounded-2xl border border-slate-100 outline-none focus:ring-2 focus:ring-red-100 text-slate-900" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Message</label>
                        <textarea rows="4" required className="w-full p-4 rounded-2xl border border-slate-100 outline-none focus:ring-2 focus:ring-red-100 text-slate-900"></textarea>
                    </div>
                    <button className="w-full bg-red-600 py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition shadow-lg">Send Message</button>
                </form>
            </div>
        </div>
    </div>
);

export default ContactPage;
