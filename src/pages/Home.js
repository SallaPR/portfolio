import Projects from "../components/Projects";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section id="about">
        <p>
          I'm a third-year ICT Engineering student in Oulu University of Applied Sciences.
          I enjoy working on both front-end and back-end technologies, trying out new
          frameworks, and learning how different technologies interact.
        </p>
        <p>
          Technologies I've worked with through university projects, personal apps and
          coursework. Currently building more experience and expanding my full-stack
          skills.
        </p>

        <div className="skills">
          <div className="skill">
            <i className="devicon-cplusplus-plain skill-icon" />
            <span className="skill-text">C++</span>
          </div>
          <div className="skill">
            <i className="devicon-javascript-plain skill-icon" />
            <span className="skill-text">Javascript</span>
          </div>
          <div className="skill">
            <i className="devicon-java-plain skill-icon" />
            <span className="skill-text">Java</span>
          </div>
          <div className="skill">
            <i className="devicon-html5-plain skill-icon" />
            <span className="skill-text">HTML</span>
          </div>
          <div className="skill">
            <i className="devicon-css3-plain skill-icon" />
            <span className="skill-text">CSS</span>
          </div>
          <div className="skill">
            <i className="devicon-react-plain skill-icon" />
            <span className="skill-text">React</span>
          </div>
          <div className="skill">
            <i className="devicon-reactnative-original skill-icon" />
            <span className="skill-text">React Native</span>
          </div>
          <div className="skill">
            <i className="devicon-kotlin-plain skill-icon" />
            <span className="skill-text">Kotlin</span>
          </div>
          <div className="skill">
            <i className="devicon-nodejs-plain skill-icon" />
            <span className="skill-text">Node.js</span>
          </div>
          <div className="skill">
            <i className="devicon-expo-plain skill-icon" />
            <span className="skill-text">Expo</span>
          </div>
          <div className="skill">
            <i className="devicon-postgresql-plain skill-icon" />
            <span className="skill-text">PostgreSQL</span>
          </div>
          <div className="skill">
            <i className="devicon-mysql-original skill-icon" />
            <span className="skill-text">MySQL</span>
          </div>
          <div className="skill">
            <i className="devicon-firebase-plain skill-icon" />
            <span className="skill-text">Firebase</span>
          </div>
          <div className="skill">
            <i className="devicon-vscode-plain skill-icon" />
            <span className="skill-text">Visual Studio Code</span>
          </div>
        </div>
      </section>

      <Projects />

      <section id="contact"></section>
    </>
  );
};

export default Home;
