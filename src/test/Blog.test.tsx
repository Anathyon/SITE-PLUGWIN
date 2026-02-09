import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BlogSection } from '../components/sections/BlogSection';
import { BlogPost } from '../components/pages/BlogPost';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { blogPosts } from '../data/content';
describe('BlogSection', () => {
  it('renders the blog title', () => {
    render(
      <MemoryRouter>
        <BlogSection />
      </MemoryRouter>
    );
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('renders all blog posts', () => {
    render(
      <MemoryRouter>
        <BlogSection />
      </MemoryRouter>
    );
    blogPosts.forEach(post => {
      const elements = screen.getAllByText(post.title);
      expect(elements.length).toBeGreaterThan(0);
    });
  });
});

describe('BlogPost', () => {
  it('renders specialized post content', () => {
    const post = blogPosts[0];
    render(
      <MemoryRouter initialEntries={[`/blog/${post.id}`]}>
        <Routes>
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(post.title)).toBeInTheDocument();
  });

  it('renders "Post não encontrado" for invalid id', () => {
    render(
      <MemoryRouter initialEntries={['/blog/999']}>
        <Routes>
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Post não encontrado')).toBeInTheDocument();
  });
});
