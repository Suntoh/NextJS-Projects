import { NextRequest, NextResponse } from 'next/server';
import React from 'react'
import { revalidate } from '../page';
import { revalidatePath } from 'next/cache';

export async function GET(request : NextRequest) {
    const secret = request.nextUrl.searchParams.get('secret')

    if(secret !== process.env.MY_SECRET_TOKEN){
        return new NextResponse(JSON.stringify({message:'Invalid Token'}),{
            status:401,
            statusText:"Unotherized",
            headers:{
                'Content-Type' : 'application/json'
            }
        })
    }

    const path = request.nextUrl.searchParams.get('path') || '/'

    revalidatePath(path)

    return NextResponse.json({revalidated:true})
}
