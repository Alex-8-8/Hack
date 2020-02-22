import React from 'react';
import './App.scss';
import Calendar from './components/Calendar/Calendar';
import { Actions } from './components/Actions/Actions';

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

  render() {
    const { month, year } = this.state;

    return (
      <div className="App">
        <Actions monthes={monthes} month={month} changeMonth={this.changeMonth} changeYear={this.changeYear}/>
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
