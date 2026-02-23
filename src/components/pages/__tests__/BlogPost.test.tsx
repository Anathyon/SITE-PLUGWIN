import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BlogPost } from '../BlogPost';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { blogPosts } from '../../../data/content';

describe('BlogPost Component', () => {
  it('renders a blog post correctly when a valid ID is provided', () => {
    const post = blogPosts[0];
    render(
      <MemoryRouter initialEntries={[`/blog/${post.id}`]}>
        <Routes>
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText('Voltar')).toBeInTheDocument();
  });

  it('renders "Post não encontrado" when an invalid ID is provided', () => {
    render(
      <MemoryRouter initialEntries={['/blog/99999']}>
        <Routes>
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Post não encontrado')).toBeInTheDocument();
    expect(screen.getByText('Voltar para Home')).toBeInTheDocument();
  });

  it('renders bold text correctly when using ** syntax', () => {
    // Post 4 has ** syntax in content
    const post = blogPosts.find(p => p.id === 4);
    if (!post) throw new Error('Post 4 not found in content');

    render(
      <MemoryRouter initialEntries={[`/blog/${post.id}`]}>
        <Routes>
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );

    // Check for one of the bold keywords in post 4
    expect(screen.getByText('Maior alcance:')).toBeInTheDocument();
    expect(screen.getByText('Maior alcance:').tagName).toBe('STRONG');
  });
});
