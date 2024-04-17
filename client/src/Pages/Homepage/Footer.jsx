import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="openTime">
          <h3>Öppettider butik</h3>

          <p>Måndag-fredag: 08-21</p>
          <p>Lördag-söndag: 10-18</p>
        </div>
        <div className="contactDetails">
          <h3>Kontaktuppgifter</h3>
          <p>Telefonnummer: +46 8 154 355 76</p>
          <p>Email: Hakim_livs@gmail.com</p>
        </div>
        <div className="address">
          <h3>Adress</h3>
          <p>Importörvägen 22, 120 44 Årsta</p>
          <p></p>
        </div>
        <p>© 2024 </p>
      </footer>
    </>
  );
};

export default Footer;
