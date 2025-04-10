import { http, HttpResponse } from "msw";
import postTodo from "../postTodo";
import { server } from "@/mocks/server";

describe("postTodos lib function", () => {
  it("should return a posted todo item", async () => {
    const postedTodo = await postTodo("Test Todo");
    expect(postedTodo).toEqual({
      userId: 1,
      title: "Test Todo",
      completed: false,
      id: 5,
    });
  });

  it("should fail with error", async () => {
    server.use(
      http.post("/todos", async ({ params }) => {
        return HttpResponse.json(null, { status: 400 });
      })
    );
    expect.assertions(1);
    try {
      await postTodo("Test Todo");
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message).toBe("Failed to post new Todo");
      }
    }
  });
});
