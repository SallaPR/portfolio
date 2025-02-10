import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="navbar-container">
      <nav>
      <span id="title" onClick={() => handleNavigation("")}>
          Salla Paaso-Rantala
        </span>
        <ul>
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
