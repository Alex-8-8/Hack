import React from 'react';
import PropTypes from 'prop-types';

const NoteList = ({ notes }) => (
  <ul>
    {notes.map(note => (
      <li key={note}>{note}</li>
    ))}
  </ul>
);

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default NoteList;
