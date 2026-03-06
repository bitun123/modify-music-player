import React, { useState } from 'react';
import FaceExpression from '../../expression/components/FaceExpression';
import Song from './Song';
import PlaylistSong from './PlaylistSong';
import CreateSong from './CreateSong';
import { useSong } from '../hooks/useSong';

function Dashboard() {
    const { handleGetAllSong, song } = useSong();
    const [open, setopen] = useState(false);
    const [postTitle, setPostTitle] = useState('');
    const [postLyrics, setPostLyrics] = useState('Song lyrics or details go here...');

    const handleMoodDetect = (expression) => {
        handleGetAllSong({ mood: expression });
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black p-6 overflow-hidden">
            {/* Main Dashboard Layout */}
            <div className="">
                {/* Top Section - Left (Camera/Mood) and Right (Playlist Header) */}
                <div className="flex items-center justify-between">
                    {/* Left Sidebar */}
                    <div className="w-[50%] flex flex-col gap-6">
                        {/* Camera Section */}
                        <div className="flex-1 border-2 border-orange-600/30 rounded-2xl p-6 flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur">
                            <FaceExpression onClick={(expression) => handleMoodDetect(expression)} />
                        </div>

                        {/* Mood Button */}
                        <button
                            onClick={() => setopen(true)}
                            className="px-6 py-3 border-2 border-orange-600/50 text-orange-500 font-bold text-sm tracking-wider hover:bg-orange-600/10 transition rounded-lg"
                        >
                            CREATE A SONG
                        </button>
                        <div className="border-2 border-orange-600/20 rounded-xl bg-gray-900/50 backdrop-blur ">
                            <Song />
                        </div>


                    </div>




                    {/* Right Section - Playlist */}
                    <div className="w-[full] h-[50rem] border-2 border-orange-600/20 rounded-2xl bg-gray-900/30 backdrop-blur overflow-hidden flex flex-col">
                        <PlaylistSong />
                    </div>
                </div>

                {/* Bottom Section - Player */}

            </div>






            {/* Create Song Modal */}
            {open && (
                <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/60 z-50">
                    <CreateSong setopen={setopen} />
                </div>
            )}
        </div>
    );
}

export default Dashboard;
