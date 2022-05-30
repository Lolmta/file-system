import { render, screen, fireEvent } from '@testing-library/react';
import File from '../File';

const data = {name: 'App.jsx'};

describe('File filling', () => {
  beforeEach(() => {
    render(<File data={data} />);
  });

  test('should display the name', () => {
    const fileName = screen.getByText(data.name);
    expect(fileName).toBeInTheDocument();
  });

  test('should display file icon', () => {
    const fileIcon = screen.getByTestId('file');
    expect(fileIcon).toBeInTheDocument();
  });

  test('should display delete button', () => {
    const deleteButton = screen.getByTestId('onDelete');
    expect(deleteButton).toBeInTheDocument();
  });
});

describe('File button', () => {
  test('the delete button should work on click', () => {
    const handleClick = jest.fn();
    render(<File data={data} onDelete={handleClick} />);
    const deleteButton = screen.getByTestId('onDelete');
    expect(handleClick).not.toBeCalled();
    fireEvent.click(deleteButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
