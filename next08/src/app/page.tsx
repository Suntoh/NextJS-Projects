import Image from 'next/image'
import { Inter } from 'next/font/google'
import  TodoList  from './components/TodoList'
import AddTodo from './components/AddTodo'

const inter = Inter({ subsets: ['latin'] })

export const revalidate = 0

export default function Home() {
  return (
  <>
  <AddTodo />
  
  <TodoList />
  
  
  </>)
}