import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarBody from './CalendarBody/CalendarBody';

import './Calendar.scss';

const Calendar = ({ month, year, weakDays, getDay, selectDay, monthes, onChange }) => (
  <div className="calendar">
    <CalendarHeader weakDays={weakDays} />
    <CalendarBody
      month={month}
      year={year}
      getDay={getDay}
      selectDay={selectDay}
      onChange={onChange}
    />
  </div>
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
  onChange: PropTypes.func.isRequired,
  selectDay: PropTypes.number.isRequired,
  getDay: PropTypes.func.isRequired,
};

export default Calendar;
