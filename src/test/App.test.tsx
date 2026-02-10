/**
 * Testes para o componente principal App
 */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App Component', () => {
  it('renders navbar', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // Verifica se o logo está presente
    const logo = screen.getByAltText('PlugWin Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders home page sections', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    // Verifica se as seções principais estão presentes
    expect(document.querySelector('#about')).toBeInTheDocument();
    expect(document.querySelector('#services')).toBeInTheDocument();
    expect(document.querySelector('#projects')).toBeInTheDocument();
    expect(document.querySelector('#contact')).toBeInTheDocument();
  });

  it('renders notification component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Adequado à LGPD')).toBeInTheDocument();
  });
});
