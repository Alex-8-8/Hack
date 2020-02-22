import React from 'react';
import './App.scss';
import { Veiw } from './components/View/View';

import Calendar from './components/Calendar/Calendar';
import { Year } from './components/Year/Year';
import { Actions } from './components/Actions/Actions';

const weakDays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const monthes = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const selectBtn = ['Day', 'Week', 'Month', 'Year'];

const dateNow = new Date();

export default class App extends React.Component {
  state = {
    month: dateNow.getMonth() + 1,
    year: dateNow.getFullYear(),
    selectVeiw: 'Day',
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

  resetToCurrentDate = () => {
    this.setState({
      month: dateNow.getMonth() + 1,
      year: dateNow.getFullYear(),
    });
  }

  render() {
    const { month, year, selectVeiw } = this.state;

    return (
      <div className="App">
      {/* <select onChange={this.selected}>
          {selectBtn.map(
            select => <option value={select} key={select}>{select}</option>,
          )}
        </select> */}

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
          />
        </div>
      </div>

    );
  }
}
