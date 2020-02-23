import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarBody from './CalendarBody/CalendarBody';

import './Calendar.scss';

const Calendar = ({ month, year, weakDays, getDay, selectDay }) => (
  <div className="calendar">
    <CalendarHeader weakDays={weakDays} />
    <CalendarBody
      month={month}
      year={year}
      getDay={getDay}
      selectDay={selectDay}
    />
  </div>
);

Calendar.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  weakDays: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  selectDay: PropTypes.number.isRequired,
  getDay: PropTypes.func.isRequired,
};

export default Calendar;
