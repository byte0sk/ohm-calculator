const express = require("express");
const router = express.Router();
const Resistance = require("../models/resistance");

router.get("/", async (req, res) => {
  try {
    const resistance = await Resistance.find();

    res.json(resistance);
  } catch (error) {
    console.log("resistance route - error: ", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
