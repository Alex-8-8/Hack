import React from 'react';
import PropTypes from 'prop-types';
import Calendar from '../Calendar/Calendar';
import CalendarHeader from '../Calendar/CalendarHeader/CalendarHeader';

export const Veiw = ({ month, year, weakDays, monthes, selectVeiw }) => {
  if (selectVeiw === 'Day') {
    return (
      <Calendar
        month={month}
        year={year}
        weakDays={weakDays}
        monthes={monthes}
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
    let today = new Date().toDateString().split(' ');

    today = Number(today[today.length - 2]);

    // let dayOfWeek = new Date(year, month, today).getDay();
    const dayOfWeek = new Date().getDay();
    const startWeek = today - (dayOfWeek - 1);
    const needWeek = Array.from(
      { length: 7 }, (item, index) => index,
    ).map(day => day + startWeek);

    return (
      <div className="calendar">
        <CalendarHeader weakDays={weakDays} />
        {needWeek.map(day => (
          <div key={day} className="calendar__cell">
            {day}
          </div>
        ))}
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
