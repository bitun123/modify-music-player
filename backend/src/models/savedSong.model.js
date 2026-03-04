const mongoose = require("mongoose");

const savedSongSchema = new mongoose.Schema(
  {
    SongId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const savedSongModel = mongoose.model("savedSongs", savedSongSchema);

module.exports = savedSongModel;
