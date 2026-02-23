import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BlogSection } from '../components/sections/BlogSection';
import { MemoryRouter } from 'react-router-dom';
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

  it('renders blog post titles in the section', () => {
    render(
      <MemoryRouter>
        <BlogSection />
      </MemoryRouter>
    );
    // In BlogSection, usually only a subset or simple titles are shown
    const firstPost = blogPosts[0];
    const elements = screen.getAllByText(firstPost.title);
    expect(elements.length).toBeGreaterThan(0);
  });
});
