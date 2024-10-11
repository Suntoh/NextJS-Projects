import ListItem from '@/app/components/ListItem'
import { getPostMeta } from '@/lib/post'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const revalidate = 86400

type Props = {
    params: {
        tag:string
    }
}

export async function generateStaticParams() {

    const posts = await getPostMeta()

    if(!posts) return []

    const tags = new Set(posts.map(post => post.tags).flat())
    
  return Array.from(tags).map((tag) => ({tag}))
}

export function generateMetadata({params:{tag}}: Props){
    return {
        title: `Post about ${tag}`
    }
}

export default async function TagPostList({params: {tag}}: Props ){
    const posts = await getPostMeta()

    if(!posts) return <p className='mt-10 text-center'>Sorry , No posts available</p>

    const tagPosts = posts.filter(post => post.tags.includes(tag))

    if(!TagPostList.length){
        return(
            <div className='text-center'>
                <p className='mt-10'>Sorry, No posts for that keyword.</p>
                <Link href="/">Go Back Home</Link>
            </div>
        )
    }

    return (
        <>
        <h2 className='text-3xl mt-4 mb-0'>Result for: #{tag}</h2>
        <section>
            <ul className='w-full list-none p-0'>
                {tagPosts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
        </>
    )
}