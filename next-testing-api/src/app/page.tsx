"use client";

import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { useState } from "react";
import type { Todo } from "@/types/Todo";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
