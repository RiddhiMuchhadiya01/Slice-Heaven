import React from 'react';
import { Instagram, Facebook, ChevronRight } from 'lucide-react';

const Footer = ({ navigate }) => (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-3xl">🍕</span>
                    <span className="text-2xl font-bold tracking-tight text-red-600">SLICE<span className="text-slate-900">HEAVEN</span></span>
                </div>
                <p className="text-gray-500 mb-8 max-w-xs">Serving the most authentic wood-fired pizzas in the city. Fresh ingredients, traditional techniques, modern soul.</p>
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-500 transition cursor-pointer"><Instagram size={18} /></div>
                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-500 transition cursor-pointer"><Facebook size={18} /></div>
                </div>
            </div>

            <div>
                <h4 className="font-bold text-lg mb-8">Navigation</h4>
                <ul className="space-y-4 text-gray-500">
                    <li><button onClick={() => navigate('home')} className="hover:text-red-600 transition">Home</button></li>
                    <li><button onClick={() => navigate('menu')} className="hover:text-red-600 transition">Our Menu</button></li>
                    <li><button onClick={() => navigate('story')} className="hover:text-red-600 transition">Our Story</button></li>
                    <li><button onClick={() => navigate('contact')} className="hover:text-red-600 transition">Contact Us</button></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-lg mb-8">Hours</h4>
                <ul className="space-y-4 text-gray-500">
                    <li className="flex justify-between"><span>Mon - Thu:</span> <span className="font-bold text-slate-900 text-sm">11am - 10pm</span></li>
                    <li className="flex justify-between"><span>Fri - Sat:</span> <span className="font-bold text-slate-900 text-sm">11am - 12am</span></li>
                    <li className="flex justify-between"><span>Sunday:</span> <span className="font-bold text-slate-900 text-sm">12pm - 9pm</span></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-lg mb-8">Newsletter</h4>
                <p className="text-gray-500 mb-4 text-sm">Get secret discount codes and news.</p>
                <div className="flex gap-2">
                    <input type="email" placeholder="Your email" className="bg-gray-50 p-4 rounded-xl text-sm w-full outline-none focus:ring-1 focus:ring-red-200" />
                    <button className="bg-slate-900 text-white p-4 rounded-xl"><ChevronRight size={18} /></button>
                </div>
            </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-50">
            <p className="text-gray-400 text-xs tracking-widest uppercase">&copy; 2024 Slice of Heaven. Hand-crafted with 🍕</p>
        </div>
    </footer>
);

export default Footer;
