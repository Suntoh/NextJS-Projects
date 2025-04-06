import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

//triple A testing method
// Arrange, Act, Assert
// Arrange: Set up the test environment and render the component
// Act: Perform the action that you want to test
// Assert: Check if the expected outcome occurs
describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />); //ARRANGE

    const myElement = screen.getByText("Read our docs"); //ACT
    //need to be the exact text <a>Read our docs</a>

    expect(myElement).toBeInTheDocument(); //ASSERT
  });
  it("should contain the text 'next.js'", () => {
    render(<Home />); //ARRANGE

    const myElement = screen.getByText(/nextjs/i); //ACT
    //can be exact or regex <a>Go to nextjs.org →</a>
    //i=upper or lower case is fine

    expect(myElement).toBeInTheDocument(); //ASSERT
  });
  it("should have a heading", () => {
    render(<Home />); //ARRANGE

    const myElement = screen.getByRole("heading", {
      name: "Learn",
    }); //ACT
    //need to be exact <h2>Learn</h3>

    expect(myElement).toBeInTheDocument(); //ASSERT
  });
});
