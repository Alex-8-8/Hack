import React from 'react';
import PropTypes from 'prop-types';
import Calendar from '../Calendar/Calendar';
import CalendarHeader from '../Calendar/CalendarHeader/CalendarHeader';
import { Day } from './Day/Day';
import './View.scss';

export const Veiw = ({ month, year, weakDays, monthes, selectVeiw, date, neededDayOfWeek }) => {
  if (selectVeiw === 'Day') {

    return (
      <Day
        date={date}
        neededDayOfWeek={neededDayOfWeek}
        weakDays={weakDays}
      />
    );
  }

  if (selectVeiw === 'Month') {
    return (
      <Calendar
        month={month}
        year={year}
        weakDays={weakDays}
        monthes={monthes}
      />
    );
  }

  if (selectVeiw === 'Year') {
    return (
      monthes.map((monthElement, i) => (
        <div key={monthElement}>
          <Calendar
            month={i + 1}
            year={year}
            weakDays={weakDays}
            monthes={monthes}
          />
        </div>
      ))
    );
  }

  if (selectVeiw === 'Week') {
    const startWeek = date - (neededDayOfWeek - 1);
    const needWeek = Array.from(
      { length: 7 }, (item, index) => index,
    ).map(day => day + startWeek);

    return (
      <div className="calendar calendar-week">
        <CalendarHeader weakDays={weakDays} />
        <div className="calendar__week">
          {needWeek.map(day => (
            <div key={day} className="calendar__cell">
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return '';
};

Veiw.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  weakDays: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  monthes: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  selectVeiw: PropTypes.string.isRequired,
};
