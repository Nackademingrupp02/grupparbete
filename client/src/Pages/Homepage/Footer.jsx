import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="openTime">
          <h3>Öppentider</h3>

          <p>Måndag-Fredag: 08-21</p>
          <p>Lördag-söndag: 10-18</p>
        </div>
        <div className="contactDetails">
          <h3>kontaktuppgifter</h3>
          <p>telefonnummer: +48 154 355 76 </p>
          <p> Email: Hakims_Livs@gmail.com</p>
        </div>
        <div className="address">
          <h3>Adress</h3>
          <p> kommun: Mjölby</p>
          <p>plats: Jerikodalsgatan 3</p>
          <p></p>
        </div>
        <p>© 2024 </p>
      </footer>
    </>
  );
};

export default Footer;
