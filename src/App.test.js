import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { setLastDeleted } from './store/actions/actionCreators';


beforeEach(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

describe("Restore btn", () => {

  let deleteButton

  test('button', () => {
    deleteButton = screen.getByRole('button');
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton.textContent).toBe('Restore last deleted')
  });

  test('button sh be disabled', () => {
    deleteButton = screen.getByRole('button');
    expect(deleteButton).toBeDisabled();
  });

  test('button sh not be disabled', async() => {
    store.dispatch(setLastDeleted({name:'App.js'}))
    deleteButton = await screen.findByRole('button');
    expect(deleteButton).not.toBeDisabled();
  });

  test('button sh not be disabled', async() => {
  
    deleteButton = await screen.findByRole('button');
    const handleClick = jest.fn();
    let lastDel =  {
      name: "App.js",
      path: "/src/App.js",
      type: "file",
      content: null
    }
    await store.dispatch(setLastDeleted(lastDel))
    deleteButton.addEventListener("click",handleClick)
    fireEvent.click( deleteButton)
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('button sh not be disabled', async() => {
    deleteButton = await screen.findByRole('button');
    const handleClick = jest.fn();
    let lastDel =  {
      name: "App.js",
      path: "/",
      type: "file",
      content: null
    }
    await store.dispatch(setLastDeleted(lastDel))
    deleteButton.addEventListener("click",handleClick)
    fireEvent.click( deleteButton)
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
