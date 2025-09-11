const express = require("express");
const router = express.Router();
const fetchuser = require("../middlewares/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// ROUTER 1:fetech all notes of an user : api/notes/fetchallnotes
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const note = await Note.find({ user: req.user.id });

  res.json({ note });
});

//ROUTER 2 : createnotes : api/notes/addnote
router.post(
  "/addnote",
  fetchuser,
  [
    body(
      "title",
      "Please Enter a valid title with minimum 3 character"
    ).isLength({ min: 3 }),
    body(
      "description",
      "Please Enter a valid description with 5 character"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ error: result.array() });
    }

    try {
      const { title, description, tag } = req.body;
      const note = new Note({ title, description, tag, user: req.user.id });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTER 3 : updateNotes : api/notes/updatenote/:id
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  let newNote = {};
  if (title) newNote.title = title;
  if (description) newNote.description = description;
  if (tag) newNote.tag = tag;

  const note = await Note.findById(req.params.id);
  if (!note) {
    res.status(400).send("Note with provided Id Not found");
  }

  if (note.user.toString() !== req.user.id) {
    res.status(401).send("Unauthorized user trying to access the note");
  }

  const updateNote = await Note.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json(updateNote);
});

module.exports = router;
