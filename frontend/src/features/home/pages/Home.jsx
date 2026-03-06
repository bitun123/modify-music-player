import React, { useState } from 'react'
import FaceExpression from '../../expression/components/FaceExpression'
import Song from '../components/Song'
import CreateSong from '../components/CreateSong'
import { useSong } from '../hooks/useSong'

function Home() {
const {handleGetAllSong} = useSong()
const [open, setopen] = useState(false)
    return (
        <div className='w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black'>


        <div className='max-w-7xl mx-auto py-5'>
                {/* Header */}
             

                {/* Main Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {/* Left Column - Expression and Player */}
                    <div className='lg:col-span-2 space-y-8'>
                        {/* Face Expression */}
                        <div className='flex items-center justify-between'>
                        

                            <FaceExpression 
                            onClick={(expression)=>{handleGetAllSong({mood:expression})}}
                            />
                                                    {/* <button onClick={() => setopen(!open)} className='text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full transition'>
    Create Song
  </button> */}
                         
                        </div>

                        {/* Player */}
                        <Song />
                    </div>
                </div>
            </div>




<div className='absolute top-[5rem] left-[30rem]  flex justify-center items-center backdrop-blur-2xl bg-opacity-50 '>

  {open && <CreateSong setopen={setopen} />}
</div>
        </div>
    )
}

export default Home
 
