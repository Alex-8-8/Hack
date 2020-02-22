import React from 'react';
import './CalendarHeader.scss';

import PropTypes from 'prop-types';

const CalendarHeader = ({ weakDays }) => (

  <thead className="calendar__head">
    <tr>
      {weakDays.map(day => <th>{day}</th>)}
    </tr>
  </thead>
);

CalendarHeader.propTypes = {
  weakDays: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default CalendarHeader;
