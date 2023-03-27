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

  const user = await User.findOne({ username: req.body.username });
  if (user) {
    res.status(200).json({ success: false, msg: "User Already exists" });
  } else {
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    res.status(201).json({ success: true, savedUser });
  }
});

//LOGIN
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(200)
        .json({ msg: "User does not exist. ", error: true });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(200)
        .json({ msg: "Passowrd doesn't match", error: true });
    res.status(200).json({ user, error: false });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//ADD ITEMS

const getUserPosts = async (req, res) => {
  try {
    const data = await Vault.find({ Id: req.params.id });
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
router.get("/:id/items", getUserPosts);

router.post("/:id/createVault", async (req, res) => {
  req.body.vault = req.body.vaultname;
  req.body.Id = req.params.id;
  req.body.isDeleted = false;
  try {
    if (req.body.password === "") {
      res.status(200).json({ success: false, msg: "password is empty" });
    } /*  else if (req.body.email === "") {
      res.status(200).json({ success: false, msg: "email is empty" });
    } */ else {
      const data = await Vault.create(req.body);
      if (data) {
        res
          .status(200)
          .json({ success: true, msg: "Successfully added new item" });
      }
    }
    // res.redirect("/vault");
  } catch (err) {
    console.log(err);
  }
});

//UPDATE Vault
router.post("/:id/deleteVaultTemp", async (req, res) => {
  const id = req.params.id;
  const update = {
    isDeleted: true,
  };

  await Vault.findByIdAndUpdate(id, update)
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/:id/restore", async (req, res) => {
  const id = req.params.id;
  const update = {
    isDeleted: false,
  };

  await Vault.findByIdAndUpdate(id, update)
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/delete/:id", function (req, res, next) {
  Vault.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({
        success: true,
      });
      //  res.redirect("/vault");
    })
    .catch((err) => {
      console.log(err);
    });
  /* Vault.findByIdAndDelete(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  }); */
});

module.exports = router;
