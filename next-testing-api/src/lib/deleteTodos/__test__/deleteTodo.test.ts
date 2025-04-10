import { describe } from "node:test";
import deleteTodo from "../deleteTodo";
import { http, HttpResponse } from "msw";
import { server } from "@/mocks/server";

const mockTodo = {
  userId: 1,
  title: "Prim_Suntoh",
  completed: false,
  id: 1,
};

describe("deleteTodo lib function", () => {
  it("should return the deleted todo item", async () => {
    const deletedTodo = await deleteTodo(mockTodo);
    expect(deletedTodo).toEqual({
      id: 1,
    });
  });

  it("should fail with error", async () => {
    server.use(
      http.delete("/todos/:id", async ({ params }) => {
        return HttpResponse.json(null, { status: 400 });
      })
    );
    expect.assertions(1);
    try {
      await deleteTodo(mockTodo);
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message).toBe("Failed to delete Todo");
      }
    }
  });
});
