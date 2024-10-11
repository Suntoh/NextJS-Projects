import { NextResponse } from 'next/server'
import React from 'react'

type Feedback = {
    name?: string,
    email?: string,
    Id?:string,
    message?:string,
}



export async function POST(request : Request) {

    const data:Feedback = await request.json()
    console.log('data: ',data)

    const {name,email,Id,message} = data
  return NextResponse.json({name,email,Id,message})
  
}
