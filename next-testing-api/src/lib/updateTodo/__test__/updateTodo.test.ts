import { describe } from "node:test";
import updateTodo from "../updateTodo";
import { Todo } from "@/types/Todo";
import { use } from "react";
import { title } from "process";
import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";

const mockTodo: Todo = {
  userId: 1,
  title: "Prim_Suntoh",
  completed: false,
  id: 1,
};

describe("updateTodo lib function", () => {
  it("should return the updated todo item", async () => {
    const updatedTodo = await updateTodo(mockTodo);
    expect(updatedTodo).toEqual({
      userId: 1,
      title: "Prim_Suntoh",
      completed: !mockTodo.completed,
      id: "1",
    });
  });

  it("should fail with error", async () => {
    server.use(
      http.put("/todos/:id", async () => {
        return HttpResponse.json(null, { status: 400 });
      })
    );
    expect.assertions(1);
    try {
      await updateTodo(mockTodo);
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message).toBe("Failed to update Todo");
      }
    }
  });
});
