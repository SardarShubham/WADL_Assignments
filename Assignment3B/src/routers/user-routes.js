const express = require("express");
const router = new express.Router();
const User = require("../models/user-model");

router.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.statusCode = 200
    res.json(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/signin", async (req, res) => {
    res.statusCode = 200;
    res.json(req.body);
  // try {
  //   // console.log(req.body.email)

  //   // const user = await User.find(
  //   //   req.body.email
  //   // );
  //   res.statusCode = 200;
  //   res.json(req);
  // } catch (e) {
  //   res.status(400).send(e);
  //   // res.json(req);
  // }
});

router.post("/delete", async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.body.id);
    res.statusCode = 200;
    res.end("User: ", user, "deleted successfully!");
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/change-password", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.body.id, {
      password: req.body.password,
    });
    res.statusCode = 200;
    res.json(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
