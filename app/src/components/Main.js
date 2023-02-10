import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Portfolio from './Portfolio';

export default function Main(){

    const [currentPage, setCurrentPage] = useState('Contact');

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Contact />;   
    }

    const handlePageChange = (page) => setCurrentPage(page);

 
    return (
        <div className="container-fluid d-flex flex-column">     
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer /> 
        </div>

        
    )
}