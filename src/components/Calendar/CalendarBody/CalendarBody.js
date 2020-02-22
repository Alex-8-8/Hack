import React from 'react';
import PropTypes from 'prop-types';

import './CalendarBody.scss';

const CalendarBody = ({ month, year }) => {
  const daysNumber = new Date(year, month, 0).getDate();
  const monthdays = Array.from({ length: [daysNumber] }, (item, index) => index + 1);
  let fistDayOfWeek = new Date(`${year}-${month}-01`).getDay();
  if (fistDayOfWeek === 0) {
    fistDayOfWeek = 7;
  }
  const emptyCells = Array.from({ length: [fistDayOfWeek - 1] }, (item, index) => index + 1);
  const fullWeek = Math.floor((daysNumber - fistDayOfWeek - 1) / 7);
  const restDays = 7 - (daysNumber - fullWeek * 7 - (fistDayOfWeek - 1));
  const endEmptyCells = Array.from({ length: [fistDayOfWeek - 1] }, (item, index) => index + 1);

  

  return (
    <>
      {emptyCells.map((day) => <div key={day} className="calendar__cell">{' '}</div>)}
      {monthdays.map((day, index) => <div id={index + 1} key={day} className="calendar__cell">{day}</div>)}
    </>
  );
};

CalendarBody.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default CalendarBody;
