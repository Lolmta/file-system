import React from "react";
import App from "../App";

import { store } from "../store";

import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";

test("should delete all data", () => {
  const { unmount } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  let deleteBtns = screen.getAllByTestId("onDelete");
  fireEvent.click(deleteBtns[0]);

  const deletionNotice = screen.getByText(/everything has been removed/i);
  expect(deletionNotice).toBeInTheDocument();
  
  unmount();
});
