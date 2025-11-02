import "./Footer.css"; // Optional for styling

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <h2>Contact me!</h2>

      <section className="footer-social">
        <a href="mailto:salla.pr@hotmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i> Email
        </a>
        <a href="https://github.com/SallaPR" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/salla-paaso-rantala-86820b341/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </section>

      <div className="footer-bottom">
        <p>Made by Salla Paaso-Rantala &copy; 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
