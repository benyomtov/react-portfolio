import React from 'react';

export default function About() {
    return (
        <div className='d-flex flex-column align-items-center'>
            <h1 className="display-4 shadow-lg m-3 p-2 rounded-4">About Me</h1>
            <h1 className="display-6">I am a full stack web developer from New Jersey.</h1>
            <h1 className="display-6">I am currently enrolled in Rutgers Coding Bootcamp.</h1>
            <h1 className="display-6">I am looking for a full time position as a web developer.</h1>
            <h1 className="display-6">I am proficient in HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, MySQL, and more.</h1>
            <h1 className="display-6">I am a fast learner and I am always looking to improve my skills.</h1>
            <img className="img-thumbnail rounded m-3" style={{ width: "300px", height: "300px" }} src="./ben.jpg" />
        </div>
    );
}