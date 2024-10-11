import { NextResponse } from 'next/server'
import React from 'react'

export async function GET() {


  return NextResponse.json({"message" : 'Hello, Next.js!'})
}
