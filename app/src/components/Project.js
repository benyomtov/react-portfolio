import React from 'react';

export default function Project({ projects }) {
    return (
        <div className="w-100 d-flex flex-row flex-wrap justify-content-evenly">
            { projects.map((project) => (
                <a href={project.github}>
                    <div className="card col-3 shadow-lg m-3 p-2 rounded-4">
                        <h1>{project.name}</h1>
                    </div>
                </a>
            ))}
        </div>
    );
}