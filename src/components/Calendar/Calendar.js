import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarBody from './CalendarBody';

import './Calendar.scss';

const Calendar = ({ month, year, weakDays, monthes }) => (
  <table className="calendar">
    <CalendarHeader weakDays={weakDays} monthes={monthes} />
    <CalendarBody month={month} year={year} />
  </table>
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
