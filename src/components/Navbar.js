import { useState } from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {

      const [showOverlay, setShowOverlay] = useState(false);

      const handleImageClick = () => {
            setShowOverlay(true);
      };

      const handleCloseOverlay = () => {
            setShowOverlay(false);
      };

      return (
      <header className={classes.header}>
            <div className={classes.container}>
                  <img
                  src='../DNA-Refined.png'
                  alt='Logo'
                  className={classes.logo}
                  onClick={handleImageClick}
                  />
                  {showOverlay && (
                  <div className={classes.overlay} onClick={handleCloseOverlay}>
                  <img
                        src='../DNA-Refined.png'
                        alt='Logo'
                        className={classes.overlayImage}
                  />
                  </div>
                  )}
            </div>

            <div className={classes.elementsNav}>

                  <nav>
                        <ul>
                              <li>
                                    <Link to='/'>Home</Link>
                              </li>
                              <li>
                                    <Link to='/time'>Time</Link>
                              </li>
                              <li>
                                    <Link to='/services'>Services</Link>
                              </li>
                        </ul>
                  </nav>
            </div>
      </header>
      );
}

export default Navbar;
