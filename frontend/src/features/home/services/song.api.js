import axios from "axios";

const api = axios.create({
  baseURL:  import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

export const createSong = async ({ song, mood }) => {
  const formData = new FormData();

  formData.append("song", song);
  formData.append("mood", mood);

  const response = await api.post("/api/songs/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// export const savedSong = async (SongId) => {
//   const response = await api.post("/api/savedSongs/" + SongId);
//   return response.data;
// };

export const getAllSong = async ({ mood }) => {
   const response = await api.get("/api/songs?mood=" + mood)
  // console.log(response.data)
  return response.data;
};
