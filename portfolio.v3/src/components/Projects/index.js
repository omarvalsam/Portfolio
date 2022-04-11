import React from "react";
import apexImage from "../../assets/images/apexProject.jpeg";
import justTechNewsImage from "../../assets/images/Just-tech-news.jpeg";
import udImage from "../../assets/images/udIT.jpeg";
import readMeImage from "../../assets/images/ReadMe-gen.jpeg";
import bookImage from "../../assets/images/Book-search-engine.png";
import photoImage from "../../assets/images/photoport.png";
import pizzahuntImage from "../../assets/images/pizzahunt.png";
import deepthoughtsImage from "../../assets/images/DeepThoughts.png";

const Projects = () => {
  return (
    <body class="bg-black">
      <section className="container image">
        <div className="row">
          <a
            href="https://github.com/omarvalsam/FirstGroupProject.git"
            className="col-sm-9 col-md-6"
          >
            <img src={apexImage} className="" alt="1st group colaboration" />
            <p className="image___overlay2 image___overlay--blur">
              <div className="project-description">
                This stats generator is the first project that I colaborated on
                with two classmates. The whole idea was to have fun and a bit
                creative at the beggining of our coding cohort.
              </div>
            </p>
          </a>
          <a
            href="https://github.com/omarvalsam/Just-Tech-News"
            className="col-sm-9 col-md-6"
          >
            <img src={justTechNewsImage} alt="Just tech news github project" />
            <p className="image___overlay2 image___overlay--blur">
              <div className="project-description">
                My first Full-stack project using javascript, html, css and SQL.
              </div>
            </p>
          </a>
        </div>
        <div className="row">
          <a
            href="https://github.com/omarvalsam/Module-9-Readme-Gen"
            className="col-sm-9 col-md-6"
          >
            <img src={readMeImage} alt="readme Inquirer project" />
            <p className="image___overlay2 image___overlay--blur">
              <div className="project-description">
                project was made with the intention of assist users with .md
                files using inquirer
              </div>
            </p>
          </a>
          <a
            href="https://github.com/omarvalsam/Food-festival.git"
            className="col-sm-9 col-md-6"
          >
            <img src={udImage} alt="U-develop-it a backend project" />
            <p className="image___overlay2 image___overlay--blur">
              <div className="project-description">
                A back-end functionality project to help out an existing
                front-end. This is a Progressive Web Application, or PWA. by
                using IndexedDB.
              </div>
            </p>
          </a>
        </div>
        <div className="row">
          <a
            href="https://nameless-headland-11909.herokuapp.com"
            className="col-sm-9 col-md-6"
          >
            <img
              src={deepthoughtsImage}
              alt="Deep thoughts social network project"
            />
            <p className="image___overlay2 image___overlay--blur">
              <div className="project-description">
                a simple social network project with the ability for users to
                log in and leave a post, This project was built with MERN and
                GraphQL.
              </div>
            </p>
          </a>
          <a
            href="https://github.com/omarvalsam/pizza-hunt.git"
            className="col-sm-9 col-md-6"
          >
            <img
              src={pizzahuntImage}
              alt="Pizza hunt is a backend project using NOSQL"
            />
            <p className="image___overlay2 image___overlay--blur">
              <div className="project-description">
                an app that uses MongoDb/Mongoose instead of SQL. this project
                was to create the back end for a front end.
              </div>
            </p>
          </a>
        </div>
        <div className="row">
          <a
            href="https://github.com/omarvalsam/photo-port.git"
            className="col-sm-9 col-md-6"
          >
            <img
              src={photoImage}
              alt="a Frontend application made using REACT"
            />
            <p className="image___overlay2 image___overlay--blur">
              <div className="project-description">
                This project was made for a client to show off their skills,
                only the front end was needed and was acomplished with react.
              </div>
            </p>
          </a>
          <a
            href="https://stormy-wave-09202.herokuapp.com/"
            className="col-sm-9 col-md-6"
          >
            <img
              src={bookImage}
              alt="a project where we refractored code from Mongoose to using GRAPHQL Apis"
            />
            <p className="image___overlay2 image___overlay--blur">
              <div className="project-description">
                Book search engine was a refactoring project to switch restful
                apis to GraphQL api's.
              </div>
            </p>
          </a>
        </div>
      </section>
    </body>
  );
};

export default Projects;
