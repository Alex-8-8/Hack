import React, { Component } from 'react';
import './App.scss';
import Calendar from './components/Calendar/Calendar';

const dateNow = new Date();

export default class App extends Component {
  state = {
    month: dateNow.getMonth(),
    year: dateNow.getFullYear(),
  }

  render() {
    const { month, year } = this.state;

    return (
      <div className="App">
        <Calendar month={month} year={year} />
      </div>

    );
  }
}
