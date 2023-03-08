import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Portfolio from './Portfolio';
import About from './About';
import Resume from './Resume';

export default function Main(){

    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        } else if (currentPage === 'About') {
            return <About />;
        } else if (currentPage === 'Resume') {
            return <Resume />
        } else 
        return <Contact />;   
    }

    const handlePageChange = (page) => setCurrentPage(page);

 
    return (
        <div className="container-fluid p-0 d-flex flex-column">     
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer /> 
        </div>

        
    )
}