import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const Notes = ({ notes, removeNote }) => {
  // console.log("notes", notes);
  const li = notes.map((note, index) => (
    <CSSTransition key={note.id} classNames={"note"} timeout={500}>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>
          <strong className="mr-2">{note.title}</strong>
          <small>{note.date}</small>
        </span>
        <button
          type="button"
          className="btn btn-sm btn-outline-danger"
          onClick={() => removeNote(note.id)}
        >
          &times;
        </button>
      </li>
    </CSSTransition>
  ));
  return (
    <TransitionGroup component="ol" className="list-group">
      {li}
    </TransitionGroup>
  );
};
