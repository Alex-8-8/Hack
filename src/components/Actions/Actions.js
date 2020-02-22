import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Actions.scss';

export class Actions extends Component {
  static propTypes = {
    changeMonth: PropTypes.func.isRequired,
    changeYear: PropTypes.func.isRequired,
  }

    state = {
      inputedMonth: new Date().getMonth(),
      inputedYear: new Date().getFullYear(),
    }

    handleChange = (event) => {
      this.setState({
        inputedYear: Number(event.target.value),
      });
    }

    handleEnter = (event) => {
      const { inputedYear } = this.state;

      if (event.key === 'Enter') {
        this.props.changeYear(inputedYear);
      }
    }

    handleMonthChange = (e) => {
      const { inputedMonth } = this.state;

      this.setState({
        inputedMonth: Number(e.target.value),
      });
      this.props.changeMonth(inputedMonth);
    }

    handlePrev = () => {
      const { inputedMonth } = this.state;

      if (inputedMonth === 0) {
        this.setState(prevState => ({
          inputedMonth: 12,
          inputedYear: prevState.inputedYear - 1,
        }));
        this.props.changeMonth(inputedMonth);
      } else {
        this.setState(prevState => ({
          inputedMonth: prevState.inputedMonth - 1,
        }));
        this.props.changeMonth(inputedMonth);
      }
    }

    handleNext = () => {
      const { inputedMonth } = this.state;

      console.log(inputedMonth);

      if (inputedMonth > 11) {
        this.setState(prevState => ({
          inputedMonth: 1,
          inputedYear: prevState.inputedYear + 1,
        }));
        this.props.changeMonth(inputedMonth);
      } else {
        this.setState(prevState => ({
          inputedMonth: prevState.inputedMonth + 1,
        }));
        this.props.changeMonth(inputedMonth);
      }
    }

    render() {
      const { inputedYear } = this.state;
      const { monthes, month } = this.props;

      console.log(this.state.inputedMonth);

      return (
        <div className="action">
          <select value={month} onChange={this.handleMonthChange} className="action__select">
            {monthes.map((month, index) => (
              <option value={index + 1}>{month}</option>
            ))}
          </select>
          <input type="number" value={inputedYear} onChange={this.handleChange} onKeyDown={this.handleEnter} className="action__input" />
          <button type="button" onClick={this.handlePrev}>{`<`}</button>
          <button type="button" onClick={this.handleNext}>{`>`}</button>
        </div>

      );
    }
}
