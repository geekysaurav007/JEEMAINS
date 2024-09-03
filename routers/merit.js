const express = require("express");
const {
  createMerit,
  getMyMerit,
  getAllMerit,
  getAllMerit2,
} = require("../controllers/meritController");
const meritRouter = express.Router();
meritRouter.post("/create/:id", createMerit);
meritRouter.get("/mymerit/:roll_no", getMyMerit);
meritRouter.get("/allmerit",getAllMerit)

module.exports = { meritRouter };
