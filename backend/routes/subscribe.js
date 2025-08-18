import express from "express";
import validator from "validator";
import { db } from "../database/db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid Email!",
    });
  }

  try {
    await db.run("INSERT INTO subscribers (email) VALUES (?)", email);

    res.status(200).json({
      success: true,
      message: "Email has been registered!",
    });
  } catch (err) {
    if (err.message.includes("UNIQUE")) {
      return res.status(409).json({
        success: false,
        message: "Email already registered!",
      });
    }
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

export default router;
