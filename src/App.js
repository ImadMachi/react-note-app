import React, { useState } from "react";
import NoteDisplay from "./components/NoteDisplay";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [noteFormFocused, setNoteFormFocused] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState({});
  const [focusedNote, setFocusedNote] = useState({});
  const removeNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    setFocusedNote({});
    setNoteFormFocused(true);
  };
  const editNote = (note) => {
    setNoteToEdit(note);
    setNoteFormFocused(true);
  };

  return (
    <div className="container">
      <div className="notes-list">
        <NotesList
          notes={notes}
          focusedNote={focusedNote}
          setFocusedNote={setFocusedNote}
          setNoteFormFocused={setNoteFormFocused}
        />
      </div>
      <div className="main-display">
        {noteFormFocused ? (
          <NoteForm
            note={noteToEdit}
            notes={notes}
            setNoteFormFocused={setNoteFormFocused}
            setNotes={setNotes}
            noteToEdit={noteToEdit}
            setNoteToEdit={setNoteToEdit}
            setFocusedNote={setFocusedNote}
          />
        ) : notes.length > 0 ? (
          <NoteDisplay
            note={focusedNote}
            setNoteFormFocused={setNoteFormFocused}
            removeNote={removeNote}
            editNote={editNote}
          ></NoteDisplay>
        ) : (
          notes.length === 0 && (
            <p className="empty-list-message">Add some notes</p>
          )
        )}
        <FontAwesomeIcon
          icon={faPlusCircle}
          onClick={() => setNoteFormFocused(true)}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export { NoteApp as default };
