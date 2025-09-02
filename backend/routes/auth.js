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
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => {
        res.json(user); // success response
      })
      .catch((err) => {
        if (err.code === 11000) {
          // MongoDB duplicate key error
          return res.status(400).json({
            error: "You have entered a duplicate email address",
            message: err.message,
          });
        }
        console.error(err);
        res.status(500).json({ error: "Server error", message: err.message });
      });
  }
);

module.exports = router;
