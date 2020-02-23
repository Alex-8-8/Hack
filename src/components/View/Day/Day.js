import React from 'react';
import PropTypes from 'prop-types';
import './Day.scss';

export const Day = ({ date, neededDayOfWeek, weakDays }) => {
  const hours = 24;
  const arrOfHours = Array.from({ length: [hours] }, (el, index) => index + 1);

  return (
    <>
    <h3>
    {date} {weakDays[neededDayOfWeek-1]}
    </h3>
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
    </>
  )
}
