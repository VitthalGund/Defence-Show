import React from "react";
import "../CSS/card.css";

// https://codepen.io/wikyware-net/pen/dyKPRxQ?editors=1100
const Card = ({ title, date }) => {
  return (
    <>
      <div className="cards">
        <div class="note">
          Based on this{" "}
          <a
            href="https://dribbble.com/shots/3127773-Event-Card"
            target="_blank"
          >
            dribbble {title}
          </a>
        </div>
        <article class="card">
          <div class="thumb"></div>
          <div class="infos">
            <h2 class="title">
              new york city {title}
              <span class="flag"></span>
            </h2>
            <h3 class="date">november 2 - 4 {date}</h3>
            <h3 class="seats">seats remaining: 2</h3>
            <p class="txt">
              Join us for our Live Infinity Session in beautiful New York City.
              This is a 3 day intensive workshop where you'll learn how to
              become a better version of...
            </p>
            <h3 class="details">event details</h3>
          </div>
        </article>
      </div>
    </>
  );
};

export default Card;
