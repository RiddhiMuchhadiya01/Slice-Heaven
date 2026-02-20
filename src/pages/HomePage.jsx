import React from 'react';
import { ChevronRight, Flame, Truck, Star } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';

const HomePage = ({ navigate }) => (
    <div className="animate-fadeIn">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 lg:pt-40 lg:pb-48 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 z-10 text-center lg:text-left">
                    <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block">Crafted in New York</span>
                    <h1 className="text-5xl lg:text-8xl font-bold mb-6 leading-tight font-serif">
                        The Art of <br /> <span className="text-red-600 italic">True Pizza</span>
                    </h1>
                    <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto lg:mx-0">
                        48-hour fermented sourdough, wood-fired at 900°F. Experience the soul of Italy in every bite.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button
                            onClick={() => navigate('menu')}
                            className="bg-red-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl hover:shadow-red-200 flex items-center justify-center gap-2"
                        >
                            View Menu <ChevronRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => navigate('story')}
                            className="border-2 border-slate-200 px-10 py-5 rounded-2xl font-bold hover:bg-white transition"
                        >
                            Our Story
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
                    <div className="absolute inset-0 bg-red-100 rounded-full blur-[100px] opacity-30 -z-10 animate-pulse"></div>
                    <img
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000"
                        className="rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 w-full object-cover h-[500px]"
                        alt="Hero Pizza"
                    />
                </div>
            </div>
        </section>

        {/* Feature Stats */}
        <section className="bg-slate-900 py-16 text-white">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                    <h3 className="text-4xl font-bold mb-2">25+</h3>
                    <p className="text-slate-400">Pizza Varieties</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold mb-2">12k</h3>
                    <p className="text-slate-400">Happy Customers</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold mb-2">48h</h3>
                    <p className="text-slate-400">Dough Fermentation</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold mb-2">15min</h3>
                    <p className="text-slate-400">Average Delivery</p>
                </div>
            </div>
        </section>

        {/* Featured Specials */}
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="md:w-1/2">
                        <h2 className="text-5xl font-bold mb-4 font-serif">Today's Specials</h2>
                        <p className="text-gray-500">Carefully curated recipes using seasonal ingredients from local farms.</p>
                    </div>
                    <button onClick={() => navigate('menu')} className="text-red-600 font-bold flex items-center gap-2 hover:translate-x-1 transition">
                        See all creations <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {MENU_ITEMS.slice(0, 3).map(item => (
                        <div key={item.id} className="group cursor-pointer" onClick={() => navigate('menu')}>
                            <div className="overflow-hidden rounded-[2.5rem] mb-6 shadow-lg">
                                <img src={item.img} className="w-full h-80 object-cover group-hover:scale-105 transition duration-700" alt={item.name} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                            <p className="text-gray-500 mb-4 line-clamp-2">{item.desc}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-red-600 font-bold text-xl">${item.price}</span>
                                <span className="flex text-yellow-400"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                <h2 className="text-5xl font-bold mb-4 font-serif">Why Slice Heaven?</h2>
                <p className="text-gray-500">We don't just make pizza, we create experiences.</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition text-center border border-gray-100">
                    <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Flame size={32} /></div>
                    <h4 className="text-xl font-bold mb-4">Hand-Stretched</h4>
                    <p className="text-gray-500">Authentic techniques passed down through generations for the perfect crust.</p>
                </div>
                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition text-center border border-gray-100">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Truck size={32} /></div>
                    <h4 className="text-xl font-bold mb-4">Flash Delivery</h4>
                    <p className="text-gray-500">Our innovative heat-insulated bags ensure your pizza arrives piping hot.</p>
                </div>
                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition text-center border border-gray-100">
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Star size={32} /></div>
                    <h4 className="text-xl font-bold mb-4">Premium Sourcing</h4>
                    <p className="text-gray-500">We only use DOP-certified tomatoes and locally produced buffalo mozzarella.</p>
                </div>
            </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4 font-serif">Real Stories</h2>
                    <p className="text-gray-500">See what our community of pizza lovers has to say.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-12 bg-slate-50 rounded-[3rem] relative">
                        <span className="text-8xl text-red-100 absolute top-4 left-4 font-serif">“</span>
                        <p className="text-lg text-slate-700 italic relative z-10 mb-8 leading-relaxed">The Truffle Mushroom pizza is life-changing. I've had pizza in Naples, and this honestly rivals the best of them. The crust is light, airy, and has that perfect char.</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-300"></div>
                            <div>
                                <p className="font-bold">Sarah Jenkins</p>
                                <p className="text-sm text-gray-500">Food Critic, NY Times</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-12 bg-slate-50 rounded-[3rem] relative">
                        <span className="text-8xl text-red-100 absolute top-4 left-4 font-serif">“</span>
                        <p className="text-lg text-slate-700 italic relative z-10 mb-8 leading-relaxed">Best delivery experience in the city. The app is so easy to use, and my pizza arrived in 18 minutes. The hot honey on the Pepperoni is a stroke of genius!</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-300"></div>
                            <div>
                                <p className="font-bold">Marco Rossi</p>
                                <p className="text-sm text-gray-500">Local Foodie</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto bg-red-600 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <img src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=1000" className="w-full h-full object-cover" alt="" />
                </div>
                <h2 className="text-5xl lg:text-7xl font-bold mb-8 font-serif relative z-10">Ready for your slice?</h2>
                <p className="text-red-100 text-xl mb-12 max-w-2xl mx-auto relative z-10">Join 10,000+ pizza lovers who get the best wood-fired oven experience delivered to their doorstep.</p>
                <button onClick={() => navigate('menu')} className="bg-white text-red-600 px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105 relative z-10">
                    Start Your Order
                </button>
            </div>
        </section>
    </div>
);

export default HomePage;
