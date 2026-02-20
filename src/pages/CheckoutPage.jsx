import React, { useState } from 'react';

const CheckoutPage = ({ cart, orderDetails, onCompleteOrder, navigate }) => {
    const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toFixed(2);
    const [loading, setLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('credit');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            onCompleteOrder();
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-20 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-bold mb-8 font-serif">Payment</h2>
                    <div className="bg-white p-6 rounded-2xl shadow-sm mb-8 border border-gray-100">
                        <h3 className="font-bold text-lg mb-4 text-gray-800">Delivery To:</h3>
                        <p className="text-gray-600">{orderDetails?.firstName} {orderDetails?.lastName}</p>
                        <p className="text-gray-600">{orderDetails?.address}</p>
                        <p className="text-gray-600">{orderDetails?.city}, {orderDetails?.zip}</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>

                        <div className="pt-8">
                            <h3 className="font-bold text-lg mb-4">Payment Selection</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('credit')}
                                    className={`p-4 border-2 rounded-2xl flex items-center gap-3 transition-all ${paymentMethod === 'credit' ? 'border-red-600 bg-red-50' : 'border-gray-100 hover:border-red-100'}`}
                                >
                                    <div className={`w-4 h-4 rounded-full border ${paymentMethod === 'credit' ? 'bg-red-600 border-red-600' : 'border-gray-300'}`}></div>
                                    <span className="font-bold">Credit Card</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('cod')}
                                    className={`p-4 border-2 rounded-2xl flex items-center gap-3 transition-all ${paymentMethod === 'cod' ? 'border-red-600 bg-red-50' : 'border-gray-100 hover:border-red-100'}`}
                                >
                                    <div className={`w-4 h-4 rounded-full border ${paymentMethod === 'cod' ? 'bg-red-600 border-red-600' : 'border-gray-300'}`}></div>
                                    <span className="font-bold">Cash on Delivery</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => navigate('order-details')}
                                disabled={loading}
                                className="w-1/3 py-5 rounded-2xl font-bold text-xl text-gray-600 border-2 border-gray-200 hover:border-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Back
                            </button>
                            <button
                                disabled={loading}
                                className={`w-2/3 py-5 rounded-2xl font-bold text-xl text-white shadow-xl transition-all ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 active:scale-95'}`}
                            >
                                {loading ? 'Processing...' : (paymentMethod === 'cod' ? `Place Order ($${total})` : `Pay $${total}`)}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-slate-50 p-10 rounded-[3rem] h-fit sticky top-28">
                    <h3 className="text-xl font-bold mb-6">Summary</h3>
                    <div className="space-y-4 max-h-60 overflow-y-auto pr-2 mb-8">
                        {cart.map((item) => (
                            <div key={item.id} className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">{item.name} x {item.quantity}</span>
                                <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-200 pt-6 flex justify-between text-2xl font-bold">
                        <span>Total Payable</span>
                        <span className="text-red-600">${total}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
