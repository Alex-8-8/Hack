import React from 'react';
import './App.scss';
import { Veiw } from './components/View/View';
import NoteList from './components/NoteList/NoteList';
import Calendar from './components/Calendar/Calendar';
import { Actions } from './components/Actions/Actions';
import AddNote from './components/AddNote/AddNote';

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
    selectDay: null,
    notes: [],
    date: today,
    neededDayOfWeek: dayOfWeek,
  }

  getDay = (id) => {
    this.setState({
      selectDay: id,
    });
  }

  addNote = (note) => {
    this.setState(prevState => ({
      notes: [...prevState.notes, note],
    }));
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
    const { year, month } = this.state;
    const date = event.target.id;
    let currentDate = new Date(
      year, month - 1, +date,
    ).getDay();

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
    const {
      month,
      year,
      selectVeiw,
      selectDay,
      notes,
      date,
      neededDayOfWeek,
    } = this.state;

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
            getDay={this.getDay}
            selectDay={selectDay}
            onChange={this.changeDate}
          />
          <button
            className="button-reset"
            type="button"
            onClick={this.resetToCurrentDate}
          >
            Current Month
          </button>
          <NoteList notes={notes} />
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

        {selectDay && (
          <AddNote
            selectDay={selectDay}
            month={monthes[month - 1]}
            year={year}
            onAddNote={this.addNote}
          />
        )}
      </div>
    );
  }
}
