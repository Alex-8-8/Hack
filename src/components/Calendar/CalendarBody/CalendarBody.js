import React from 'react';
import PropTypes from 'prop-types';
import './CalendarBody.scss';

const CalendarBody = ({ month, year, onChange }) => {
  const daysNumber = new Date(year, month, 0).getDate();
  const monthdays = Array.from(
    { length: [daysNumber] }, (item, index) => index + 1,
  );
  let fistDayOfWeek = new Date(`${year}-${month}-01`).getDay();

  if (fistDayOfWeek === 0) {
    fistDayOfWeek = 7;
  }

  const fullWeek = Math.floor((daysNumber - fistDayOfWeek - 1) / 7);
  const restDays = daysNumber - fullWeek * 7 - (7 - fistDayOfWeek - 1) - 7;
  const endEmptyCells = Array.from(
    { length: [restDays] }, (item, index) => index + 1,
  );
  const emptyCells = Array.from(
    { length: [fistDayOfWeek - 1] }, (_, index) => index + 1,
  );

  return (
    <div className="calendar-section">
      {emptyCells.map(
        day => <div key={day} className="calendar__cell">{' '}</div>,
      )}
      {monthdays.map(
        (day, index) => (
          <button
            type="button"
            id={index + 1}
            key={day}
            className="calendar__cell"
            onClick={onChange}
          >
            {day}
          </button>
        ),
      )}
      {endEmptyCells.map(
        day => <div key={day} className="calendar__cell">{' '}</div>,
      )}
    </div>
  );
};

CalendarBody.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CalendarBody;
