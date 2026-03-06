import React, {  useState } from 'react'
import { useSong } from '../hooks/useSong'



function CreateSong({ setopen }) {
  const [file, setFile] = useState('')
  const [mood, setMood] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [fileName, setFileName] = useState('')

const {handleCreateSong} =   useSong()

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setFileName(selectedFile.name)
    setFile(selectedFile)
  }

  const handleMoodChange = (e) => {
    setMood(e.target.value)
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!file) {
      setError('Please upload a file')
      return
    }
    if (!mood.trim()) {
      setError('Please enter your mood')
      return
    }

    try {
      setLoading(true)
      setError('')
      
      await handleCreateSong({ song: file, mood: mood.trim() })
      
      setFile('')
      setMood('')
      setFileName('')
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create song. Please try again.')
    } finally {
      setLoading(false)
      setopen(false)
    }
  }



  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      setFile(droppedFile)
      setFileName(droppedFile.name)
      setError('')
    }
  }

  return (
    <div className='  flex justify-center items-center  backdrop-blur-[0.5rem]'>
      <div className='w-[40rem] max-w-md bg-gray-600 rounded-lg shadow-lg p-8 relative'>
<div className='absolute top-2 right-5 cursor-pointer' onClick={() => setopen(false)}>
    <h1 className='text-white text-2xl'><i className="ri-close-large-line"></i></h1>
</div>

        <h1 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Create Song</h1>
        
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          {/* File Upload Area */}
          <div>
            <input
              id='file-input'
              type='file'
              onChange={handleFileChange}
              accept='audio/*'
              className='sr-only'
            />
            <label
              htmlFor='file-input'
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className='flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-xl p-8 cursor-pointer hover:border-blue-600 hover:bg-blue-100 transition gap-4'
            >
              {/* Upload Icon */}
              <svg
                className='w-12 h-12 text-blue-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
                />
              </svg>

              {/* Browse Button */}
              <button
                type='button'
                className='px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition'
              >
                Browse
              </button>

              {/* Text */}
              <p className='text-gray-400 text-center w-full truncate'>
                {fileName ? fileName : 'drop a file here'}
              </p>

              {/* File Support Info */}
              <p className='text-sm text-gray-600 text-center'>
                <span className='text-red-500'>*</span>File supported .mp3, .wav & .ogg
              </p>
            </label>
          </div>

          {/* Mood Input */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Your Mood</label>
            <input
              type='text'
              value={mood}
              onChange={handleMoodChange}
              placeholder='e.g., Happy, Sad, surprised..'
              className='w-full py-3 px-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-800'
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className='p-3 bg-red-50 border border-red-200 rounded-lg'>
              <p className='text-sm text-red-700'>{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type='submit'
            disabled={loading}
            className='w-full py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold rounded-lg transition duration-200 flex items-center justify-center gap-2'
          >
            {loading ? (
              <>
                <svg className='animate-spin w-5 h-5' fill='none' viewBox='0 0 24 24'>
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                  <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                </svg>
                Uploading...
              </>
            ) : (
              'Upload'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateSong