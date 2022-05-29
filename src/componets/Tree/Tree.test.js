import Tree from './Tree.jsx';
import { render, screen } from '@testing-library/react';

describe('Tree test', () => {
  test('should notify that everything is removed', () => {
    const data = {};
    render(<Tree data={data} />);
    expect(
      screen.getByText(/everything has been removed/i)
    ).toBeInTheDocument();
  });

  test('should render the file', () => {
    const data = {
      type: 'file',
      path: '/src/App.js',
    };
    render(<Tree key={data.path} data={data} />);
    expect(screen.getByTestId('file'));
  });

  test('should render folder', () => {
    const data = {
      type: 'folder',
      path: '/src/App.js',
      content: [{ name: 'App.js' }],
    };
    render(<Tree key={data.path} data={data} />);
    expect(screen.getByTestId('StyledFile'));
  });
});
