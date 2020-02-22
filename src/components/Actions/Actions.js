import React, { Component } from 'react';
import './Actions.scss';

export class Actions extends Component {
    handleChange = (event) => {
        this.props.changeYear(event.target.value);
    }

    handleMonthChange = (event) => {
        this.props.changeMonth(event.target.value);
    }

    handlePrev = () => {
        const {month, year} = this.props;

        if (month === 1) {
            this.props.changeYear(year - 1);
            this.props.changeMonth(12);
        } else {
            this.props.changeMonth(month - 1);
        }
      }


      handleNext = () => {
        const {month, year} = this.props;

        if (month === 12) {
            this.props.changeYear(year + 1);
            this.props.changeMonth(1);
        } else {
            this.props.changeMonth(month + 1);
        }
      }

    render() {
        const { monthes, month, year } = this.props;

        return(
            <div className="action">
                <select value={month} onChange={this.handleMonthChange} className="action__select">
                    {monthes.map((currentMonth, index) => (
                        <option value={index+1}>{currentMonth}</option>
                    ))}
                </select>
                <button type="button" onClick={this.handlePrev} className="action__button">{`<`}</button>
                <input type='number' value={year} onChange={this.handleChange} className="action__input"/>

                <button type="button" onClick={this.handleNext} className="action__button">{`>`}</button>
            </div>

        );
    }
}
