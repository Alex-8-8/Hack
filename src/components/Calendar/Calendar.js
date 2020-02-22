import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

const Calendar = ({ month, year }) => (
  <div className="calendar">
    <CalendarHeader />
    <CalendarBody month={month} year={year} />
  </div>
);

Calendar.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Calendar;
