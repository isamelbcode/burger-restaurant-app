import React from "react";
import map from "./map.png";
import wlogo from './whatsappgr.png';
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
      <p>contact us by clicking on whatsApp icon</p>
      <a href="https://wa.me/447376121241">
        <img id = 'hard' src = {wlogo} alt="whatsapp icon" width = '50' height ='50'/>
      </a>
      <br />
      <br />

      <div>
       
         
          <h1>The Menu</h1>
          <br />
          <br />
         
          <img src={menu12} alt={menu12} />
        
     
      </div>
    </section>
  );
};

export { Tagline };
