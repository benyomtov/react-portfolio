import React from 'react';
import pdf from '../assets/resume.pdf';

function Resume () {

return (
    <div style={{ height: "45rem" }} className="mt-5 d-flex flex-column align-items-center" >
        <a style={{ fontFamily: "Fredoka One" }} 
        className='display-4 shadow-lg m-3 p-2 rounded-4 text-decoration-none text-center' 
        href={pdf} download>Click this Link to download my resume!</a>
        <h2 className='display-4 text-center'>Technologies:</h2>
        <ul  className='h1 text-center list-unstyled'>
            <li>React</li>
            <li>MongoDB</li>
            <li>Apollo/graphQL</li>
            <li>node.JS</li>
            <li>Express.js</li>
            <li>mySQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </div>
)
}

export default Resume;