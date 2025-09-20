import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
function Notes() {
  const notesContext = useContext(noteContext);
  const { notes, setNote } = notesContext;
  return (
    <div className="container my-3">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return note.title;
      })}
    </div>
  );
}

export default Notes;
