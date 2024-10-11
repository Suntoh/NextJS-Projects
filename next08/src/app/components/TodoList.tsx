import React from 'react'
import fetchTodos from '@/lib/fetchTodos'
import Todo from './Todo'

export default async function TodoList() {
    const todos  = await fetchTodos()

    const sortedTodo = todos.reverse() 

    const content = (
    <>
        {sortedTodo.map(todo =>(
            <Todo key={todo.id}{...todo} />
    ))}
    </>
    )
  return content
}
