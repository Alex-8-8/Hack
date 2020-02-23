import React from 'react';
import PropTypes from 'prop-types';

export const SelectView = ({ selectBtn, onChange, select }) => {
console.log(selectBtn);

  return (
    <select onChange={onChange} value={select}>
      {selectBtn.map(
        select => <option value={select} key={select}>{select}</option>,
      )}
    </select>
  );
}

SelectView.propTypes = {
  selectBtn: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  select: PropTypes.func.isRequired,
};
