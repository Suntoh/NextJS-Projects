import { Todo } from "@/types/Todo";

export default async function updateTodo(todo: Todo): Promise<Todo> {
  const res = await fetch(`todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...todo,
      completed: !todo.completed,
    }),
  });

  if (!res.ok) throw new Error("Failed to update Todo");
  const updatedTodo = await res.json();

  return updatedTodo;
}
