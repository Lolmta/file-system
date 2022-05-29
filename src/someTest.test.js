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
          <App/>
        </Provider>
      );
    });
    const root = screen.getByText('root')

});
