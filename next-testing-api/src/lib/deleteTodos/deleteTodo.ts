import { Todo } from "@/types/Todo";

export default async function deleteTodo(todo: Todo): Promise<Partial<Todo>> {
  const res = await fetch(`todos/${todo.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: todo.id }),
  });
  if (!res.ok) throw new Error("Failed to delete Todo");
  return await res.json();
}
