import React from 'react';
import Project from './Project';

import projects from './projects';

export default function Portfolio () {
    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="display-4 shadow-lg m-3 p-2 rounded-4">Portfolio</h1>
            <h1 className="display-6">Check out my work below!</h1>
            <Project projects={projects} />
        </div>

    );
}