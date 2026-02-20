import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import StoryPage from './pages/StoryPage';
import ContactPage from './pages/ContactPage';
import OrderDetailsPage from './pages/OrderDetailsPage';

export default function App() {
    const [activePage, setActivePage] = useState('home');
    const [cart, setCart] = useState([]);
    const [orderDetails, setOrderDetails] = useState(null);

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activePage]);

    const addToCart = (item) => {
        setCart(prevCart => {
            const existing = prevCart.find(i => i.id === item.id);
            if (existing) {
                return prevCart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const updateQuantity = (id, delta) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === id) {
                    const newQty = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQty };
                }
                return item;
            });
        });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const completeOrder = () => {
        setCart([]);
        setActivePage('success');
    };

    const cartItemCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    const cartTotalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toFixed(2);

    // Router logic
    const renderContent = () => {
        switch (activePage) {
            case 'home': return <HomePage navigate={setActivePage} />;
            case 'menu': return <MenuPage onAddToCart={addToCart} />;
            case 'story': return <StoryPage />;
            case 'contact': return <ContactPage />;
            case 'cart': return <CartPage cart={cart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} navigate={setActivePage} />;
            case 'order-details': return <OrderDetailsPage initialData={orderDetails} onNext={(details) => { setOrderDetails(details); setActivePage('checkout'); }} navigate={setActivePage} />;
            case 'checkout': return <CheckoutPage cart={cart} orderDetails={orderDetails} onCompleteOrder={completeOrder} navigate={setActivePage} />;
            case 'success': return <SuccessPage navigate={setActivePage} />;
            default: return <HomePage navigate={setActivePage} />;
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen text-slate-900 overflow-x-hidden selection:bg-red-100 selection:text-red-600">
            <Navbar
                activePage={activePage}
                navigate={setActivePage}
                cartCount={cartItemCount}
            />

            <main className="pt-20">
                {renderContent()}
            </main>

            {activePage !== 'success' && <Footer navigate={setActivePage} />}

            {/* Cart Quick Button (Global) */}
            {activePage !== 'cart' && activePage !== 'order-details' && activePage !== 'checkout' && activePage !== 'success' && cart.length > 0 && (
                <div className="fixed bottom-8 right-8 z-[60] animate-bounceIn">
                    <button
                        onClick={() => setActivePage('cart')}
                        className="bg-red-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold hover:scale-105 active:scale-95 transition"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        Check Out (${cartTotalPrice})
                    </button>
                </div>
            )}
        </div>
    );
}
