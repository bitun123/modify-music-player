const express = require("express");
const savedSong = require("../controllers/savedSong.controller");
const  {authUser}  = require("../middlewares/auth.middleware");

const savedSongRouter = express.Router();

savedSongRouter.post("/:SongId", authUser, savedSong.savedSongController);
savedSongRouter.get("/",authUser , savedSong.getSavedAllSongController)


module.exports = savedSongRouter;
