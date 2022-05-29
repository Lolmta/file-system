import App from "../App";
import Tree from "../componets/Tree/Tree";

import { store } from "../store";

import React from "react";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "@testing-library/react";


test('Delete something', () => {
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
      deleteBtns[3].addEventListener("click", handleClick);
      fireEvent.click(deleteBtns[3]);
    });

    expect(handleClick).toBeCalled();
  });