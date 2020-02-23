import React from 'react';
import PropTypes from 'prop-types';
import './Day.scss';

export const Day = ({wekkDays, }) => {
  const hours = 24;
  const arrOfHours = Array.from({ length: [hours] }, (el, index) => index + 1);

  console.log(arrOfHours);

  return (
    <ul className="day-list">
      {arrOfHours.map(hour => (
        <li key={hour + 1} className="day-list__item">
          <span className="day-list__hour">
            {hour}
            :
            00
          </span>
          <input className="day-list__input"></input>
        </li>
      ))}
    </ul>
  )
}
