import Tree from "./componets/Tree/Tree";
import { act } from "@testing-library/react";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/index";

test("", () => {
  const handleClick = jest.fn();
  act(() => {
    render(
      <Provider store={store}>
        <App>
          <Tree onDelete={handleClick} />
        </App>
      </Provider>
    );
  });

  let b = screen.getAllByTestId("onDelete");
  act(() => {
    b[0].addEventListener("click", handleClick);
    fireEvent.click(b[0]);
  });

  expect(handleClick).toBeCalled();
});
