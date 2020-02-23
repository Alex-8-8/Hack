import React from 'react';
import PropTypes from 'prop-types';
import './NoteList.scss';

const NoteList = ({ notes }) => (
  <ul className="notes">
    {notes.map(note => (
      <li key={note} className="notes__item">{note}</li>
    ))}
  </ul>
);

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default NoteList;
