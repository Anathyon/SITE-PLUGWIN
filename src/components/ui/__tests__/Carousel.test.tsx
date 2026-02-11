import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Carousel } from '../Carousel';

describe('Carousel Component', () => {
  it('renders children correctly', () => {
    render(
      <Carousel showDots showArrows>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    );
    expect(screen.getByText('Slide 1')).toBeDefined();
  });

  it('renders navigation dots', () => {
    const { container } = render(
      <Carousel showDots showArrows>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    );
    const dots = container.querySelectorAll('button[aria-label^="Ir para slide"]');
    expect(dots.length).toBe(2);
  });

  it('renders navigation arrows', () => {
    render(
      <Carousel showDots showArrows>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    );
    expect(screen.getByLabelText('Anterior')).toBeDefined();
    expect(screen.getByLabelText('Próximo')).toBeDefined();
  });
});
