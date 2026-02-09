import { render, screen, act } from '@testing-library/react';
import { Notification } from '../Notification';
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('Notification Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('renders with the correct text', () => {
    render(<Notification />);
    expect(screen.getByText('Adequado à LGPD')).toBeInTheDocument();
  });

  it('auto-dismisses after 5 seconds', () => {
    render(<Notification />);
    expect(screen.getByText('Adequado à LGPD')).toBeInTheDocument();
    
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    
    expect(screen.queryByText('Adequado à LGPD')).not.toBeInTheDocument();
  });

  it('dismisses when close button is clicked', async () => {
    render(<Notification />);
    const closeButton = screen.getByRole('button');
    
    act(() => {
      closeButton.click();
    });
    
    expect(screen.queryByText('Adequado à LGPD')).not.toBeInTheDocument();
  });
});
