import React from 'react';
import './App.scss';
import Calendar from './components/Calendar/Calendar';

const weakDays = ['mon', 'tue', 'wed', 'thir', 'fri', 'sat', 'sun'];
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
        <Calendar
          month={month}
          year={year}
          weakDays={weakDays}
          monthes={monthes}
        />
      </div>

    );
  }
}
