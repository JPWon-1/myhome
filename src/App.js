import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import './switcher.scss'
import { Route, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Bitcamp from './routes/Projects/Bitcamp.js'
import Movie from './routes/Projects/Movie.js'
import Todo from './routes/Projects/Todo.js'

function App() {
  //state
  const [colorTheme, setColorTheme] = useState('theme-white');
  //effect
  useEffect(() => {
    //check for selected theme /// localstorage value
    const currentThemeColor = localStorage.getItem('theme-color');
    //if found set selected theme value in state
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);
  //set theme
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme)
  }
  const changeTheme = (event) => {
    const themeButton = document.getElementById('theme-options-wrapper')
    if (themeButton.style.display === 'none' || themeButton.style.display === '') {
      themeButton.style.display = 'flex'
    } else {
      themeButton.style.display = 'none'
    }
  }

  return (
    <BrowserRouter>
      <div className={`App ${colorTheme}`}>
        <Navigation />

        <div className='content-box'>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects}/>
          <Route path="/projects/bitcamp" component={Bitcamp}/>
          <Route path="/projects/movie" component={Movie}/>
          <Route path="/projects/todo" component={Todo}/>
        </div>

        <div id="changeTheme" className="changeTheme" >
          <button onClick={() => changeTheme()}>
            Theme Change
          <div id="theme-options-wrapper">
              <div id="theme-white"
                onClick={() => handleClick('theme-white')}
                className={`theme-dot ${colorTheme === 'theme-white' ? 'active' : ''}`}
              />
              <div id="theme-blue"
                onClick={() => handleClick('theme-blue')}
                className={`theme-dot ${colorTheme === 'theme-blue' ? 'active' : ''}`}
              />
              <div id="theme-orange"
                onClick={() => handleClick('theme-orange')}
                className={`theme-dot ${colorTheme === 'theme-orange' ? 'active' : ''}`}
              />
              <div id="theme-green"
                onClick={() => handleClick('theme-green')}
                className={`theme-dot ${colorTheme === 'theme-green' ? 'active' : ''}`}
              />
              <div id="theme-purple"
                onClick={() => handleClick('theme-purple')}
                className={`theme-dot ${colorTheme === 'theme-purple' ? 'active' : ''}`}
              />
              <div id="theme-black"
                onClick={() => handleClick('theme-black')}
                className={`theme-dot ${colorTheme === 'theme-black' ? 'active' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
