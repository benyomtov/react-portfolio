import React from 'react';

export default function Project({ projects }) {
    return (
        <div style={{ marginBottom: "100px" }} className="w-100 d-flex flex-row flex-wrap justify-content-evenly">
            { projects.map((project) => (
                <a className='col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-8 col-9 m-3 my-5 text-decoration-none text-secondary' href={project.github}>
                    <div className="card shadow-lg p-2 rounded-4">
                        <h1>{project.name}</h1>
                        <img src='https://via.placeholder.com/150x150'></img>
                        <a href={project.githublink} className="btn btn-primary">Github</a>
                    </div>
                </a>
            ))}
        </div>
    );
}