import React from "react";
import App from "../App";

import { store } from "../store";

import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";

test("should delete something", () => {
  const { unmount } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  let deleteBtns = screen.getAllByTestId("onDelete");

  expect(deleteBtns[3]).toBeInTheDocument();
  fireEvent.click(deleteBtns[3]);
  expect(deleteBtns[3]).not.toBeInTheDocument();

  unmount();
});
