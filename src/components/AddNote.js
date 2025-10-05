import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

function AddNote(props) {
  const context = useContext(noteContext);
  const { showAlert } = props;
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();

    addNote(note.title, note.desc, note.tag);
    showAlert("Note Added Successfully", "success");

    setNote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Please Enter Your Note Here</h2>

      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              name="desc"
              onChange={onChange}
              value={note.desc}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              value={note.tag}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
            disabled={
              !note.title ||
              !note.desc ||
              note.title.length < 3 ||
              note.desc.length < 5
            }
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNote;
