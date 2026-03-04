const express = require("express");
const savedSong = require("../controllers/savedSong.controller");
const  {authUser}  = require("../middlewares/auth.middleware");

const savedSongRouter = express.Router();

savedSongRouter.post("/:SongId", authUser, savedSong.savedSongController);


module.exports = savedSongRouter;
