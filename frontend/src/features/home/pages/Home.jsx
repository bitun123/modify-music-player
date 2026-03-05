import React from 'react'
import FaceExpression from '../../expression/components/FaceExpression'
import Song from '../components/Song'
import { useSong } from '../hooks/useSong'

function Home() {
    const { handleGetAllSong } = useSong()

    return (
        <div className='w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black'>
            <div className='max-w-7xl mx-auto px-4 py-8'>
                {/* Header */}
                <div className='mb-12'>
                    <h1 className='text-4xl font-bold text-white mb-2'>Music Experience</h1>
                    <p className='text-gray-400'>Emotion-based music player with facial expression recognition</p>
                </div>

                {/* Main Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {/* Left Column - Expression and Player */}
                    <div className='lg:col-span-2 space-y-8'>
                        {/* Face Expression */}
                        <div className='bg-gray-800 rounded-lg p-6'>
                            <h2 className='text-xl font-bold text-white mb-4'>Your Expression</h2>
                            <FaceExpression 
                            onClick={(expression)=>{handleGetAllSong({mood:expression})}}
                            />
                        </div>

                        {/* Player */}
                        <Song />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home