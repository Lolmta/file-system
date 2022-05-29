import Folder from './Folder';
import { render, screen, fireEvent } from '@testing-library/react';

const data = { name: 'App.jsx' };

describe('Folder filling', () => {
  beforeEach(() => {
    render(<Folder data={data} />);
  });
  test('should display the name', () => {
    const fileName = screen.getByTestId('file-name');
    expect(fileName).toHaveTextContent(data.name);
  });

  test('should display delete button', () => {
    const deleteButton = screen.getByTestId('onDelete');
    expect(deleteButton).toBeInTheDocument();
  });

  test('should display toggle button', () => {
    const toggleButton = screen.getByTestId('toggle-button');
    expect(toggleButton).toBeInTheDocument();
  });
});

describe('Folder buttons work', () => {
  test('the delete button should work on click', () => {
    const handleClick = jest.fn();
    render(<Folder data={data} onDelete={handleClick} />);
    const deleteButton = screen.getByTestId('onDelete');
    expect(handleClick).not.toBeCalled();
    fireEvent.click(deleteButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('toggle button should change icon on click', async () => {
    render(<Folder data={data} />);
    const toggleButton = screen.getByTestId('toggle-button');
    let folderIcon;
    folderIcon = await screen.findByTestId('folder-close');
    expect(folderIcon).toBeInTheDocument();
    fireEvent.click(toggleButton);
    folderIcon = await screen.findByTestId('folder-open');
    expect(folderIcon).toBeInTheDocument();
    fireEvent.click(toggleButton);
    folderIcon = await screen.findByTestId('folder-close');
    expect(folderIcon).toBeInTheDocument();
  });
});
