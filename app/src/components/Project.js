import React from 'react';

export default function Project({ projects }) {
  return (
    <div style={{ marginBottom: "100px" }} className="w-100 d-flex flex-row flex-wrap align-content-stretch justify-content-evenly">
      { projects.map((project) => {
        return (
          <a key={project.id} style={{ height: "100%" }} className='col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-8 col-9 m-3 my-5 text-decoration-none text-secondary' href={project.github}>
            <div className="card shadow-lg p-2 rounded-4">
              <h1 className="text-center" style={{ fontFamily: "Fredoka One" }} >{project.name}</h1>
              <img className="my-2" src={project.url} alt={project.name} /> {/* use pic variable */}
                <p className="text-center lead">{project.technologies}</p> 
              <button className="btn btn-primary" onClick={() => window.location.href = project.githublink}>Github</button>
            </div>
          </a>
        );
      })}
    </div>
  );
}