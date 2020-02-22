import React from 'react';
import './CalendarHeader.scss';

import PropTypes from 'prop-types';

const CalendarHeader = ({ weakDays }) => (
  <div className="calendar__head">
    {weakDays
      .map(day => <div key={day} className="calendar__cell">{day}</div>)}
  </div>
);

CalendarHeader.propTypes = {
  weakDays: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default CalendarHeader;
