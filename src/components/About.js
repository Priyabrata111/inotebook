import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

function About() {
  const a = useContext(noteContext);
  const { notes } = a;

  return <div>This is about section for dummy</div>;
}

export default About;
