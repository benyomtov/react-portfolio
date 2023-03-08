import React from 'react';
const picPath = '/ben.jpg';

export default function About() {
    return (
        <div style={{ height: "65rem" }} className='d-flex flex-column align-items-center m-3'>
            <h1 style= {{ fontWeight: "normal" }} className="display-4 shadow-lg m-3 p-2 rounded-4">About</h1>
            <h1 className="display-6 text-center">I am a full stack web developer from New Jersey,</h1>
            <h1 className="display-6 text-center">and a recent gradate of the Rutgers University Full-Stack Coding Bootcamp.</h1>
            <h1 className="display-6 text-center">I am looking for a full time position as a web developer;</h1>
            <h1 className="display-6 text-center">my proficiencies include HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, MySQL, and more.</h1>
            <h1 className="display-6 text-center">I am a fast learner and I am always looking to improve my skills.</h1>
            <img className="img-thumbnail rounded m-3" src={picPath} style={{ width: "300px", height: "300px" }}  />
        </div>
    );
}