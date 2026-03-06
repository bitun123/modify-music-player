import { createSong, getAllSong } from "../services/song.api";
import { useContext } from "react";
import { songContext } from "../contexts/SongContext";

export const useSong = () => {
  const context = useContext(songContext);

  const { song, loading, setLoading, setSong, allSong, setallSong } = context;

  async function handleCreateSong({ song, mood }) {
    setLoading(true);
    const data = await createSong({ song, mood });
    setSong(data.song);
    setLoading(false);
  }

  async function handleGetAllSong({ mood }) {
    setLoading(true);
    const data = await getAllSong({ mood });
    setallSong(data.song);
    setSong(data.song?.[0] || {});
    setLoading(false);
  }

  return {
    song,
    loading,
    allSong,
    handleCreateSong,
    handleGetAllSong,
    // playlist,
    // setPlaylist
  };
};
