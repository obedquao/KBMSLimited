
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/logo.png" alt="KBMS Logo" className="logo-img" />
        </div>

        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#aboutus">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
