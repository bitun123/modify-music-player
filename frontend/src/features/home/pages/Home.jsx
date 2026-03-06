import React, { useState } from 'react'
import FaceExpression from '../../expression/components/FaceExpression'
import Song from '../components/Song'
import CreateSong from '../components/CreateSong'

function Home() {

const [open, setopen] = useState(false)
    return (
        <div className='w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black'>
    <CreateSong/>
        </div>
    )
}

export default Home
 

        // <div className='max-w-7xl mx-auto py-5'>
        //         {/* Header */}
             

        //         {/* Main Layout */}
        //         <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        //             {/* Left Column - Expression and Player */}
        //             <div className='lg:col-span-2 space-y-8'>
        //                 {/* Face Expression */}
        //                 <div className='bg-gray-800 rounded-lg p-6'>
        //                     <h2 className='text-xl font-bold text-white mb-4'>Your Expression</h2>
        //                     <FaceExpression 
        //                     onClick={(expression)=>{handleGetAllSong({mood:expression})}}
        //                     />
                       
                         
        //                 </div>

        //                 {/* Player */}
        //                 <Song />
        //             </div>
        //         </div>
        //     </div>