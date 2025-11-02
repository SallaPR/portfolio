// projectsData.js

const projects = [
  {
    id: 6,
    title: "Mobile app",
    description:
      "A map app where users follow routes, track checkpoints, and can add friends.",
    longdescription: (
      <>
        <p>
          This project was created a part of a group assignment where the goal was to
          design and build a mobile application of our choice. Our group developed a
          social map-based app that allows users to follow custom routes, track progress
          and connect with friends.
        </p>
        <p>
          Users sign up using Firebase Authentication and can then browse and select
          routes to complete. Each route has checkpoints on a map, which turn from red to
          green once reached. When a route is fully completed, the app displays a
          notification and a confetti animation. Routes are created in a separate admin
          tool and stored in Firebase Firestore, from where the main app retrieves them.
        </p>
        <p>
          With the app users can also add friends, customize their profile and change
          their profile picture, and view current weather conditions based on their
          location on the app's front page.
        </p>
        <p>Tools and technologies:</p>
        <ul>
          <li>
            <b>Version Control & Project Management:</b> Github and Scrum methology
          </li>
          <li>
            <b>Backend/Auth:</b> Firebase (Firestore & Authentication)
          </li>
          <li>
            <b>Development:</b> React Native, Expo
          </li>
          <li>
            <b>Libraries:</b>
          </li>
          <ul>
            <li>react-native-maps</li>
            <li>expo-location</li>
            <li>geolib</li>
            <li>expo-camera</li>
            <li>expo-file-system</li>
          </ul>
        </ul>
        <p>My responsibilities</p>
        <ul>
          <li>
            <b>Firebase Setup:</b> I configured and initialized Firebase for the app,
            including Firestore and Authentication.
          </li>
          <li>
            <b>User authentication:</b> Developed login and registration functionalities
            using Firebase Authentication.
          </li>
          <li>
            <b>Friend system & Settings:</b> Implemented the ability to add friends,
            manage user settings and delete account.
          </li>
          <li>
            <b>UI Design:</b> Designed the majority of the app's interface and user
            experience in Figma.
          </li>
        </ul>
      </>
    ),
    media: {
      video: ["https://www.youtube.com/embed/B9Pj0qd7KdE?si=-XgYC-NRMPH-gEbU"],
      images: [
        `${process.env.PUBLIC_URL}/images/karttasovellus2.png`,
        `${process.env.PUBLIC_URL}/images/karttasovellus3.png`,
        `${process.env.PUBLIC_URL}/images/karttasovellus4.png`,
        `${process.env.PUBLIC_URL}/images/karttasovellus5.png`,
        `${process.env.PUBLIC_URL}/images/karttasovellus6.png`,
        `${process.env.PUBLIC_URL}/images/karttasovellus7.png`,
        `${process.env.PUBLIC_URL}/images/karttasovellus8.png`,
        `${process.env.PUBLIC_URL}/images/karttasovellus9.png`,
        `${process.env.PUBLIC_URL}/images/karttasovellus10.png`,
        `${process.env.PUBLIC_URL}/images/karttasovellus11.png`,
        `${process.env.PUBLIC_URL}/images/karttasovellus12.png`,
        `${process.env.PUBLIC_URL}/images/karttasovellus13.png`,
      ],
    },
    image: `${process.env.PUBLIC_URL}/images/karttasovellus.png`,
    github: "https://github.com/Mobiilikehitysprojekti-Ryhma2/mobiilikehitysprojekti",
    skills: ["JavaScript", "HTML", "CSS", "React Native", "Expo", "Firebase"],
  },
  {
    id: 5,
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
      custom: [`${process.env.PUBLIC_URL}/images/movieapp.png`],
      images: [
        `${process.env.PUBLIC_URL}/images/movieapp2.png`,
        `${process.env.PUBLIC_URL}/images/movieapp3.png`,
        `${process.env.PUBLIC_URL}/images/movieapp4.png`,
        `${process.env.PUBLIC_URL}/images/movieapp5.png`,
        `${process.env.PUBLIC_URL}/images/movieapp6.png`,
        `${process.env.PUBLIC_URL}/images/movieapp7.png`,
        `${process.env.PUBLIC_URL}/images/movieapp8.png`,
        `${process.env.PUBLIC_URL}/images/movieapp9.png`,
      ],
    },
    image: `${process.env.PUBLIC_URL}/images/movieapp.png`,
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
    id: 4,
    title: "Website Project",
    description:
      "This is a final project for web application course. Website shows the skills I learned during the course about HTML, CSS and JavaScript. ",
    longdescription: (
      <>
        <p>
          My final project for the web application course was a website that demonstrated
          my skills in JavaScript, HTML and CSS. The goal was to build a functional and
          interactive web application and learn more about core web technologies.
        </p>
        <p>
          In developing the site, I focused on creating a clean and effective user
          experience. One of the most valuable parts of the project was working with APIs
          to fetch real-time weather data. This involved handling asynchronous operations,
          which helped me better understand JavaScript's event-driven nature. During the
          process, I ran into challenges that pushed me to debug efficiently, refine my
          problem-solving skills and improve the overall user experience.
        </p>
        <p>
          By the time I finished the project, I had built my first web application and
          gained valuable experience in making it more functional and user-friendly. The
          whole process really strengthened my skills in working with real-world data,
          fixing issues, and thinking how users interact with a website.
        </p>
      </>
    ),
    media: {
      images: [
        `${process.env.PUBLIC_URL}/images/websivusto2.png`,
        `${process.env.PUBLIC_URL}/images/websivusto4.png`,
        `${process.env.PUBLIC_URL}/images/websivusto3.png`,
        `${process.env.PUBLIC_URL}/images/websivusto.png`,
      ],
    },
    image: `${process.env.PUBLIC_URL}/images/websivusto3.png`,
    link: "https://sallapr.github.io/websivusto/index.html",
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
          This was a project where the goal was to build a database and an application,
          where the user can view and edit cars in the database. Database is done with
          MySQL and the code is written with C++ and JavaScript.{" "}
        </p>
        <p>
          This project really improved my skills in JavaScript and C++ and I learned a lot
          about REST APIs along the way. It gave me a lot of experience with
          problem-solving and debugging, and I got better understanding of how different
          technologies work together.
        </p>
        <p>
          Below is a poster explaining more about the project and a screenshot of the UI.
        </p>
      </>
    ),
    media: {
      custom: [
        `${process.env.PUBLIC_URL}/images/car_app.png`,
        `${process.env.PUBLIC_URL}/images/car_app4.png`,
      ],
    },
    image: `${process.env.PUBLIC_URL}/images/car_app4.png`,
    github: "https://github.com/SallaPR/rastitehtava.git",
    skills: ["Qt", "MySQL", "Node.js", "C++", "JavaScript"],
  },
  {
    id: 2,
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
          In this game a random button lights up and the player needs to press the correct
          button to get points. Arduino manages the buttons, LED's and a display that
          shows the player's score. We also had an extra feature there, that made the
          game's speed increase more slowly, if the player presses the previous button
          with delay, when the next one lights up. I was responsible for developing the
          display component.
        </p>
        <p>
          This was my first programming project and it was a good learning experience.
          Unlike my other projects that were purely software-based, this one included both
          hardware and software components.
        </p>
      </>
    ),
    media: {
      custom: [`${process.env.PUBLIC_URL}/images/spede.JPG`],
      video: ["https://www.youtube.com/embed/rofxYfzP5AA"],
    },
    image: `${process.env.PUBLIC_URL}/images/spede.JPG`,
    skills: ["Arduino", "C++"],
  },
  {
    id: 1,
    title: "Portfolio",
    description: "This page. I made this website to show the projects I've made before.",
    media: {
      custom: [`${process.env.PUBLIC_URL}/images/portfolio.png`],
    },
    image: `${process.env.PUBLIC_URL}/images/portfolio.png`,
    github: "https://github.com/SallaPR/portfolio",
    skills: ["JavaScript", "HTML", "CSS", "React"],
  },
];

export default projects;
