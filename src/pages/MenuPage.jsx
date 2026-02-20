import React, { useState, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';

const MenuPage = ({ onAddToCart }) => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Classic', 'Premium', 'Vegan'];

    const filteredItems = useMemo(() => {
        return filter === 'All' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.category === filter);
    }, [filter]);

    return (
        <div className="animate-fadeIn max-w-7xl mx-auto px-4 py-20">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4 font-serif">Our Signature Menu</h2>
                <p className="text-gray-500 max-w-xl mx-auto">Hand-stretched dough, secret family sauce, and the finest local toppings.</p>

                <div className="flex justify-center flex-wrap gap-3 mt-10">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-2 rounded-full font-medium transition-all ${filter === cat ? 'bg-red-600 text-white shadow-lg' : 'bg-white border border-gray-200 text-gray-600 hover:border-red-400'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map(item => (
                    <div key={item.id} className="group bg-white p-4 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50 overflow-hidden">
                        <div className="relative overflow-hidden rounded-[2rem] h-56 mb-6">
                            <img
                                src={item.img}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                alt={item.name}
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-red-600 uppercase tracking-widest">
                                {item.category}
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                                <span className="text-red-600 font-bold text-lg">${item.price}</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-2">{item.desc}</p>
                            <button
                                onClick={() => onAddToCart(item)}
                                className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-red-600 transition-colors flex items-center justify-center gap-2 group/btn"
                            >
                                Add to Cart <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuPage;
