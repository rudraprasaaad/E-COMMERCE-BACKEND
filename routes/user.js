const User = require("../models/User");
const CryptoJS = require("crypto-js");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete(":/id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "User has been deleted!!!" });
  } catch (err) {
    res.status(500).json({ msg: "Unable to do that" });
  }
});

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  const user = await User.findById(req.params.id);
  const { password, ...others } = user._doc;
  res.status(200).json(others);
});

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
