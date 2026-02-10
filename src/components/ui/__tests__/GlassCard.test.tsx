/**
 * Testes para o componente GlassCard
 */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GlassCard } from '../GlassCard';

describe('GlassCard Component', () => {
  it('renders children correctly', () => {
    render(
      <GlassCard>
        <div>Test Content</div>
      </GlassCard>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <GlassCard className="custom-class">
        <div>Content</div>
      </GlassCard>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies custom styles', () => {
    const customStyle = { padding: '20px' };
    const { container } = render(
      <GlassCard style={customStyle}>
        <div>Content</div>
      </GlassCard>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.padding).toBe('20px');
  });

  it('has glassmorphism classes', () => {
    const { container } = render(
      <GlassCard>
        <div>Content</div>
      </GlassCard>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('backdrop-blur-md');
    expect(element.className).toContain('rounded-2xl');
  });
});
