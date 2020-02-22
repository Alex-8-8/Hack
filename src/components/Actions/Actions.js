import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Actions.scss';

export class Actions extends Component {
    static propTypes = {
      changeYear: PropTypes.func.isRequired,
      changeMonth: PropTypes.func.isRequired,
      month: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
      monthes: PropTypes.arrayOf(
        PropTypes.string.isRequired,
      ).isRequired,
    }

    handleChange = (event) => {
      this.props.changeYear(Number(event.target.value));
    }

    handleMonthChange = (event) => {
      this.props.changeMonth(Number(event.target.value));
    }

    handlePrev = () => {
      const { month, year } = this.props;

      if (month === 1) {
        this.props.changeYear(year - 1);
        this.props.changeMonth(12);
      } else {
        this.props.changeMonth(month - 1);
      }
    }

      handleNext = () => {
        const { month, year } = this.props;

        if (month === 12) {
          this.props.changeYear(year + 1);
          this.props.changeMonth(1);
        } else {
          this.props.changeMonth(month + 1);
        }
      }

      render() {
        const { monthes, month, year } = this.props;

        return (
          <div className="action">
            <select
              value={month}
              onChange={this.handleMonthChange}
              className="action__select"
            >
              {monthes.map((mon, index) => (
                <option value={index + 1} key={mon}>{mon}</option>
              ))}
            </select>
            <input
              type="number"
              value={year}
              onChange={this.handleChange}
              className="action__input"
            />
            <button
              type="button"
              onClick={this.handlePrev}
              className="action__button"
            >
              {`<`}
            </button>
            <button
              type="button"
              onClick={this.handleNext}
              className="action__button"
            >
              {`>`}
            </button>
          </div>

        );
      }
}
