import React from "react";
import hikeImage from "../../assets/images/hikeMe.jpeg";

// import "../../assets/CSS/Style.css";
const AboutMe = () => {
  return (
    <div>
      <article className="image">
        <h2 className="hover-instructions">
          Hover over this picture! <br />
          <i className="arrow down"></i>
        </h2>
        <img
          src={hikeImage}
          className="about-me"
          alt="Wide view of myself on a bridge with a background of sandy area in utah"
        />
        <div className="image___overlay image___overlay--blur">
          <h2 className="image___title">A little bit about me!</h2>
          <div className="image___description">
            Hi there, my name is Omar
            <br />
            I currently am located in the Salt Lake region and plan to move
            north.
            <br />
            Currently im finishing up the coding bootcamp at the UofU.
            <br />
            After finishing the Bootcamp, I'm planning on going back to school
            to get a degree in the tech field.
            <br />
            Currently I have experience with these coding packages:
            <br />
            SQL/Sequelize, Mongoose/MongoDb, React, Express.
            <br />I am however always open to learning more and expanding my
            knowledge!
          </div>
          <h2 className="image___subtitle">random facts about me</h2>
          <div className="image___description">
            Playing video games happens to be one of my favorite side
            activities.
            <br />
            Typically on my days off from school and work, ill be in the kitchen
            cooking a spicy meal.
            <br />
            You can also catch me on a hike or go swimming when it is warm
            outside.
            <br />
            Usually when im not doing any of the above, i'd be drinking either
            coffee or a cocktail!
          </div>
        </div>
      </article>
    </div>
  );
};
export default AboutMe;
