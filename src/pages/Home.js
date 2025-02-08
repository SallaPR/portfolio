import React from "react";
import Projects from "../components/Projects"

const Home = () => {
  return (
    <>
      <section id="about">
        <p>
          I'm a second-year ICT Engineering student in Oulu University of Applied
          Sciences. I enjoy working on both front-end and back-end technologies, trying
          out new frameworks, and learning how different technologies interact.
        </p>
        <h3>Skills</h3>
        <ul>
          <li>
            <b>Programming Languages:</b> C++, JavaScript, Java, Python (basic){" "}
          </li>
          <li>
            <b>Web Development:</b> HTML, CSS, React{" "}
          </li>
          <li>
            <b>Mobile Development (Learning):</b> React Native, Kotlin{" "}
          </li>
          <li>
            <b>Databases:</b> PostgreSQL
          </li>
          <li>
            <b>Other Technologies:</b> Arduino, Qt
          </li>
        </ul>
      </section>

      <Projects />
    </>
  );
};

export default Home;
