const savedSongModel = require("../models/savedSong.model");
const savedSongRouter = require("../routes/savedSong.routes");

async function savedSongController(req, res) {
  const songId = req.params.SongId;
  const userId = req.user.id;

  const existingSavedSong = await savedSongModel.findOne({
    SongId: songId,
    userId: userId,
  });

  if (existingSavedSong) {
    return res.status(400).json({
      message: "Song already saved",
    });
  }

  const savedSong = await savedSongModel.create({
    SongId: songId,
    userId: userId,
  });

  res.status(201).json({
    message: "song saved successfully",
    savedSong,
  });
}

async function getSavedAllSongController(req,res){

const songs = await savedSongModel
  .find({ userId: req.user.id })
  .populate("SongId");



  
  res.status(200).json({
    message:"all song get successfully",
    songs
  })


}

module.exports = {
  savedSongController,
  getSavedAllSongController
};
