const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env.test.local" });

const JWT_SECRET = process.env.JWT_SECRET;

router.post(
  "/createuser",
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
  async (req, res) => {
    const result = validationResult(req);
    // If there are errors return bad request & logs of errors
    if (!result.isEmpty()) {
      return res.status(400).json({ error: result.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        res
          .status(400)
          .json({ error: "Sorry a user with provided email already present" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      console.log(authToken);
      res.json({ authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occurred");
    }
  }
);

module.exports = router;
