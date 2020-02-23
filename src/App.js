import React from 'react';
import './App.scss';
import { Veiw } from './components/View/View';
import NoteList from './components/NoteList/NoteList';
import Calendar from './components/Calendar/Calendar';
import { Actions } from './components/Actions/Actions';
import AddNote from './components/AddNote/AddNote';

const weakDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const monthes = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
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
    selectDay: new Date().getDate(),
    notes: [],
    date: today,
    neededDayOfWeek: dayOfWeek,
  };

  componentDidMount() {
    const persistedNotes = localStorage.getItem('notes');

    if (persistedNotes) {
      const notes = JSON.parse(persistedNotes);

      this.setState({ notes });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes !== this.state.notes) {
      localStorage.setItem('notes', JSON.stringify(this.state.notes));
    }
  }

  getDay = (id) => {
    this.setState({
      selectDay: id,
    });
  };

  addNote = (note) => {
    this.setState(prevState => ({
      notes: [...prevState.notes, note],
    }));
  };

  selected = (event) => {
    const veiw = event.target.value;

    this.setState({
      selectVeiw: veiw,
    });
  };

  changeMonth = (month) => {
    this.setState({
      month,
    });
  };

  changeYear = (year) => {
    this.setState({
      year,
    });
  };

  changeDate = (event) => {
    const { month, year } = this.state;
    const date = Number(event.target.id);
    let currentDate = Number(new Date(year, month - 1, +date).getDay());

    if (currentDate === 0) {
      currentDate = 7;
    }

    this.setState({
      date,
      neededDayOfWeek: currentDate,
    });
  };

  resetToCurrentDate = () => {
    this.setState({
      month: dateNow.getMonth() + 1,
      year: dateNow.getFullYear(),
    });
  };

  deleteNote = (current) => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note !== current),
    }));
  };

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
            selectDay={+selectDay}
            onChange={this.changeDate}
          />
          <button
            className="button-reset"
            type="button"
            onClick={this.resetToCurrentDate}
          >
            Current Month
          </button>
          <NoteList notes={notes} onDelete={this.deleteNote} />
        </div>
        <div className="list-of-months">
          <select onChange={this.selected} className="list-of-months__select">
            {selectBtn.map(select => (
              <option value={select} key={select}>
                {select}
              </option>
            ))}
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
        <AddNote
          selectDay={+selectDay}
          month={monthes[month - 1]}
          year={year}
          onAddNote={this.addNote}
        />
      </div>
    );
  }
}
