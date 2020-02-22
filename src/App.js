import React from 'react';
import './App.scss';
import Calendar from './components/Calendar/Calendar';
import { Year } from './components/Year/Year';

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

  render() {
    const { month, year } = this.state;

    return (
      <div className="App">
        <div className="current-month">
          <Calendar
            month={month}
            year={year}
            weakDays={weakDays}
            monthes={monthes}
          />
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
