const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    default: () => new Date().toISOString(),
  },
});

module.exports = mongoose.model("note", NotesSchema);
