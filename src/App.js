import React from 'react';
import './App.scss';
import Calendar from './components/Calendar/Calendar';
import { Year } from './components/Year/Year';
import { Actions } from './components/Actions/Actions';

const weakDays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const monthes = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const dateNow = new Date();

export default class App extends React.Component {
  state = {
    month: dateNow.getMonth() + 1,
    year: dateNow.getFullYear(),
  }

  changeMonth = (month) => {
    this.setState({
      month,
    })
  }

  changeYear = (year) => {
    this.setState({
      year,
    })
  }

  resetToCurrentDate = () => {
    this.setState({
      month: dateNow.getMonth() + 1,
      year: dateNow.getFullYear(),
    })
  }

  render() {
    const { month, year } = this.state;

    return (
      <div className="App">
        <div className="current-month">
        <Actions monthes={monthes} year={year} month={month} changeMonth={this.changeMonth} changeYear={this.changeYear}/>
          <Calendar
            month={month}
            year={year}
            weakDays={weakDays}
            monthes={monthes}
          />
          <button
          className="button-reset"
          type="button"
          onClick={this.resetToCurrentDate}
        >
          Current Month
        </button>
        </div>
        <div className="list-of-months">
          <Year
            monthes={monthes}
            year={year}
            weekDays={weakDays}
          />
        </div>



      </div>

    );
  }
}
