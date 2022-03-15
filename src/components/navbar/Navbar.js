import logo from "../images/airbnb-logo.png";
import "./Navbar.style.css";
const Navbar = () => (
  <nav className="navbar">
    <img src={logo} className="nav-logo" alt="airbnb-logo" />
  </nav>
);

export default Navbar;
