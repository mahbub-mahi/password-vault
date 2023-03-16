const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const Vault = require("../models/vault.model");

//POST IN REGISTER PAGE
router.post("/create", async (req, res) => {
  const { username, email, password } = req.body;

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    email,
    password: passwordHash,
  });
  const savedUser = await newUser.save();
  res.status(201).json(savedUser);
});

//LOGIN
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("login");
});

//ADD BOOKS

router.post("/vault", async (req, res) => {
  try {
    req.body.user = req.user.id;
    await Vault.create(req.body);
    res.redirect("/vault");
  } catch (err) {
    console.log(err);
  }
});

//GET INDIVIDUAL BOOKS
router.get("/editVault/:id", (req, res) => {
  const id = req.params.id;
  Vault.findById(id).then((result) => {
    res.render("vault/editVault", {
      id: result._id,
      blog: result,
      title: result.title,
      author: result.author,
    });
  });
});

//UPDATE Vault
router.post("/editVault/:id", (req, res) => {
  const id = req.params.id;
  const update = {
    title: req.body.title,
    author: req.body.author,
  };

  Vault.findByIdAndUpdate(id, update, { new: true }, () => {
    res.redirect("/main");
  });
});

//DELETE VAULT
router.get("/delete/:id", function (req, res) {
  Vault.findByIdAndDelete(req.params.id, function (err, user) {
    if (err)
      return res.status(500).send("There was a problem deleting the user.");
    res.redirect("/main");
  });
});

module.exports = router;
