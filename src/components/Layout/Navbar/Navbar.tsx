import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => (
  <nav>
    <NavLink to="/" className={classes.navLink}>
      <img
        src="https://github.com/DavidRnR/super-tv-redux/blob/main/src/assets/images/logo.png?raw=true"
        alt="Rext TV Logo"
        width="55px"
      />
      <h1>REXTV</h1>
    </NavLink>

    <NavLink to="contact" className={classes.navLink}>
      Contact
    </NavLink>
  </nav>
);

export default Navbar;
