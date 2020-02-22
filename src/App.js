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
    });
  }

  changeYear = (year) => {
    this.setState({
      year,
    });
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
<<<<<<< HEAD
        <Actions monthes={monthes} month={month} changeMonth={this.changeMonth} changeYear={this.changeYear} />
=======
        <Actions monthes={monthes} year={year} month={month} changeMonth={this.changeMonth} changeYear={this.changeYear}/>
>>>>>>> 0e6b7804c66a6f73511f1fdfc2079b6eb92a7365
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

    );
  }
}
