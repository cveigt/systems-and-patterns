import React from "react";

function CardItem() {
  return (
    <li className="cards__item">
      <a href="#" className="cards__item__link">
        <div className="cards__item__info">
          <h3 className="cards__item__title">This is a Card Title.</h3>
          <p className="cards__item__text">
            Bear with me, Marty, all of your questions will be answered. Roll
            tape, we'll proceed. Excuse me.
          </p>
        </div>
        <figure className="cards__item__pic-wrap">
          <img src="/" alt="Pass as prop later" className="cards__item__img" />
        </figure>
      </a>
    </li>
  );
}

export default CardItem;
