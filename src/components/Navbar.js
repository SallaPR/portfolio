import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    navigate("/"); // Navigate to the home page first
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Wait for navigation before scrolling
  };

  return (
    <div className="navbar-container">
      <nav>
        <a id="title" href="/" onClick={() => handleNavigation("")}>
          Salla Paaso-Rantala
        </a>
        <ul>
          <li>
            <button onClick={() => handleNavigation("about")}>About Me</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("contact")}>Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
