import React from 'react';

export default function Project({ projects }) {
    return (
        <div className="w-100 d-flex flex-row flex-wrap justify-content-evenly">
            { projects.map((project) => (
                <a className='col-3 m-3 my-5 text-decoration-none text-secondary' href={project.github}>
                    <div className="card shadow-lg p-2 rounded-4">
                        <h1>{project.name}</h1>
                        <img src='https://via.placeholder.com/150x150'></img>
                    </div>
                </a>
            ))}
        </div>
    );
}