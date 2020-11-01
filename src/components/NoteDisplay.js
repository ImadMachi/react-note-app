import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const NoteDisplay = ({ removeNote, editNote, note }) => {
  return (
    <div className="note-display">
      <div className="note-display__note">
        <h3>{note.title}</h3>
        {note.description && <p>{note.description}</p>}
      </div>
      <div className="note-display__options">
        <FontAwesomeIcon
          icon={faEdit}
          onClick={() => editNote(note)}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => removeNote(note.id)}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export { NoteDisplay as default };
