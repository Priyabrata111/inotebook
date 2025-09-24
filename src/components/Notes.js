import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
function Notes() {
  const notesContext = useContext(noteContext);
  const { notes, setNote } = notesContext;
  return (
    <div className="container my-3">
      <h2>Your Notes</h2>
      <div className="row">
        {notes.map((note) => {
          return (
            <div className="col-md-4">
              <NoteItem note={note} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
