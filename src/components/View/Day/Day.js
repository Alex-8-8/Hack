import React from 'react';
import PropTypes from 'prop-types';
import './Day.scss';

export const Day = ({ date, neededDayOfWeek, weakDays }) => {
  const hours = 24;
  const arrOfHours = Array.from({ length: [hours] }, (el, index) => index + 1);

  return (
    <>
      <div className="selected-day">
        <div className="selected-day__date">{date}</div>
        <div className="selected-day__day-of-week">
          {weakDays[neededDayOfWeek - 1]}
        </div>
      </div>
      <ul className="day-list">
        {arrOfHours.map(hour => (
          <li key={hour + 1} className="day-list__item">
            <span className="day-list__hour">
              {hour}
            :
            00
            </span>
            <input className="day-list__input" />
          </li>
        ))}
      </ul>
    </>
  );
};

Day.propTypes = {
  weakDays: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  date: PropTypes.number.isRequired,
  neededDayOfWeek: PropTypes.number.isRequired,
};
