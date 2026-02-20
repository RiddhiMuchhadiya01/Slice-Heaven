import React from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessPage = ({ navigate }) => (
    <div className="max-w-xl mx-auto px-4 py-32 text-center animate-fadeIn">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-bold mb-4 font-serif">Mangia! Mangia!</h2>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Your order has been received. Our chefs are preparing your dough right now.
            Estimated delivery time: <span className="font-bold text-slate-900 underline decoration-red-400">25-30 minutes</span>.
        </p>
        <button
            onClick={() => navigate('home')}
            className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:bg-slate-800 transition"
        >
            Return Home
        </button>
    </div>
);

export default SuccessPage;
