import React, { useState, useRef } from 'react'
import { useSong } from '../hooks/useSong'

function Song() {
    const { song } = useSong()
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [playbackSpeed, setPlaybackSpeed] = useState(1)
    const [volume, setVolume] = useState(100)
    const audioRef = useRef(null)
    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleSpeedChange = (e) => {
        const speed = parseFloat(e.target.value)
        setPlaybackSpeed(speed)
        if (audioRef.current) {
            audioRef.current.playbackRate = speed
        }
    }

    const handleForward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 15, duration)
        }
    }

    const handleBackward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 15, 0)
        }
    }

    const handleProgressChange = (e) => {
        const time = parseFloat(e.target.value)
        setCurrentTime(time)
        if (audioRef.current) {
            audioRef.current.currentTime = time
        }
    }

    const handleVolumeChange = (e) => {
        const vol = parseFloat(e.target.value)
        setVolume(vol)
        if (audioRef.current) {
            audioRef.current.volume = vol / 100
        }
    }

    const formatTime = (time) => {
        if (!time || isNaN(time)) return '0:00'
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    return (
        <div className="w-full flex flex-col gap-[4rem] items-center p-2">
            {/* Song Cover */}
            <div className="flex flex-col justify-center items-center w-full h-[10rem] py-3">
                    <img src={song.posterUrl} alt="" className='w-[100%] h-[100%] object-cover rounded' />
                <p className="text-orange-400 text-lg font-bold mt-2">{song.title}</p>
        

            </div>
            <audio
                ref={audioRef}
                src={song.songUrl}
                onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                onLoadedMetadata={(e) => setDuration(e.target.duration)}
            />

            {/* Progress Bar */}
            <div className='flex flex-col'>


                <div className="w-[36.5rem]">
                    <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onChange={handleProgressChange}
                        className="w-full  h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-6">
                    {/* Backward Button */}

                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-400 font-semibold">Speed:</label>
                        <select
                            value={playbackSpeed}
                            onChange={handleSpeedChange}
                            className="bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 hover:border-purple-500 transition cursor-pointer font-semibold"
                        >
                            <option value={0.5}>0.5x</option>
                            <option value={0.75}>0.75x</option>
                            <option value={1}>1x</option>
                            <option value={1.25}>1.25x</option>
                            <option value={1.5}>1.5x</option>
                            <option value={1.75}>1.75x</option>
                            <option value={2}>2x</option>
                        </select>
                    </div>

                    <button
                        onClick={handleBackward}
                        className="hover:bg-gray-800 p-3 rounded-full transition text-white"
                        title="Backward 15s"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11 5V1l-5 5 5 5v-4c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6s-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
                        </svg>
                    </button>

                    {/* Play/Pause Button */}
                    <button
                        onClick={handlePlayPause}
                        className="bg-purple-600 hover:bg-purple-700 p-4 rounded-full transition transform hover:scale-110"
                    >
                        {isPlaying ? (
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>

                    {/* Forward Button */}
                    <button
                        onClick={handleForward}
                        className="hover:bg-gray-800 p-3 rounded-full transition text-white "
                        title="Forward 15s"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 5v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z" />
                        </svg>
                    </button>

                    <div className="flex items-center gap-2 ">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02z" />
                        </svg>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-32 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-purple-500"
                        />
                        <span className="text-sm text-gray-400 font-semibold w-10">{volume}%</span>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Song