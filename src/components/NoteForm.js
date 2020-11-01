import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NoteForm = ({
  setNotes,
  setNoteFormFocused,
  notes,
  noteToEdit,
  setNoteToEdit,
  setFocusedNote,
}) => {
  const [title, setTitle] = useState(noteToEdit.title || "");
  const [description, setDescription] = useState(noteToEdit.description || "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      if (noteToEdit.title) {
        const editedNote = { id: noteToEdit.id, title, description };
        setNotes(
          notes.map((note) => {
            if (note.id === noteToEdit.id) return editedNote;
            else return note;
          })
        );
        setNoteToEdit({});
        setFocusedNote(editedNote);
      } else {
        const note = {
          id: uuidv4(),
          title,
          description,
        };
        setNotes([...notes, note]);
        setFocusedNote(note);
      }
      setNoteFormFocused(false);
    } else {
      setError("add a title");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="note-form">
      <h2 className="note-form__header">new note</h2>
      {error && <p className="error-message">{error}</p>}
      <input
        className="note-form__input"
        placeholder="title"
        autoFocus={true}
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError("");
        }}
      />
      <textarea
        className="note-form__textarea"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      >
        {description}
      </textarea>
      <button className="note-form__button">
        {noteToEdit.title ? "Save" : "Add note"}
      </button>
    </form>
  );
};

export { NoteForm as default };
