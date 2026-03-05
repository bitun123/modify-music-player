import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

export const createSong = async ({ song, mood }) => {
  const fromData = new fromData();
  fromData.append("song", song);
  fromData.append("mood", mood);

  const response = await api.post("/api/songs/", fromData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const savedSong = async (SongId) => {
  const response = await api.post("/api/savedSongs/" + SongId);
  return response.savedSong;
};

export const getAllData = async ({ mood }) => {
  const response = await api.get("/api/songs?mood=" + mood);
  return response.song;
};
