import React, { useState } from 'react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';

const Navbar = ({ activePage, navigate, cartCount }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = [
        { name: 'Home', id: 'home' },
        { name: 'Menu', id: 'menu' },
        { name: 'Our Story', id: 'story' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
                        <span className="text-3xl">🍕</span>
                        <span className="text-2xl font-bold tracking-tight text-red-600">SLICE<span className="text-slate-900">HEAVEN</span></span>
                    </div>

                    <div className="hidden md:flex space-x-8 font-medium">
                        {links.map(link => (
                            <button
                                key={link.id}
                                onClick={() => navigate(link.id)}
                                className={`transition-colors ${activePage === link.id ? 'text-red-600' : 'text-slate-600 hover:text-red-600'}`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('cart')}
                            className="relative p-2 hover:bg-gray-100 rounded-full transition group"
                        >
                            <ShoppingBag className="w-6 h-6 text-slate-700 group-hover:text-red-600 transition" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold min-w-[20px] h-5 rounded-full flex items-center justify-center border-2 border-white">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => navigate('menu')}
                            className="hidden sm:block bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition shadow-lg active:scale-95"
                        >
                            Order Now
                        </button>
                        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col gap-4 animate-fadeIn">
                    {links.map(link => (
                        <button
                            key={link.id}
                            onClick={() => { navigate(link.id); setIsMobileMenuOpen(false); }}
                            className="text-left py-2 font-medium border-b border-gray-50"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
