import { useState } from 'react';
import '../styles/Blog.css';
import blogPosts, { blogCategories } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';

function Blog() {
  
  
  return (
    <>
      {/* Hero Section */}
      <div className="blog-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Design Insights & Tips</h1>
          <p>Explore our latest articles on fantasy book cover design, industry trends, and creative inspiration</p>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="posts-container">
          <div className="posts-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export default Blog;
