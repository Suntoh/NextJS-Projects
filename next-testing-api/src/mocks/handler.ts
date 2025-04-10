import { Todo } from "@/types/Todo";
import { http, HttpResponse } from "msw";
//msw haws changed rest to http
//docs: https://mswjs.io/docs/network-behavior/rest/

export const handlers = [
  http.get("/todos", () => {
    return HttpResponse.json(
      [
        {
          userId: 1,
          title: "Wave hello! 👋",
          completed: false,
          id: 1,
        },
        {
          userId: 1,
          title: "Get Coffee ☕☕☕",
          completed: false,
          id: 2,
        },
        {
          userId: 1,
          title: "Go to Work ⚒",
          completed: false,
          id: 3,
        },
        {
          userId: 1,
          title: "Write Code 💻",
          completed: false,
          id: 4,
        },
      ],
      { status: 200 }
    );
  }),
  http.post("/todos", async ({ request }) => {
    console.log("request", request);
    const { title } = (await request.json()) as Todo;

    return HttpResponse.json(
      {
        userId: 1,
        title: title,
        completed: false,
        id: 5,
      },
      { status: 201 }
    );
  }),
  http.put("/todos/:id", async ({ request, params }) => {
    const todo = (await request.json()) as Partial<Todo>;
    // Ensure we're returning a properly structured todo
    return HttpResponse.json(
      {
        userId: todo.userId,
        title: todo.title,
        completed: todo.completed,
        id: params.id, // Use the ID from the URL params
      },
      { status: 200 }
    );
  }),
  http.delete("/todos/:id", async ({ request, params }) => {
    const { id } = params as { id: string };
    return HttpResponse.json(
      {
        id: Number(id),
      },
      { status: 200 }
    );
  }),
];
