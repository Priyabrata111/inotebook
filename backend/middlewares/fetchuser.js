var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env.test.local" });

const JWT_SECRET = process.env.JWT_SECRET;

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    res.status(401).send({ error: "Please Authenticate with a valid token" });
  }
  try {
    // const data = jwt.verify(token, JWT_SECRET);
    const data = jwt.verify(
      token,
      "PRIYABRATAIITMANDIKPITGCETTB73186096798614221195"
    );
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please Authenticate with a valid token" });
    console.log(error.message);
  }
};

module.exports = fetchuser;
