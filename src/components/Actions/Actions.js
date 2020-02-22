import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Actions.scss';

export class Actions extends Component {
    handleChange = (event) => {
      this.props.changeYear(event.target.value);
    }

    handleMonthChange = (event) => {
      this.props.changeMonth(event.target.value);
    }

    render() {
      const { monthes, month, year } = this.props;

      return (
        <div className="action">
          <select value={month} onChange={this.handleMonthChange} className="action__select">
            {monthes.map((month, index) => (
              <option value={index + 1}>{month}</option>
            ))}
          </select>
          <input type="number" value={year} onChange={this.handleChange} className="action__input" />
        </div>

      );
    }
}
