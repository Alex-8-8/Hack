import React from 'react';
import PropTypes from 'prop-types';

const CalendarBody = ({ month, year }) => (
  <h1>
    {month}
    {' '}
    {year}
  </h1>
);

CalendarBody.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default CalendarBody;
