import React from 'react'

export default async function getUserPost(userId : string) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      //,{cache: 'no-store'}
      ,{next : {revalidate : 60}}  
      //check ว่ามีการเปลี่ยนของdata หรือเปล่า ex weather
    )

    if(!res.ok) return undefined
  

  return res.json()
  
}