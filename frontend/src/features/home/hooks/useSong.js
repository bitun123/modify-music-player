import { createSong, getAllSong } from "../services/song.api";
import { useContext } from "react";
import { songContext } from "../contexts/SongContext";

export const useSong = () => {
  const context = useContext(songContext);

  const {
    song,
    loading,
    setLoading,
    setSong,
    // playlist,
    // setPlaylist,
    // setCurrentTrackIndex,
    // setIsPlaying
  } = context;

  async function handleCreateSong({ song, mood }) {
    setLoading(true);
    const data = await createSong({ song, mood });
    setSong(data.song);
    // setPlaylist([data.song]);
    // setCurrentTrackIndex(0);
    setLoading(false);
  }

  async function handleGetAllSong({ mood }) {
    setLoading(true);
    const data = await getAllSong({ mood });
    console.log(data);
    setSong(data.song?.[0] || {});
      console.log(song);
    setLoading(false);
  }

  return {
    song,
    loading,
    handleCreateSong,
    handleGetAllSong,
    // playlist,
    // setPlaylist
  };
};
