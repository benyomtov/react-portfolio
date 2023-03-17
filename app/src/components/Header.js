import React from 'react';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div style={{ width: "100%", backgroundColor: "#12294d" }} className='header row m-0'>
            <h1 style={{ fontFamily: "Fredoka One" }} className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 text-white display-1'>Ben Yomtov</h1>
            <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 links pt-4 pe-5 text-end'>
                <a href="#about"
                style={{ fontFamily: "Fredoka One", fontSize: "calc(1.1rem + .5vw)" }}
                onClick={() => handlePageChange('About')}  
                className="h4 text-white align-bottom mx-2 text-decoration-none">About</a>
                <a href="#portfolio" 
                style={{ fontFamily: "Fredoka One", fontSize: "calc(1.1rem + .5vw)" }}
                onClick={() => handlePageChange('Portfolio')}  
                className="h4 text-white mx-2 text-decoration-none">Portfolio</a>
                <a href="#contact" 
                style={{ fontFamily: "Fredoka One", fontSize: "calc(1.1rem + .5vw)" }}
                onClick={() => handlePageChange('Contact')}  
                className="h4 text-white mx-2 text-decoration-none">Contact</a>
                <a href="#resume" 
                style={{ fontFamily: "Fredoka One", fontSize: "calc(1.1rem + .5vw)" }}
                onClick={() => handlePageChange('Resume')}  
                className="h4 text-white mx-2 text-decoration-none">Resume</a>
            </div>
        </div> 
    )
}