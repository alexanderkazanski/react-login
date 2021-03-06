import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Authentication component', () => {
  render(<App />);
  const linkElement = screen.getByText(/submit/i);
  expect(linkElement).toBeInTheDocument();
});
