import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "68c1c086a4072d962742012b",
      user: "68c06e72999954548fba6251",
      title: "possible rropr",
      description: "This is possible error",
      tag: "hue1",
      time: "2025-09-10T18:16:38.533Z",
      __v: 0,
    },
    {
      _id: "68cd9f3d377389464a608ceb",
      user: "68c06e72999954548fba6251",
      title: "Name",
      description: "My Name is ********",
      tag: "bck",
      time: "2025-09-19T18:21:49.463Z",
      __v: 0,
    },
  ];
  const [state, setState] = useState(notesInitial);
  const update = () => {
    setTimeout(() => {
      setState({ name: "Priyabrata Mondal", Organization: "Google" });
    }, 1000);
  };
  return (
    <noteContext.Provider value={{ state, setState }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
