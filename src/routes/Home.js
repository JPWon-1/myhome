import React from 'react';
import Profile from '../images/호주3.jpg'
import './Home.css'

const Home = () => {
    return (
        <section>
            <div className="main-container">
                <div className="intro-wrapper">
                    <div className="nav-wrapper">
                        <div className="dots-wrapper">
                            <div id="dot-1" className="browser-dot"></div>
                            <div id="dot-2" className="browser-dot"></div>
                            <div id="dot-3" className="browser-dot"></div>
                        </div>

                    </div>
                    <div className="left-column">
                        <img id="profile_pic" src={Profile} alt="profile" />
                        <h5 id="profile_note1">
                            My life will
                        </h5>

                        <p id="profile-note2">
                            be<br />legendary
                        </p>
                    </div>
                    <div className="right-column">
                        <div id="preview">
                            <div id="corner-tl" className="corner"></div>
                            <div id="corner-tr" className="corner"></div>
                            <h3>What I Do</h3>
                            <p>
                                I was a Civil Engineer.<br />
                                     Now I am learning Computer Programming
                                </p>
                            <div id="corner-br" className="corner"></div>
                            <div id="corner-bl" className="corner"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;