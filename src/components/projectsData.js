// projectsData.js

const projects = [
  {
    id: 1,
    title: "Movie Website",
    description:
      "A group project, where the goal was to make a website for movie enthusiasts",
    longdescription: (
      <>
        <p>
          This was a group project developed with three other students. The website allows
          users to search for movies and view cinema showtimes. Additionally, users can
          create accounts, form groups, and connect with others by sharing movies within
          these groups. They can also leave reviews and add movies to their favorites.
        </p>
        <p>We used these technologies to build the application:</p>
        <ul>
          <li>
            <b>Version Control & Project Management:</b> We used GitHub for version
            control and the Scrum method with backlog for project management.
          </li>
          <li>
            <b>Backend:</b> The backend was build using Node.js and Express.js to handle
            API requests, authentication and data management.
          </li>
          <li>
            <b>Database:</b> We used PostgreSQL for the database to manage user and group
            data, and movie information.
          </li>
          <li>
            <b>Frontend:</b> The frontend was developed with React.
          </li>
        </ul>
        <p>The data for movies and cinema showtimes was sourced from:</p>
        <ul>
          <li>
            <b>
              <a
                href="https://developer.themoviedb.org/docs/getting-started"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Movie Database
              </a>
            </b>{" "}
            for movie details via API requests.
          </li>
          <li>
            <b>
              <a
                href="https://www.finnkino.fi/xml/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Finnkino
              </a>
            </b>{" "}
            for real time cinema showtimes and events.
          </li>
        </ul>
        <p>My responsibilities included:</p>
        <ul>
          <li>
            <b>Database Setup:</b> I structured and set up the PostgreSQL.
          </li>
          <li>
            <b>Authentication:</b> I developed both the backend and frontend for user
            signup and login functionalities.
          </li>
          <li>
            <b>Profile Page:</b> I created the profile page, allowing users to view their
            favorite movies, reviews and also delete the account.
          </li>
          <li>
            <b>Styling & Responsiveness:</b> I made most of the CSS designing for the
            website and made the website fully responsive so it works on different
            devices.
          </li>
        </ul>
        <p>
          Overall, this project was very good excercise in teamwork and it improved my
          skills in backend development, frontend design, and database management.
        </p>
      </>
    ),
    media: {
      custom: ["/images/movieapp.png"],
      images: [
        "/images/movieapp2.png",
        "/images/movieapp3.png",
        "/images/movieapp4.png",
        "/images/movieapp5.png",
        "/images/movieapp6.png",
        "/images/movieapp7.png",
        "/images/movieapp8.png",
        "/images/movieapp9.png",
      ],
    },
    image: "/images/movieapp.png",
    github: "https://github.com/mdbRyhma2/MovieDatabaseApp.git",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "PostgreSQL",
      "Scrum",
      "Node.js/Express.js",
    ],
  },
  {
    id: 2,
    title: "Website Project",
    description:
      "This is a final project for web application course. Website shows the skills i learned during the course about HTML, CSS and JavaScript. ",
    longdescription: (
      <>
        <p>
          This was my final project for the web application course. The website shows my
          skills in JavaScript, HTML, and CSS. The website was simple, but as my
          first-ever creation, it was a valuable learning experience. I gained a deeper
          understanding of asynchronous operations, and working with APIs to fetch
          real-time weather data taught me a lot. Overall the project helped me refine my
          problem-solving skills, debug errors efficiently and improve the overall user
          experience.{" "}
        </p>
      </>
    ),
    media: {
      images: [
        "/images/websivusto2.png",
        "/images/websivusto4.png",
        "/images/websivusto3.png",
        "/images/websivusto.png",
      ],
    },
    image: "/images/websivusto3.png",
    link: "https://sallapr.github.io/websivusto/stuff.html",
    github: "https://github.com/SallaPR/websivusto.git",
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 3,
    title: "Car App",
    description:
      "Project with a database for cars and an application where the users can view and edit the database. ",
    longdescription: (
      <>
        <p>
          This was a small project, where I built a database and and application where a
          user can view and edit cars in the database. I used MySQL for the database and
          the code is written with C++ and JavaScript.{" "}
        </p>
        <p>
          Below is a poster explaining more about the project, and screenshots of the UI
          and code
        </p>
      </>
    ),
    media: {
      custom: ["/images/car_app.png"],
      images: ["/images/car_app4.png", "/images/car_app2.png"],
    },
    image: "/images/car_app4.png",
    github: "https://github.com/SallaPR/rastitehtava.git",
    skills: ["Qt", "MySQL", "Node.js", "C++", "JavaScript"],
  },
  {
    id: 4,
    title: "Speden Spelit - speedgame",
    description:
      "A game we made as a group project, where the player has to press the button that lights up. ",
    longdescription: (
      <>
        <p>
          This is a group project I made with three other students. We created a speed
          game, where the player has to press the button that lights up and the speed
          increases after every press. We used Arduino for this project and programmed the
          game logic in C++. We also 3D printed a case to house the Arduino and game
          components.
        </p>
        <p>
          In this game a random button lights up and the player needs to press the correct button to get points. Arduino manages the buttons, LED's and a display that shows the player's score. We also had an extra feature there, that made the game's speed increase more slowly, if the player presses the previous button with delay, when the next one lights up. I was responsible for developing the display component. 
        </p>
        <p>This was my first programming project and it was a good learning experience. Unlike my other projects that were purely software-based, this one included both hardware and software components.</p>
      </>
    ),
    media: {
      custom: ["/images/spede.JPG"],
      images: [,],
      video: ["https://www.youtube.com/embed/rofxYfzP5AA"],
    },
    image: "/images/spede.JPG",
    skills: ["Arduino", "C++"],
  },
  {
    id: 5,
    title: "Portfolio",
    description:
      "This page. I made this website to show the projects I've made during the last two years.",
    media: {
      custom: ["/images/portfolio.png"],
    },
    image: "/images/portfolio.png",
    github: "https://github.com/SallaPR/portfolio",
    skills: ["JavaScript", "HTML", "CSS", "React"],
  },
];

export default projects;
