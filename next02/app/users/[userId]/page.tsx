import React from 'react'
import getUser from '@/lib/getUser'
import getUserPost from '@/lib/getUserPosts'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import Link from 'next/link'
import { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'

import { notFound } from 'next/navigation'

type Params = {
    params:{
        userId: string
    }
}
//generateMetadata เป๊ะๆ
export async function generateMetadata({ params : {userId}}:Params) 
: Promise<Metadata> {
    const userData :Promise<User> = getUser(userId)
    const user:User = await userData
    if(!user){
        //ต้อง check user, check user.name แล้ว error
        return{
            title: "User Not Found"
        }
    }

    return{
        title : user.name,
        description : `Post for ${user.name}`
    }
}

export default async function UserPage({params: {userId}}: Params) {

    const userData : Promise<User> = getUser(userId)
    //const user = await userData
    const userPostsData : Promise<Post[]> = getUserPost(userId)
    //const userPost = await userPostData

    // const [user,userPosts] = await Promise.all([userData,userPostsData])
    // //doesn't create waterfall (parallel)

    const user = await userData

    if(!user) return notFound()
     //ต้อง check user, check user.name แล้ว error   

  return (
    <>
        <Link href='/users'>Back</Link>
        <h2> {user.name}</h2>
        <br />
        <Suspense fallback={<h2>Loading...</h2>}>

            <UserPosts promise = {userPostsData} />
        </Suspense>
    </>
  )
}

//ให้มันโหลด params มาก่อน
export async function generateStaticParams(){
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData

    return users.map(user => (
        {userId : user.id.toString()}
    ))
}