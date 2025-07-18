import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  // Sample data - replace with your actual blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'New Artist Signed to Tizzy Camp',
      excerpt: 'We are excited to announce our newest signing to the label. Join us in welcoming this talented artist to the Tizzy Camp family.',
      date: '2023-06-15',
      author: 'Admin',
      image: '/images/blog/post1.jpg',
      slug: 'new-artist-signed'
    },
    {
      id: 2,
      title: 'Upcoming Music Festival Appearance',
      excerpt: 'Several Tizzy Camp artists will be performing at the major music festival this summer. Get your tickets now!',
      date: '2023-05-28',
      author: 'Admin',
      image: '/images/blog/post2.jpg',
      slug: 'festival-appearance'
    },
    {
      id: 3,
      title: 'Studio Upgrade Complete',
      excerpt: 'G.O.E Records has completed a major studio upgrade with new equipment and acoustic treatments for even better sound quality.',
      date: '2023-05-10',
      author: 'Studio Manager',
      image: '/images/blog/post3.jpg',
      slug: 'studio-upgrade'
    },
    {
      id: 4,
      title: 'Music Industry Workshop',
      excerpt: 'Join us for a free workshop on navigating the music industry, featuring guest speakers from across the industry.',
      date: '2023-04-22',
      author: 'Events Team',
      image: '/images/blog/post4.jpg',
      slug: 'industry-workshop'
    }
  ];

  return (
    <div className="blog-page">
      <section className="section blog-list-section">
        <div className="container">
          <h2 className="section-title">News & Blog</h2>
          <p className="section-subtitle">
            Stay updated with the latest news, announcements, and insights from Tizzy Camp
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
                  <Link to={`/blog/${post.slug}`} className="read-more">
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