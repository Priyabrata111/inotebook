import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

function About() {
  const a = useContext(noteContext);

  useEffect(() => {
    a.update();
  }, [a]);

  return (
    <div>
      This is about section for {a.state.name} who is in {a.state.Organization}
    </div>
  );
}

export default About;
