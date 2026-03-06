import React, { useState, useEffect } from 'react';
import { useSong } from '../hooks/useSong';

const MOOD_OPTIONS = [
  { id: 'happy', label: 'happy', color: 'text-red-500', bgColor: 'bg-red-500/10', borderColor: 'border-red-500' },
  { id: 'sad', label: 'sad', color: 'text-blue-500', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500' },
  { id: 'surprised', label: 'surprised', color: 'text-yellow-500', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500' },
];

function PlaylistSong() {
  const { allSong, setSong, handleGetAllSong } = useSong();
  const [selectedMood, setSelectedMood] = useState('happy');
  const [songs, setSongs] = useState([]);
  const [currentSongId, setCurrentSongId] = useState(null);

  useEffect(() => {
    handleGetAllSong({ mood: selectedMood });
  }, [selectedMood]);

  useEffect(() => {
    if (Array.isArray(allSong)) {
      setSongs(allSong);
    } else if (allSong?.songs) {
      setSongs(allSong.songs);
    } else if (allSong && typeof allSong === 'object') {
      setSongs([allSong]);
    }
  }, [allSong]);

  const handleSongClick = (song) => {
    setSong(song);
    setCurrentSongId(song._id);
  };

  const formatDuration = (seconds) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const moodStyle = MOOD_OPTIONS.find(m => m.id === selectedMood) || MOOD_OPTIONS[0];



  return (
    <div className="w-full   from-gray-950 via-gray-900 to-black overflow-auto relative flex flex-col">
      <div className="flex-1 px-8 py-6 flex flex-col max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-gray-400 text-lg font-medium">playlist</span>
            <h1 className={`text-5xl font-bold ${moodStyle.color}`}>
              {moodStyle.label}
            </h1>
          </div>

          {/* Mood Selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {MOOD_OPTIONS.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`px-3 py-1 rounded-full font-semibold text-xs transition-all ${
                  selectedMood === mood.id
                    ? `${mood.color} ${mood.bgColor} border ${mood.borderColor} border-current`
                    : 'text-gray-400 hover:text-gray-300 border border-gray-600'
                }`}
              >
                {mood.label}
              </button>
            ))}
          </div>
        </div>

        {/* Songs List */}
        <div className="space-y-3 flex-1 overflow-y-auto">
          {songs.length > 0 ? (
            songs.map((song, index) => (
              <div
                key={song._id || index}
                onClick={() => handleSongClick(song)}
                className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 border ${
                  currentSongId === song._id
                    ? `${moodStyle.bgColor} ${moodStyle.borderColor} border-current`
                    : 'border-gray-800 hover:bg-gray-900/50 hover:border-gray-700'
                }`}
              >
                {/* Album Cover */}
                <div className="relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-gray-800">
                  <img
                    src={song.posterUrl || 'https://via.placeholder.com/48?text=No+Image'}
                    alt={song.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Song Info */}
                <div className="flex-grow min-w-0">
                  <h3 className="text-white font-semibold truncate text-sm group-hover:text-gray-200 transition">
                    {song.title || 'Unknown Title'}
                  </h3>
                  <p className="text-gray-500 text-xs truncate group-hover:text-gray-400 transition">
                    {song.artist || 'Unknown Artist'}
                  </p>
                </div>

                {/* Duration */}
                <div className="text-gray-500 text-xs font-medium whitespace-nowrap group-hover:text-gray-400 transition">
                  {formatDuration(song.duration)}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <div className="text-4xl mb-2">🎵</div>
              <h3 className="text-sm font-semibold text-white mb-1">No songs found</h3>
              <p className="text-gray-400 text-xs">Try selecting a different mood</p>
            </div>
          )}
        </div>

        {/* Song Count */}
        {songs.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className={`text-center text-xs ${moodStyle.color} font-semibold`}>
              {songs.length} song{songs.length !== 1 ? 's' : ''} in {moodStyle.label} mood
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlaylistSong;