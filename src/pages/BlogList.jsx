import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const POSTS = [
  { id: 'zero-downtime', title: 'Zero Downtime Migrations at 10k TPS', date: 'Oct 2023', summary: 'How we orchestrated a cloud migration strategy across 20+ product teams.' },
  { id: 'aws-cost', title: 'Optimizing AWS ECS for $30k Monthly Savings', date: 'Jul 2023', summary: 'Re-architecting ECS and Lambda workloads to slash our AWS bill.' }
];

const BlogList = () => {
  return (
    <div className="blog-container container">
      <h2 className="section-title">Engineering Blog</h2>
      <div className="blog-grid">
        {POSTS.map(post => (
          <Link to={`/blog/${post.id}`} key={post.id} className="blog-card glass-card">
            <h3>{post.title}</h3>
            <span className="blog-date">{post.date}</span>
            <p>{post.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
