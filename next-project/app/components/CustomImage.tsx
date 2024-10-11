'use client'

import Image from 'next/image'
import React from 'react'

type Props = {
    src: string,
    alt: string,
    piority?: string,

}

export default function CustomImage({src,alt,piority}: Props) {
    const prty = piority ? true: false

    return (
    <div className='w-full h-full'>
        <Image 
            className='rounded-lg mx-auto'
            src={src}
            alt={alt}
            width={650}
            height={650}
            //จริงset max w h next เลือกเอง
            priority={prty}
        />
    </div>
  )
}