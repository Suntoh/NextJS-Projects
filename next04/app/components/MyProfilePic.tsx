import Image from 'next/image'
import React from 'react'

export default function MyProfilePic() {
  return (
    <section className='w-full mx-auto'>
        <Image 
        className='border-4 border-violet-200
        dark:border-violet-600 drop-shadow-xl
        shadow-black rounded-full mx-auto mt-8'
            src="/images/20240623_085814.jpg"
            width={250}
            height={250}
            alt="Suntoh"
            priority={true}
        />
    </section>

  )
}
