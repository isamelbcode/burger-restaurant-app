import React from "react";
import map from "./map.png";
import menu12 from "./menu12.png";

const Tagline = () => {
  return (
    <section id="lock">
      <h2>SERVING MORE THAN JUST KEBABS SINCE 1998</h2>
      <p>Check out our opening hours and location address below.</p>
      <p> First Avenue, Bletchley, Milton Keynes </p>
      <img src={map} alt={"map"} />
      <br />
      <br />
      <p>we open from 17:00 to 21:30 monday to friday</p>
      <p> we open from 12:00 to 18:00 weekends</p>
      <p>you can book on this whatApp number: 07944254176</p>
      <br />
      <br />
      <div>
        <ul
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <h1>The Menu</h1>
          <br />
          <br />
          {/*
          <li>
            <h3>The Grasslands</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam
              quis justo in augue auctor imperdiet.
            </p>
          </li>
          <br />

          <li>
            <h3>Paradise Found</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam
              quis justo in augue auctor imperdiet.
            </p>
          </li>
          <br />

          <li>
            <h3>Smoke On The Water</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam
              quis justo in augue auctor imperdiet.
            </p>
          </li>
          <br />

          <li>
            <h3>Smoke On The Water</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam
              quis justo in augue auctor imperdiet.
            </p>
          </li>
          <br />*/}
          <img src={menu12} alt={menu12} />
        </ul>
      </div>
    </section>
  );
};

export { Tagline };
