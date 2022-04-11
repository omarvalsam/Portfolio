/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import me from "../../assets/images/updatedpic.png";

const Resume = () => {
  return (
    <div className="resume">
      <img src={me} className="logo" alt="Omars logo" />
      <div>
        If you're interested in learning a bit more about my previous employers
        or experience before coding. Feel free to download my resume.
      </div>
      <a
        href="https://docs.google.com/document/d/1W0226Iiam12P6clAGN2ribSU0LTvzJgTgKyhijnw5Qs/edit?usp=sharing"
        className="fa-solid socialmt fa-file-arrow-down"
      />
    </div>
  );
};

export default Resume;
