import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNote] = useState(notesInitial);

  //get all notes
  const getNotes = async () => {
    // make an API call to access notes
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjMDZlNzI5OTk5NTQ1NDhmYmE2MjUxIn0sImlhdCI6MTc1NzQ0MTY1MH0.wdt3Z6YoUUDxAtV4zWoTpxuHU1RoyItrRFMqYVekkCs",
      },
    });

    const json = await response.json();
    console.log(json.note);
    setNote(json.note);
  };

  //Add Notes
  const addNote = async (title, description, tag) => {
    // make an API call to access notes
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjMDZlNzI5OTk5NTQ1NDhmYmE2MjUxIn0sImlhdCI6MTc1NzQ0MTY1MH0.wdt3Z6YoUUDxAtV4zWoTpxuHU1RoyItrRFMqYVekkCs",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = {
      _id: "1368cd9f3d377389464a608ceb",
      user: "68c06e72999954548fba6251",
      title: title,
      description: description,
      tag: tag,
      __v: 0,
    };
    setNote(notes.concat(note));
  };

  //Delete Notes
  const deleteNote = async (id) => {
    // console.log("delete note has beeen called for id : " + id);
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjMDZlNzI5OTk5NTQ1NDhmYmE2MjUxIn0sImlhdCI6MTc1NzQ0MTY1MH0.wdt3Z6YoUUDxAtV4zWoTpxuHU1RoyItrRFMqYVekkCs",
      },
    });

    const json = await response.json();
    console.log(json.note);
    const note = json.note;

    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNote(newNote);
  };

  //Edit Notes
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjMDZlNzI5OTk5NTQ1NDhmYmE2MjUxIn0sImlhdCI6MTc1NzQ0MTY1MH0.wdt3Z6YoUUDxAtV4zWoTpxuHU1RoyItrRFMqYVekkCs",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const newNotes = JSON.parse(JSON.stringify(notes));

    for (let idx = 0; idx < newNotes.length; idx++) {
      let element = newNotes[idx];
      if (element._id === id) {
        newNotes[idx].title = title;
        newNotes[idx].description = description;
        newNotes[idx].tag = tag;
        break;
      }
    }
    setNote(newNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
