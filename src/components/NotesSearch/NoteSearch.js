import React from 'react';
import PropTypes from 'prop-types';

const NoteSearch = ({ onChangeFilter }) => (
  <label>
    <input
      type="text"
      d="search-query"
      className="input"
      placeholder="Type search word"
      onChange={onChangeFilter}
    />
  </label>
);

NoteSearch.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
export default NoteSearch;
