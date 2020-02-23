import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarBody from './CalendarBody/CalendarBody';

import './Calendar.scss';

const Calendar = ({ month, year, weakDays, monthes }) => (
  <>
    <div className="calendar">
      <h3 className="calendar__title">{monthes[month - 1]}</h3>
      <CalendarHeader weakDays={weakDays} />
      <CalendarBody month={month} year={year} />
    </div>
  </>
);

Calendar.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  weakDays: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  monthes: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default Calendar;
