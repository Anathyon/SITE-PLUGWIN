import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Projects } from '../Projects';

describe('Projects Component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    );
    expect(screen.getByText('Projetos em Destaque')).toBeDefined();
  });

  it('displays project description', () => {
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    );
    expect(screen.getByText(/Conheça alguns dos nossos casos de sucesso/i)).toBeDefined();
  });
});
