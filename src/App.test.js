import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { setLastDeleted } from './store/actions/actionCreators';

import Tree from './componets/Tree/Tree';
import { act } from '@testing-library/react';


describe('Restore btn test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  
  let deleteButton;

  test('should render the restore btn', () => {
    deleteButton = screen.getByRole('button');
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton.textContent).toBe('Restore last deleted');
  });

  test('should be disabled', () => {
    deleteButton = screen.getByRole('button');
    expect(deleteButton).toBeDisabled();
  });

  test('should not be disabled', async () => {
    store.dispatch(setLastDeleted({ name: 'App.js' }));
    deleteButton = await screen.findByRole('button');
    expect(deleteButton).not.toBeDisabled();
  });

  test('should work on click if path > 1', async () => {
    deleteButton = await screen.findByRole('button');
    const handleClick = jest.fn();
    let lastDel = {
      name: 'App.js',
      path: '/src/App.js',
      type: 'file',
      content: null,
    };
    await store.dispatch(setLastDeleted(lastDel));
    deleteButton.addEventListener('click', handleClick);
    fireEvent.click(deleteButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('should work on click if path == 1', async () => {
    deleteButton = await screen.findByRole('button');
    const handleClick = jest.fn();
    let lastDel = {
      name: 'App.js',
      path: '/',
      type: 'file',
      content: null,
    };
    await store.dispatch(setLastDeleted(lastDel));
    deleteButton.addEventListener('click', handleClick);
    fireEvent.click(deleteButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});


describe('Delete btn test', ()=>{
  test('', () => {
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
  
    let deleteBtns = screen.getAllByTestId('onDelete');
    
    act(() => {
      deleteBtns[0].addEventListener('click', handleClick);
      fireEvent.click(deleteBtns[0]);
    });
  
    expect(handleClick).toBeCalled();
  });

})

