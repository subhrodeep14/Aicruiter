import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const login = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <div className='flex flex-col items-center justify-center mb-4'>
            <h1 className='font-extrabold text-3xl text-blue-500'>Ai-Interviewr</h1>
        </div>
        <div>
            <Image src="/login.jpg" alt="login" width={500} height={500} 
            className='h-96 w-96 rounded-xs shadow-lg'
            />
        </div>
        <div className='mt-6 flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-semibold'>Welcome to AiCruiter</h2>
            <p className='text-gray-500'>Sign In with your Google account</p>
            <Button 
            className='mt-4 bg-blue-500 text-white hover:bg-blue-600 transition duration-200 ease-in-out'
            >Login with Google</Button>
        </div>
    </div>
  )
}

export default login