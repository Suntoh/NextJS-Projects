import { http, HttpResponse } from "msw";
//msw haws changed rest to http
//docs: https://mswjs.io/docs/network-behavior/rest/

export const handlers = [
  http.get("/todos", () => {
    return HttpResponse.json(
      [
        {
          id: 1,
          title: "Todo 1",
          completed: false,
        },
        {
          id: 2,
          title: "Todo 2",
          completed: true,
        },
        {
          id: 3,
          title: "Todo 3",
          completed: false,
        },
        {
          id: 4,
          title: "Todo 4",
          completed: true,
        },
      ],
      { status: 200 }
    );
  }),
];
