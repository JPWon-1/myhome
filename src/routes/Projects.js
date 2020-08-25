import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="col-lg-12">
            <h1>Projects</h1>
            <p>Select any of the projects below for more information about the project and my involvement.</p>
            <div id="project-list" className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <h4><Link to="/projects/bitcamp">Bitcamp</Link></h4>
                    <p>Camping equipment rental site</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <h4><Link to="/projects/movie">Movie-App</Link></h4>
                    <p>Camping equipment rental site</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <h4><Link to="/projects/todo">To-Do-App</Link></h4>
                    <p>Camping equipment rental site</p>
                </div>

            </div>
        </div>
    );
};

export default Projects;