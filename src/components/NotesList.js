import React from "react";

const NotesList = ({
  notes,
  focusedNote,
  setFocusedNote,
  setNoteFormFocused,
}) => {
  let focusedClassName = "";
  return notes.map((note) => {
    if (note.id === focusedNote.id) focusedClassName = "note--focus";
    else focusedClassName = "";
    return (
      <div
        className={`note ${focusedClassName}`}
        tabIndex={0}
        key={note.id}
        onClick={(e) => {
          setFocusedNote(note);
          setNoteFormFocused(false);
        }}
      >
        {note.title}
      </div>
    );
  });
};

export { NotesList as default };
