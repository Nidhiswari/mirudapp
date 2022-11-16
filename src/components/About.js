import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h1>ABOUT RR 1200</h1>
      <p>Limited to just 60 worldwide, the Speed Triple 1200 RR Bond Edition motorcycles are individually numbered. 

Celebrating 60 years of Bond and the partnership between 007™ and Triumph</p>
      <br />
      <p>With clip-on bars and a beautiful cockpit fairing, plus a more engaged riding position, the RR represents a major step up in handling.
      </p>
      <br />
      <p>
      The raucous, characterful sound of the Speed Triple RR 3-cylinder engine is as unique as it is addictive.
      </p>
      <br />

      <h3>Watch some of our videos</h3>
      <br />
      <div className="videos">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FD572ruHZZ0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3TA461KF2Ps"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/n3Y4ODEBacQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DSO4IahvOXk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;