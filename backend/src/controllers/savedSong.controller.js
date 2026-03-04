const savedSongModel = require("../models/savedSong.model");

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

  const getSavedSong = await savedSongModel
    .findById(savedSongs.SongId)
    .populate("SongId");

  res.status(201).json({
    message: "song saved successfully",
    savedSong: getSavedSong,
  });
}

module.exports = {
  savedSongController,
};