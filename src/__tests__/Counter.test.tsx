import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Counter from '../components/Counter';

describe('Counter Component', () => {
  it('should renders with initial count', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('should increments count when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByText('Increment');

    fireEvent.click(button);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});
