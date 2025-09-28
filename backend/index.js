const connectToMongo = require("./db.js");
const express = require("express");
var cors = require("cors");

connectToMongo();

const app = express();
const port = 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // your frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "auth-token"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Available routes
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/notes", require("./routes/notes.js"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
