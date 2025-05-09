import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'
import React from 'react'

type Props = {
    post: BlogPost
}

export default function ListItem({post}: Props) {
    const {id,title,date} = post
    const formattedDate = getFormattedDate(date)

  return (
    <li className='mt-4 text-2xl text-zinc-100/80'>
        <Link href={`/posts/${id}`}
        className='underline hover:text-violet-600'>{title}
        </Link><br />
        <p className='text-sm mt-1'>{formattedDate}</p>
    </li>
  )
}