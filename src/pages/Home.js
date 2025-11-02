import Projects from "../components/Projects"
import "./Home.css";

const Home = () => {
  return (
    <>
      <section id="about">
        <p>
          I'm a third-year ICT Engineering student in Oulu University of Applied
          Sciences. I enjoy working on both front-end and back-end technologies, trying
          out new frameworks, and learning how different technologies interact.
        </p>
        <h3>Skills</h3>
        <ul>
          <li>
            <b>Programming Languages:</b> C++, JavaScript, Java
          </li>
          <li>
            <b>Web Development:</b> HTML, CSS, React{" "}
          </li>
          <li>
            <b>Mobile Development:</b> React Native, Kotlin
          </li>
          <li>
            <b>Databases:</b> PostgreSQL, MySQL, Firebase
          </li>
          <li>
            <b>Other Technologies:</b> Arduino, Qt, Visual Studio Code
          </li>
        </ul>
      </section>

      <Projects />

      <section id="contact"></section>
    </>
  );
};

export default Home;
