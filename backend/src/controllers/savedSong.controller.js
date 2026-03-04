const savedSongModel = require("../models/savedSong.model");

async function savedSongController(req, res) {
  const SongId = req.params.SongId;
  const userId = req.user.id;

  const existingSavedSong = await savedSongModel.findOne({
    songId: SongId,
    userId: userId,
  });

  if (existingSavedSong) {
    return res.status(400).json({
      message: "Song already saved",
    });
  }

  const savedSong = await savedSongModel.create({
    SongId: SongId,
    userId: userId,
  });

    const fullSavedSong = await savedSongModel
      .findById(savedSong._id)
      .populate("SongId"); 

  res.status(201).json({
    message: "song saved successfully",
    fullSavedSong,

  });
}
module.exports = {
  savedSongController,
};
