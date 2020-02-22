import React, { Component } from 'react';
import './Actions.scss';

export class Actions extends Component {
    state = {
        inputedMonth: new Date().getMonth(),
        inputedYear: new Date().getFullYear(),
    }

    handleChange = (event) => {
        const { inputedYear } = this.state;
        this.setState({
            inputedYear: Number(event.target.value),
        })
        this.props.changeYear(inputedYear);
    }

    handleEnter = (event) => {
        const { inputedYear } = this.state;
        if (event.key === 'Enter' ) {
            this.props.changeYear(inputedYear);
        }
    }

    handleMonthChange = (e) => {
        const { inputedMonth } = this.state;
        this.setState({
            inputedMonth: Number(e.target.value),
        })
        this.props.changeMonth(inputedMonth);
    }

    render() {
        const { inputedYear } = this.state;
        const { monthes, month } = this.props;

        return(
            <div className="action">
              <select value={month} onChange={this.handleMonthChange} className="action__select">
              {monthes.map((month, index) => (
                  <option value={index+1}>{month}</option>
                ))}
              </select>
            <input type='number' value={inputedYear} onChange={this.handleChange} onKeyDown={this.handleEnter} className="action__input"/>
            </div>
            
        );
    }
}