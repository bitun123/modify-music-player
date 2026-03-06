const express = require("express");
const cookie = require("cookie-parser");
const cors = require("cors");

/**
 * @importing Routes
 */
const userRouter = require("./routes/user.routes");
const SongRouter = require("./routes/song.routes");
const savedSongRouter = require("./routes/savedSong.routes");

//call express to create an app
const app = express();
app.use(cookie());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-frontend-domain.com"],
    credentials: true,
  }),
);
app.use(express.static("./public"));

/**
 * use routes
 */
app.use("/api/auth", userRouter);
app.use("/api/songs", SongRouter);
app.use("/api/savedSongs", savedSongRouter);

module.exports = app;
