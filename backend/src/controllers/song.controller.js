const songModels = require("../models/song.model");
const id3 = require("node-id3");
const storageService = require("../services/storage.service");

async function addSongController(req, res) {
  const { mood } = req.body;

  const songBuffer = req.file.buffer;
  const tags = id3.read(songBuffer);

  const [songFile, posterFile] = await Promise.all([
    storageService.uploadFile({
      buffer: songBuffer,
      filename: tags.title + ".mp3",
      folder: "modify/songs",
    }),

    storageService.uploadFile({
      buffer: tags.image.imageBuffer,
      filename: tags.title + ".jpg",
      folder: "modify/posters",
    }),
  ]);

  const song = await songModels.create({
    title: tags.title,
    songUrl: songFile.url,
    posterUrl: posterFile.url,
    mood,
  });

  res.status(201).json({
    message: "song added successfully",
    song,
  });
}

async function getAllSongsController(req, res) {
  const songs = await songModels.find();
  res.status(200).json({
    message: "songs fetched successfully",
    songs,
  });
}

module.exports = {
  addSongController,
  getAllSongsController
};


