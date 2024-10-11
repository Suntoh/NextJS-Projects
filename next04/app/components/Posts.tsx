import { getSortedPostsData } from '@/lib/posts'
import React from 'react'
import ListItem from './ListItem'

export default function Posts() {
    const posts = getSortedPostsData()

  return (
    <section>
    <h2 className='text-4xl font-bol text-gray-100'>Blog:</h2>
     <ul className='w-full'>
        {posts.map(post =>(
            <ListItem 
            key={post.id}
            post={post}
            />
            // JSON.stringify(post)
        ))}
     </ul> 
     </section>
  )
}
