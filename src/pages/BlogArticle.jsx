import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import blogPosts from '../data/blogPosts';
import '../styles/BlogArticle.css';

const BlogArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="article-not-found">
        <h2>Article Not Found</h2>
        <p>The article you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/blog')} className="back-button">
          ← Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="article-page">
      <div className="article-container">
        <div className="article-header">
          <button onClick={() => navigate('/blog')} className="back-button">
            ← Back to Blog
          </button>
          
          <div className="article-meta">
            <span className="article-author">{post.author}</span>
            <span className="article-date">{post.date}</span>
          </div>

          <h1 className="article-title">{post.title}</h1>

          <div className="article-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="article-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="article-image-container">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="article-content">
          <div className="article-excerpt">
            <p>{post.excerpt}</p>
          </div>

          <div className="article-body">
            <h2>Introduction</h2>
            <p>{post.content}</p>

            <h2>Key Insights</h2>
            <p>
              Understanding the fundamentals is crucial for success in this area. 
              Our research and experience have shown that taking a structured approach 
              yields the best results. This section explores the core concepts that 
              will help you build a strong foundation.
            </p>

            <h2>Best Practices</h2>
            <p>
              Implementation requires careful attention to detail and adherence to 
              proven methodologies. Here are some key practices that have consistently 
              delivered positive outcomes across various scenarios. Following these 
              guidelines will help you avoid common pitfalls.
            </p>

            <h2>Conclusion</h2>
            <p>
              By applying these principles and maintaining a focus on quality, you'll 
              be well-equipped to tackle challenges in this domain. Remember that 
              continuous learning and adaptation are essential for long-term success. 
              We hope this guide provides valuable insights for your journey.
            </p>
          </div>
        </div>

        <div className="article-footer">
          <button onClick={() => navigate('/blog')} className="back-button">
            ← Back to Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
