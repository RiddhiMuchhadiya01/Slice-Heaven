import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartPage = ({ cart, onUpdateQuantity, onRemove, navigate }) => {
    const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toFixed(2);
    const itemCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    if (cart.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-32 text-center animate-fadeIn">
                <div className="bg-red-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">🛒</div>
                <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-gray-500 mb-8">Hungry? We've got plenty of delicious options for you.</p>
                <button onClick={() => navigate('menu')} className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold">Go to Menu</button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-20 animate-fadeIn">
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-4xl font-bold font-serif">Your Order ({itemCount})</h2>
                <button onClick={() => navigate('menu')} className="text-red-600 font-bold flex items-center gap-2 hover:underline">
                    Add more
                </button>
            </div>

            <div className="space-y-4 mb-10">
                {cart.map((item) => (
                    <div key={item.id} className="bg-white p-6 rounded-[2rem] flex flex-col sm:flex-row items-center justify-between border border-gray-100 shadow-sm gap-6">
                        <div className="flex items-center gap-6 w-full sm:w-auto">
                            <img src={item.img} className="w-24 h-24 rounded-2xl object-cover shadow-md" alt={item.name} />
                            <div>
                                <h4 className="font-bold text-xl">{item.name}</h4>
                                <p className="text-gray-400 text-sm mb-2">{item.category}</p>
                                <p className="text-red-600 font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 w-full sm:w-auto justify-between sm:justify-end">
                            {/* Quantity Controls */}
                            <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                                <button
                                    onClick={() => onUpdateQuantity(item.id, -1)}
                                    className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition text-slate-400 hover:text-red-600"
                                >
                                    <Minus size={18} />
                                </button>
                                <span className="w-12 text-center font-bold text-lg">{item.quantity}</span>
                                <button
                                    onClick={() => onUpdateQuantity(item.id, 1)}
                                    className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition text-slate-400 hover:text-red-600"
                                >
                                    <Plus size={18} />
                                </button>
                            </div>

                            <button
                                onClick={() => onRemove(item.id)}
                                className="p-3 text-gray-300 hover:text-red-600 hover:bg-red-50 rounded-full transition"
                                title="Remove Item"
                            >
                                <Trash2 className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50">
                <div className="flex justify-between mb-4 text-xl">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-bold">${total}</span>
                </div>
                <div className="flex justify-between mb-8 pb-8 border-b border-gray-100">
                    <span className="text-gray-500">Delivery</span>
                    <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between mb-10 text-3xl font-bold">
                    <span>Total</span>
                    <span className="text-red-600">${total}</span>
                </div>
                <button onClick={() => navigate('order-details')} className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-red-700 transition shadow-lg active:scale-[0.98]">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;
