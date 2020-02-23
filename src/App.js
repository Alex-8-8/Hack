import React from 'react';
import './App.scss';
import { Veiw } from './components/View/View';

import Calendar from './components/Calendar/Calendar';
import { Actions } from './components/Actions/Actions';

const weakDays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const monthes = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const selectBtn = ['Day', 'Week', 'Month', 'Year'];

const dateNow = new Date();
let today = new Date().toDateString().split(' ');

today = Number(today[today.length - 2]);

let dayOfWeek = new Date().getDay();

if (dayOfWeek === 0) {
  dayOfWeek = 7;
}

export default class App extends React.Component {
  state = {
    month: dateNow.getMonth() + 1,
    year: dateNow.getFullYear(),
    selectVeiw: 'Day',
    date: today,
    neededDayOfWeek: dayOfWeek,
  }

  selected = (event) => {
    const veiw = event.target.value;

    this.setState({
      selectVeiw: veiw,
    });
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

  changeDate = (event) => {
    const { month, year } = this.state;
    const date = Number(event.target.id);
    let currentDate = Number(new Date(
      year, month - 1, +date,
    ).getDay());

    if (currentDate === 0) {
      currentDate = 7;
    }

    this.setState({
      date,
      neededDayOfWeek: currentDate,
    });
  }

  resetToCurrentDate = () => {
    this.setState({
      month: dateNow.getMonth() + 1,
      year: dateNow.getFullYear(),
    });
  }

  render() {
    const { month, year, selectVeiw, date, neededDayOfWeek } = this.state;

    return (
      <div className="App">
        <div className="current-month">
          <Actions
            monthes={monthes}
            year={year}
            month={month}
            changeMonth={this.changeMonth}
            changeYear={this.changeYear}
          />
          <Calendar
            month={month}
            year={year}
            weakDays={weakDays}
            monthes={monthes}
            onChange={this.changeDate}
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
          <select onChange={this.selected} className="list-of-months__select">
            {selectBtn.map(
              select => <option value={select} key={select}>{select}</option>,
            )}
          </select>
          <Veiw
            month={month}
            year={year}
            weakDays={weakDays}
            monthes={monthes}
            selectVeiw={selectVeiw}
            date={date}
            neededDayOfWeek={neededDayOfWeek}
          />
        </div>
      </div>

    );
  }
}
