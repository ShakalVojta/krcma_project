import React from 'react';
import './openingHours.css';

const OpeningHours = () => {
  return (
    <section className="opening-hours">
      <h2>Otevírací doba</h2>
      <div className="hours-table">
        <div className="day">
          <span>Pondělí</span>
          <span>Zavřeno</span>
        </div>
        <div className="day">
          <span>Úterý</span>
          <span>Zavřeno</span>
        </div>
        <div className="day">
          <span>Středa</span>
          <span>11° - 22°</span>
        </div>
        <div className="day">
          <span>Čtvrtek</span>
          <span>11° - 22°</span>
        </div>
        <div className="day">
          <span>Pátek</span>
          <span>11° - 23°</span>
        </div>
        <div className="day">
          <span>Sobota</span>
          <span>11° - 23°</span>
        </div>
        <div className="day">
          <span>Neděle</span>
          <span>11° - 22°</span>
        </div>
      </div>
      <p className="note">Krmi pro Vás s libostí upravíme denně do 21:15 hodin</p>
    </section>
  );
};

export default OpeningHours;
