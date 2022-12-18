import { screen, fireEvent, render } from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";
import App from "../page/App";

describe("Testando Todo App", () => {
  it("App Todo List Default", () => {
    render(<App />);

    let buttonAddTodo = screen.getByRole("button", { name: /\+/i });
    let inputText = screen.getByRole("textbox") as HTMLInputElement;

    expect(buttonAddTodo).toBeInTheDocument();
    expect(inputText.value).toBe("");
  });

  it("Funcionalidade Todo List", () => {
    render(<App />);

    let buttonAddTodo = screen.getByRole("button", { name: /\+/i });
    let inputText = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(inputText, {
      target: {
        value: "teste",
      },
    });

    expect(inputText.value).toBe("teste");
    fireEvent.click(buttonAddTodo);

    expect(screen.getByText(/teste/i)).toBeInTheDocument();

    let inputChecked = screen.getByRole("checkbox") as HTMLInputElement; 
    let buttonRemove = screen.getByTestId("button-remove")

    fireEvent.click(inputChecked);

    expect(inputChecked.checked).toBe(true);

    expect(screen.getByText("teste")).toHaveClass("finished-task"); 
    
    
    fireEvent.click(buttonRemove) 
    expect(screen.queryByText("teste")).not.toBeInTheDocument()

  });
});
