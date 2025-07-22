import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  // Sample data - replace with your actual blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'New Collection Launch',
      excerpt: 'We are excited to announce our newest fashion collection. Discover the latest urban contemporary styles from Culturez.',
      date: '2023-06-15',
      author: 'Admin',
      image: '/images/blog/post1.jpg',
      slug: 'new-collection'
    },
    {
      id: 2,
      title: 'Upcoming Fashion Show',
      excerpt: 'Culturez will be showcasing at the major fashion event this season. Get your tickets now!',
      date: '2023-05-28',
      author: 'Admin',
      image: '/images/blog/post2.jpg',
      slug: 'fashion-show'
    },
    {
      id: 3,
      title: 'Sustainable Fashion Initiative',
      excerpt: 'Culturez has launched a new sustainability program with eco-friendly materials and ethical production methods.',
      date: '2023-05-10',
      author: 'Sustainability Team',
      image: '/images/blog/post3.jpg',
      slug: 'sustainability'
    },
    {
      id: 4,
      title: 'Fashion Industry Insights',
      excerpt: 'Join us for an exclusive panel discussion on the future of urban fashion, featuring industry leaders.',
      date: '2023-04-22',
      author: 'Events Team',
      image: '/images/blog/post4.jpg',
      slug: 'industry-insights'
    }
  ];

  return (
    <div className="blog-page">
      <section className="blog-section blog-list-section">
        <div className="blog-container">
          <h2 className="blog-section-title">News & Blog</h2>
          <p className="blog-section-subtitle">
            Stay updated with the latest news, announcements, and insights from Culturez
          </p>
          
          <div className="blog-grid">
            {blogPosts.map(post => (
              <div key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><FaCalendarAlt /> {new Date(post.date).toLocaleDateString()}</span>
                    <span><FaUser /> {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="blog-read-more">
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;