import React from 'react';

const StoryPage = () => (
    <div className="animate-fadeIn">
        <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-5xl font-bold mb-8 font-serif leading-tight">Born in Brooklyn, <br /><span className="text-red-600 underline decoration-gray-100">Rooted in Italy</span></h2>
                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                        <p>Our journey began with a simple dream: to bring the authentic, wood-fired taste of Naples to the heart of the city.</p>
                        <p>We spent three years traveling through small Italian villages, learning the secrets of the 48-hour fermentation process and the delicate balance of high-hydration dough.</p>
                        <p className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500 italic">"Pizza is a language. We're here to tell a story about history, family, and the perfect crunch."</p>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=800"
                        className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                        alt="Chef preparing pizza"
                    />
                </div>
            </div>
        </section>
    </div>
);

export default StoryPage;
