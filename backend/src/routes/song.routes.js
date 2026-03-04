const express = require("express");
const songController = require("../controllers/song.controller");
const songRouter = express.Router();
const upload = require("../middlewares/upload.middleware")

songRouter.post("/",upload.single("song"), songController.addSongController);

module.exports = songRouter;
