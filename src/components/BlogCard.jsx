import './BlogCard.css';
import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  return (
    <div className="blog-container">
        <Link to={`/blog/${post.id}`}>
          <img src={post.image} alt={post.title} loading="lazy" />
        </Link>
        <div className="blog-meta">
          <span className="blog-author">{post.author}</span>
          <span className="blog-date">{post.date}</span>
        </div>
        <div className="blog-content">
          <Link to={`/blog/${post.id}`}>
            <h3 className="blog-title">{post.title}</h3>
          </Link>
          <p className="blog-description">{post.excerpt}</p>
        </div>
        <Link to={`/blog/${post.id}`} className="blog-read-more">
          Read More →
        </Link>
    </div>
  );
}

export default BlogCard;
