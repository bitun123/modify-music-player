import React, { createContext, useState } from 'react'

export const songContext = createContext()

function SongContext({ children }) {
    const [song, setSong] = useState({})
    const [loading, setLoading] = useState(false)
    console.log(song);

    // const [playlist, setPlaylist] = useState([])
    // const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    // const [playbackSpeed, setPlaybackSpeed] = useState(1)
    // const [isPlaying, setIsPlaying] = useState(false)
    // const [currentTime, setCurrentTime] = useState(0)
    // const [duration, setDuration] = useState(0)

    // const currentTrack = playlist[currentTrackIndex] || null

    // const handleNextTrack = () => {
    //     if (currentTrackIndex < playlist.length - 1) {
    //         setCurrentTrackIndex(currentTrackIndex + 1)
    //         setCurrentTime(0)
    //     }
    // }

    // const handlePreviousTrack = () => {
    //     if (currentTrackIndex > 0) {
    //         setCurrentTrackIndex(currentTrackIndex - 1)
    //         setCurrentTime(0)
    //     }
    // }

    return (
        <songContext.Provider value={{
            song,
            setSong,
            loading,
            setLoading,
      
        }}>
            {children}
        </songContext.Provider>
    )
}

export default SongContext