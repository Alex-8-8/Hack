import React from 'react';
import './App.scss';
import { Veiw } from './components/View/View';

const weakDays = ['mon', 'tue', 'wed', 'thir', 'fri', 'sat', 'sun'];
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

  render() {
    const { month, year, selectVeiw } = this.state;

    return (
      <div className="App">
        <select onChange={this.selected}>
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

    );
  }
}
