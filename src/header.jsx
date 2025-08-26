import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Body from './body';
import About from './About';
import Contact from './Email';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <header className="header-container">
     
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'dark' ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
        </button>

        <div className="header-text">
          <h1>
            Filani Henry <span>Samuel</span>
          </h1>
          <p>Front-End Developer & Designer Portfolio</p>

          <div className="header-buttons">
            <a href="#Contact">
              <button className="primary-btn">Contact Me</button>
            </a>
           <a href="https://github.com/Henry-Icon" target="_blank" rel="noopener noreferrer">
          <button className="secondary-btn">View Work</button>
            </a>

          </div>
        </div>
      </header>

      {/* Portfolio Sections */}
      <Body />
      <About />
      <Contact />
    </div>
  );
}

export default Header;
