import noteContext from "./noteContext";

const NoteState = (props) => {
  const state = {
    name: "Priyabrata",
    Organization: "KPIT",
  };
  return (
    <noteContext.Provider value={state}>{Props.child}</noteContext.Provider>
  );
};

export default NoteState;
