import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CalendarBody.scss';

export default class CalendarBody extends Component {
  handleClick = (e) => {
    this.props.getDay(e.target.id);
  }

  render() {
    const { year, month } = this.props;
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
    const emptyCells = Array.from({ length: [fistDayOfWeek - 1] }, (_, index) => index + 1);

    return (

      <div className="calendar-section">
        {emptyCells.map(
          day => <div key={day} className="calendar__cell">{' '}</div>,
        )}
        {monthdays.map(
          (day, index) => (
            <div
              id={index + 1}
              key={day}
              className="calendar__cell"
              onClick={this.handleClick}
            >
              {day}
            </div>
          ),
        )}
        {endEmptyCells.map(
          day => <div key={day} className="calendar__cell">{' '}</div>,
        )}
      </div>

    );
  }
}
