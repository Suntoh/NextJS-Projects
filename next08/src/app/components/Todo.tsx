"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import { ChangeEvent,MouseEvent } from 'react'
import { FaTrash } from 'react-icons/fa'

export default function Todo(todo:Todo) {
    const router = useRouter()
    const [isPending,startTransition] = useTransition()
    const [isFetching,setFetching] = useState(false)

    const isMutating = isFetching || isPending

    const handleChange = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        setFetching(true)
        const res = await fetch(`http://127.0.0.1:3500/todos/${todo.id}`,{
            method:"PUT",
            headers:{
                'Content-Type' : "application/json"
            },
            body:JSON.stringify({
                ...todo,completed: !todo.completed
            })
        })

        await res.json()
        setFetching(false)
        startTransition(() => {
            router.refresh()
        })
    }

    const handleDelete = async (e: MouseEvent<HTMLButtonElement>) =>{
        setFetching(true)

        const res = await fetch(`http://127.0.0.1:3500/todos/${todo.id}`,{
            method:'DELETE',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                id:todo.id
            })
        })

        await res.json()
        setFetching(false)
        startTransition(()=>{router.refresh()})
    }

  return         (<article className='my-4 flex justify-between items-center' 
  style={{opacity:!isMutating ? 1:0.6}}>
      <label className='text-2xl hover:underline'> 
          <Link href = {`/edit/${todo.id}`}
          >{todo.title}</Link>
      </label>
      <div>
          <input 
              type="checkbox"
              checked={todo.completed}
              id="competed"
              name = "completed"
              onChange={handleChange}
              disabled = {isPending}
              className='min-w-[2rem] min-h-[2rem]'
          />
          <button 
              onClick={handleDelete}
              disabled={isPending}
              className='p-3 text-xl rounded-xl text-black border-solid border-black
              border-2 max-w-xs bg-red-400 hover:cursor-pointer hover:bg-red-300'
          ><FaTrash />
              </button>
          </div>
  </article>)
}
