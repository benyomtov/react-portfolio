import React from 'react';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className='header row bg-primary'>
            <h1 className='col-4 text-white display-3'>Ben Yomtov</h1>
            <div className='col-8 links pt-4 pe-5 text-end'>
                <a href="#about"
                onClick={() => handlePageChange('About')}  
                className="h3 text-white align-bottom mx-2 text-decoration-none">About Me</a>
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