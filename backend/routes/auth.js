const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  [
    body("name", "Please Enter a valid name with minimum 3 character").isLength(
      { min: 3 }
    ),
    body("email", "Please Enter a valid email").isEmail(),
    body(
      "password",
      "Please Enter a strong password with minimum length of 5"
    ).isLength({ min: 5 }),
  ],
  (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ error: result.array() });
    }
    res.send(req.body);
  }
);

module.exports = router;
