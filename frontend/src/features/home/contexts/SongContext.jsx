import React, { createContext, useState } from 'react'

export const songContext = createContext()

function SongContext({ children }) {
    const [song, setSong] = useState({})
    const [loading, setLoading] = useState(false)
    const [allSong, setallSong] = useState({})

    return (
        <songContext.Provider value={{
            song,
            setSong,
            loading,
            setLoading,
            allSong,
            setallSong
      
        }}>
            {children}
        </songContext.Provider>
    )
}

export default SongContext