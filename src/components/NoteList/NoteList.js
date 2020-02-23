import React from "react";
import PropTypes from "prop-types";
import "./NoteList.scss";

const NoteList = ({ notes, onDelete }) => (
  <ul className="notes">
    {notes.map(note => (
      <li key={note} className="notes__item">
        {note}
        <button
          type="button"
          className="notes__delete"
          onClick={() => onDelete(note)}
        >
          x
        </button>
      </li>
    ))}
  </ul>
);

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default NoteList;
