import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
function Notes() {
  const notesContext = useContext(noteContext);
  const { notes, setNote, getNotes, editNote } = notesContext;
  const ref = useRef(null);
  const refClose = useRef(null);
  const [enote, seteNote] = useState({
    id: "",
    etitle: "",
    edesc: "",
    etag: "",
  });

  const handleClick = (e) => {
    console.log(enote);
    editNote(enote.id, enote.etitle, enote.edesc, enote.etag);
    refClose.current.click();
  };
  const onChange = (e) => {
    seteNote({ ...enote, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getNotes();
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();

    seteNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edesc: currentNote.description,
      etag: currentNote.tag,
    });
  };
  return (
    <>
      <AddNote />
      <div>
        <button
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          ref={ref}
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container my-3">
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="etitle"
                        name="etitle"
                        aria-describedby="emailHelp"
                        onChange={onChange}
                        value={enote.etitle}
                        minLength={3}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="edesc"
                        name="edesc"
                        onChange={onChange}
                        value={enote.edesc}
                        minLength={5}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Tag
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="etag"
                        name="etag"
                        value={enote.etag}
                        onChange={onChange}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={refClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClick}
                  disabled={enote.etitle.length < 3 || enote.edesc.length < 5}
                >
                  Save Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>

        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
}

export default Notes;
