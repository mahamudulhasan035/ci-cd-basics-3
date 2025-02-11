import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import Button from '../components/Button';

describe('Button Component', () => {
  it('should renders with correct text', () => {
    render(<Button text="Click Me" onClick={() => {}} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('should calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button text="Click Me" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalled();
  });
});
