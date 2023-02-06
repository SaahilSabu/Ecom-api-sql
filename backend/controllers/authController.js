const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");

const User = db.users;

const register = async (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.status(500).send({ error: "Error encrypting password" });
    }

    User.create({
      email,
      password: hash,
    })
      .then(() => {
        res.status(200).send({ message: "User registered successfully" });
      })
      .catch((error) => {
        res.status(500).send({ error: "Error registering user", error });
      });
  });
};

// Verify the password when logging in
const login = async (req, res) => {
  const { email, password } = req.body;

  User.findOne({
    where: {
      email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(500).send({ error: "Error checking password" });
        }

        if (!result) {
          return res.status(401).send({ error: "Incorrect password" });
        }

        const token = jwt.sign({ userId: user.id }, "secret_key", {
          expiresIn: "1h",
        });

        res.status(200).send({ message: "User logged in", token });
      });
    })
    .catch((error) => {
      res.status(500).send({ error: "Error logging in" });
    });
};

module.exports = {
  register,
  login,
};
