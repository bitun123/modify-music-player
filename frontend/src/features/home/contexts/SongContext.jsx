import React, { createContext, useState } from 'react'

export const songContext = createContext()

function SongContext({ children }) {
    const [song, setSong] = useState({})
    const [loading, setLoading] = useState(false)
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