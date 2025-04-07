import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";
import userEvent from "@testing-library/user-event";

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
    expect(button).toHaveValue("");

    const data = await screen.findByText("My new todo");
    //findByText is async, getByText is sync
    expect(data).toHaveTextContent("My new todo");
  });

  it("should update a todo", async () => {
    render(<Home />);

    const checkbox = screen.getAllByRole("checkbox")[0] as HTMLInputElement;
    expect(checkbox).not.toBeChecked(); //it is false = not checked
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked(); // it is true = checked
  });

  it("should delete a todo", async () => {
    render(<Home />);

    //not to be in document use queryBy(should be there) instead of getBy(might get error)
    const todoText = screen.queryByText("Write Code 💻");
    expect(todoText).toBeInTheDocument();

    const button = screen.getAllByTestId("delete-button")[0];
    await userEvent.click(button);

    expect(todoText).not.toBeInTheDocument();
    //use queryByText
  });
});
