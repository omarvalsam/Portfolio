import React from "react";

const Header = () => {
  return (
    <header>
      <link rel="stylesheet" href="portfolio.v3/public/assets/CSS/Style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />

      <div className="nav-bar">
        <a href="/" className="title-name">
          Omar Valdivia-Samudio
        </a>
        <ul className="header">
          <li>
            <a className="lm nav-item nav-link active links" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="lm nav-item nav-link active links" href="/Projects">
              Projects
            </a>
          </li>
          <li>
            <a className="lm nav-item nav-link active links" href="/Resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
