import React from 'react';

function Resume () {

const pdfPath = '/assets/resume.docx';

return (
    <div className="mt-5 d-flex flex-column align-items-center vh-100" >
        <a style={{ fontFamily: "Fredoka One" }} className='display-4 shadow-lg m-3 p-2 rounded-4 text-decoration-none text-center' href={pdfPath} download>Click this Link to download my resume!</a>
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