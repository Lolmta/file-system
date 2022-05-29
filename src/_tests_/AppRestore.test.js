import App from "../App";

import { store } from "../store";
import { setLastDeleted } from "../store/actions/actionCreators";

import React from "react";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "@testing-library/react";

describe("Restore btn test", () => {
  beforeEach(() => {
    act(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });
  });

  let deleteButton;

  test("should render the restore btn", () => {
    deleteButton = screen.getByRole("button");
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton.textContent).toBe("Restore last deleted");
  });

  test("should be disabled", () => {
    deleteButton = screen.getByRole("button");
    expect(deleteButton).toBeDisabled();
  });

  test("should not be disabled", async () => {
    act(() => {
      store.dispatch(setLastDeleted({ name: "App.js" }));
    });
    deleteButton = await screen.findByRole("button");
    expect(deleteButton).not.toBeDisabled();
  });

  test("should work on click if path > 1", async () => {
    deleteButton = await screen.findByRole("button");
    const handleClick = jest.fn();
    let lastDel = {
      name: "App.js",
      path: "/src/App.js",
      type: "file",
      content: null,
    };

    act(() => {
      store.dispatch(setLastDeleted(lastDel));
    });
    deleteButton.addEventListener("click", handleClick);
    act(() => {
      fireEvent.click(deleteButton);
    });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("should work on click if path == 1", async () => {
    deleteButton = await screen.findByRole("button");
    const handleClick = jest.fn();
    let lastDel = {
      name: "App.js",
      path: "/",
      type: "file",
      content: null,
    };
    act(() => {
      store.dispatch(setLastDeleted(lastDel));
    });
    deleteButton.addEventListener("click", handleClick);

    act(() => {
      fireEvent.click(deleteButton);
    });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
