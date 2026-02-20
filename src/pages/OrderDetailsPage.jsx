import React, { useState } from 'react';

const OrderDetailsPage = ({ onNext, navigate, initialData }) => {
    const [formData, setFormData] = useState(initialData || {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(formData);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-20 animate-fadeIn">
            <h2 className="text-3xl font-bold mb-8 font-serif">Order Details</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase ml-1">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            required
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-red-100 transition"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase ml-1">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            required
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-red-100 transition"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">Delivery Address</label>
                    <input
                        type="text"
                        name="address"
                        required
                        placeholder="123 Pizza Street"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-red-100 transition"
                    />
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase ml-1">City</label>
                        <input
                            type="text"
                            name="city"
                            required
                            placeholder="New York"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-red-100 transition"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase ml-1">Zip</label>
                        <input
                            type="text"
                            name="zip"
                            required
                            placeholder="10012"
                            value={formData.zip}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-red-100 transition"
                        />
                    </div>
                </div>

                <div className="flex gap-4 pt-8">
                    <button
                        type="button"
                        onClick={() => navigate('cart')}
                        className="w-1/3 py-5 rounded-2xl font-bold text-xl text-gray-600 border-2 border-gray-200 hover:border-gray-300 transition-all"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="w-2/3 py-5 rounded-2xl font-bold text-xl text-white bg-red-600 hover:bg-red-700 active:scale-95 shadow-xl transition-all"
                    >
                        Next: Payment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OrderDetailsPage;
