"use client";

import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { useState, useEffect } from "react";
import type { Todo } from "@/types/Todo";
import fetchTodos from "@/lib/fetchTodos/fetchTodos";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    async function getTodo() {
      const todosArray = await fetchTodos();
      if (todosArray?.length) setTodos(todosArray);
    }
    getTodo();
  }, []);
  return (
    <>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
