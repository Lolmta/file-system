import React from "react";
import App from "../App";
import Tree from "../componets/Tree/Tree";

import { store } from "../store";

import { Provider } from "react-redux";
import { render, screen, fireEvent, act } from "@testing-library/react";

test("should delete all data", () => {
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

  let deleteBtns = screen.getAllByTestId("onDelete");

  act(() => {
    deleteBtns[0].addEventListener("click", handleClick);
    fireEvent.click(deleteBtns[0]);
  });

  expect(handleClick).toBeCalled();
});
