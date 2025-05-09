import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className='bg-red-400 p-4 sticky top-0 drop-shadow-xl
    z-10'>
        <div className='md:px-6 prose prose-xl mx-auto
        flex justify-between flex-col sm:flex-row'>
            <h1 className='text-3xl font-bold text-white grid place-content-center
            mb-2 md:mb-0'>
            <Link href='/'
            className='text-white/80 no-underline
            hover:text-white'>
                Suntoh ❤️💕 Prim</Link>
            </h1>
            <div className='flex flex-row justify-center sm:justify-evenly
            align-middle gap-4 text-white text-4xl lg:text-5xl'>
                <Link className='text-white/80 hover:text-white'
                 href="https://youtube.com/@amakabocha1655?si=S3e7d7BG1YGQj7Gu">
                    <FaYoutube />     
                </Link>
                <Link className='text-white/80 hover:text-white' 
                href="https://www.facebook.com/weerawit.jongthanapipat">
                    <FaFacebook />
                </Link>
                <Link className='text-white/80 hover:text-white'
                href="https://github.com/Suntoh">
                    <FaGithub />
                </Link>
                <Link className='text-white/80 hover:text-white'
                href="https://x.com/Suntoh3">
                    <FaTwitter />
                </Link>
            </div>
        </div>

    </nav>
  )
}
