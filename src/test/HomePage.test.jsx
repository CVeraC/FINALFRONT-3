import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('muestra el título correcto', () => {
  render(<HomePage />);
  const heading = screen.getByText(/Rick and Morty Characters/i);
  expect(heading).toBeInTheDocument();
});
