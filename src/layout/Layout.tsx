import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

import FloatingShapes from '../components/FloatingShapes';

const Layout: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white relative">
            <FloatingShapes />
            <Header />
            <main className="flex-grow pt-16"> {/* pt-16 to account for sticky header */}
                <Outlet />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;
