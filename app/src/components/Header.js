import React from 'react';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className='header row bg-black'>
            <h1 className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 text-white display-3'>Ben Yomtov</h1>
            <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 links pt-4 pe-5 text-end'>
                <a href="#about"
                onClick={() => handlePageChange('About')}  
                className="h3 text-white align-bottom mx-2 text-decoration-none">About</a>
                <a href="#portfolio" 
                onClick={() => handlePageChange('Portfolio')}  
                className="h3 text-white mx-2 text-decoration-none">Portfolio</a>
                <a href="#contact" 
                onClick={() => handlePageChange('Contact')}  
                className="h3 text-white mx-2 text-decoration-none">Contact</a>
                <a href="#resume" 
                onClick={() => handlePageChange('Resume')}  
                className="h3 text-white mx-2 text-decoration-none">Resume</a>
            </div>
        </div> 
    )
}