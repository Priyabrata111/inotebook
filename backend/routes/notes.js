const express = require("express");
const router = express.Router();
const fetchuser = require("../middlewares/fetchuser");
const Note = require("../models/Notes");

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const note = await Note.find({ user: res.user.id });

  res.json({ note });
});

module.exports = router;
