import React from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import Sidebar from './includes/Sidebar';

function MasterLayout({children}) {
    return (
        <>
            <Header/>
            <Sidebar/>
            {children}

            <Footer/>
            
        </>
    );
}

export default MasterLayout;