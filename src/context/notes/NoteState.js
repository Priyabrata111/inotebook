import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "168c1c086a4072d962742012b",
      user: "68c06e72999954548fba6251",
      title: "possible rropr",
      description: "This is possible error",
      tag: "hue1",
      time: "2025-09-10T18:16:38.533Z",
      __v: 0,
    },
    {
      _id: "268cd9f3d377389464a608ceb",
      user: "68c06e72999954548fba6251",
      title: "Name",
      description: "My Name is ********",
      tag: "bck",
      time: "2025-09-19T18:21:49.463Z",
      __v: 0,
    },
    ,
    {
      _id: "368cd9f3d377389464a608ceb",
      user: "68c06e72999954548fba6251",
      title: "Name",
      description: "My Name is ********",
      tag: "bck",
      time: "2025-09-19T18:21:49.463Z",
      __v: 0,
    },
    ,
    {
      _id: "468cd9f3d377389464a608ceb",
      user: "68c06e72999954548fba6251",
      title: "Name",
      description: "My Name is ********",
      tag: "bck",
      time: "2025-09-19T18:21:49.463Z",
      __v: 0,
    },
    ,
    {
      _id: "568cd9f3d377389464a608ceb",
      user: "68c06e72999954548fba6251",
      title: "Name",
      description: "My Name is ********",
      tag: "bck",
      time: "2025-09-19T18:21:49.463Z",
      __v: 0,
    },
    ,
    {
      _id: "668cd9f3d377389464a608ceb",
      user: "68c06e72999954548fba6251",
      title: "Name",
      description: "My Name is ********",
      tag: "bck",
      time: "2025-09-19T18:21:49.463Z",
      __v: 0,
    },
    ,
    {
      _id: "768cd9f3d377389464a608ceb",
      user: "68c06e72999954548fba6251",
      title: "Name",
      description: "My Name is ********",
      tag: "bck",
      time: "2025-09-19T18:21:49.463Z",
      __v: 0,
    },
    ,
    {
      _id: "868cd9f3d377389464a608ceb",
      user: "68c06e72999954548fba6251",
      title: "Name",
      description: "My Name is ********",
      tag: "bck",
      time: "2025-09-19T18:21:49.463Z",
      __v: 0,
    },
    ,
    {
      _id: "968cd9f3d377389464a608ceb",
      user: "68c06e72999954548fba6251",
      title: "Name",
      description: "My Name is ********",
      tag: "bck",
      time: "2025-09-19T18:21:49.463Z",
      __v: 0,
    },
    ,
    {
      _id: "1068cd9f3d377389464a608ceb",
      user: "68c06e72999954548fba6251",
      title: "Name",
      description: "My Name is ********",
      tag: "bck",
      time: "2025-09-19T18:21:49.463Z",
      __v: 0,
    },
    ,
    {
      _id: "1168cd9f3d377389464a608ceb",
      user: "68c06e72999954548fba6251",
      title: "Name",
      description: "My Name is ********",
      tag: "bck",
      time: "2025-09-19T18:21:49.463Z",
      __v: 0,
    },
    ,
    {
      _id: "1268cd9f3d377389464a608ceb",
      user: "68c06e72999954548fba6251",
      title: "Name",
      description: "My Name is ********",
      tag: "bck",
      time: "2025-09-19T18:21:49.463Z",
      __v: 0,
    },
  ];
  const [notes, setNote] = useState(notesInitial);

  //Add Notes
  const addNote = (title, description, tag) => {
    // make an API call to access notes
    console.log("adding notes");
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
  const deleteNote = (id) => {
    // console.log("delete note has beeen called for id : " + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNote(newNote);
  };

  //Edit Notes
  const editNote = (id, title, description, tag) => {
    for (let idx = 0; idx < notes.length; idx++) {
      let element = notes[idx];
      if (element._id === id) {
        if (title.length > 0) element.title = title;
        if (description.length > 0) element.description = description;
        if (tag.length > 0) element.tag = tag;
      }
    }
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
