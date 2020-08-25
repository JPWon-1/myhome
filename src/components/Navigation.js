import React from 'react';
import { Link } from 'react-router-dom';
import '../switcher.scss'
import MyPdf from '../files/resume.pdf';

const Navigation = () => {
    return (
        <>
            <div className="jumbotron text-center">
                <h1>Hi, I'm JP</h1>
                <p>JP's Life </p>
            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
                <Link className="navbar-brand" to="/">JONGPIL WON</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="resume" to={MyPdf} target="_blank" download >Resume</Link>
                        </li>
                    </ul>
                </div>
                {/* <ul id="navigation">
                    <li><Link to="">Contact</Link></li>
                </ul> */}
            </nav>
        </>
    );
};

export default Navigation;