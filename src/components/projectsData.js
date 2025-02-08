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
          This was a collaborative group project developed with three other people. The
          website allows users to search for movies and view cinema showtimes.
          Additionally, users can create accounts, form groups, and connect with others by
          sharing movies within these groups. They can also leave reviews and add movies
          to their favorites.
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
    link: "https://example.com",
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
    longdescription: "",
    media: {
      images: [
        "/images/websivusto2.png",
        "/images/websivusto4.png",
        "/images/websivusto3.png",
        "/images/websivusto.png",
      ],
    },
    image: "/images/websivusto3.png",
    link: "https://example.com",
    github: "https://github.com/SallaPR/websivusto.git",
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 3,
    title: "Car App",
    description:
      "Project with a database for cars and an application where the users can view and edit the database.",
    longdescription: "",
    media: {
      custom: ["/images/car_app.png"],
      images: ["/images/car_app4.png", "/images/car_app2.png", "/images/car_app3.png"],
    },
    image: "/images/car_app4.png",
    link: "https://example.com",
    github: "https://github.com/SallaPR/rastitehtava.git",
    skills: ["Qt", "MySQL", "Node.js", "C++"],
  },
  {
    id: 4,
    title: "Speden Spelit - speedgame",
    description:
      "A game we made as a group project, where the player has to press the button that lights up. ",
    longdescription: "",
    media: {
      custom: ["/images/spede.JPG"],
      images: [,],
      video: ["https://www.youtube.com/embed/rofxYfzP5AA"],
    },
    image: "/images/spede.JPG",
    link: "https://example.com",
    skills: ["Arduino", "C++"],
  },
];

export default projects;
