import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";
import userEvent from "@testing-library/user-event";
import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";

//integgration test end to end testing estimate userEvent
describe("Home", () => {
  it("should add a new todo", async () => {
    render(<Home />);

    const input = screen.getByPlaceholderText("New Todo");
    await userEvent.type(input, "My new todo");
    expect(input).toHaveValue("My new todo");

    const button = screen.getByRole("button", {
      name: "Submit",
    });
    await userEvent.click(button);
    waitFor(
      () => {
        expect(button).toHaveValue("");
      },
      { timeout: 2000 }
    );

    const data = await screen.findByText("My new todo");
    //findByText is async, getByText is sync
    expect(data).toHaveTextContent("My new todo");
  });
  it("should not add a new todo if the request fails", async () => {
    render(<Home />);

    server.use(
      http.post("/todos", async () => {
        return HttpResponse.json(null, { status: 400 });
      })
    );

    const input = screen.getByPlaceholderText("New Todo");
    await userEvent.type(input, "My new todo");
    expect(input).toHaveValue("My new todo");

    const button = screen.getByRole("button", {
      name: "Submit",
    });
    await userEvent.click(button);
    waitFor(
      () => {
        expect(button).toHaveValue("");
      },
      { timeout: 2000 }
    );

    const data = await screen.queryByText("My new todo");
    //findByText is async, getByText is sync
    expect(data).not.toBeInTheDocument();
  });
  it("should update a todo", async () => {
    render(<Home />);

    const checkboxArray = (await screen.findAllByRole(
      "checkbox"
    )) as HTMLInputElement[];
    const checkbox = checkboxArray[0];
    expect(checkbox).not.toBeChecked(); //it is false = not checked
    await userEvent.click(checkbox);
    waitFor(() => {
      expect(checkbox).toBeChecked();
    });
  });
  it("should not update a todo if the request fails", async () => {
    render(<Home />);

    const checkboxArray = (await screen.findAllByRole(
      "checkbox"
    )) as HTMLInputElement[];
    const checkbox = checkboxArray[0];
    expect(checkbox).not.toBeChecked(); //it is false = not checked

    server.use(
      http.put("/todos/:id", ({ params }) => {
        // Return a 400 error with no data
        return new HttpResponse(null, { status: 400 });
      })
    );

    await userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });
  it("should delete a todo", async () => {
    render(<Home />);

    //not to be in document use queryBy(should be there) instead of getBy(might get error)
    const todoText = await screen.findByText("Write Code 💻");
    expect(todoText).toBeInTheDocument();

    const buttons = await screen.findAllByTestId("delete-button");
    const button = buttons[0];
    await userEvent.click(button);

    expect(todoText).not.toBeInTheDocument();
    //use queryByText
  });
  it("should not delete a todo if the request fails", async () => {
    render(<Home />);

    const checkboxArray = (await screen.findAllByRole(
      "checkbox"
    )) as HTMLInputElement[];
    const checkbox = checkboxArray[0];
    expect(checkbox).toBeInTheDocument();

    server.use(
      http.delete(`/todos/${checkbox.id}`, () => {
        return HttpResponse.json(null, { status: 400 });
      })
    );

    const buttons = await screen.findAllByTestId("delete-button");
    const button = buttons[0];
    await userEvent.click(button);

    const todoText = screen.queryByText("Write Code 💻");
    expect(todoText).toBeInTheDocument();

    //use queryByText
  });
});
