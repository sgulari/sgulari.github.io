import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './Blog.css';

const CONTENT = {
  'zero-downtime': `
# Zero Downtime Migrations at 10k TPS

Migrating a core banking system that serves 55M+ retail accounts requires extensive planning.

## The Challenge
When you are processing 10,000 transactions per second, even a 5-minute maintenance window means dropping millions of events. 

## The Solution
We employed a robust Blue/Green deployment strategy combined with Kafka for event buffering. During the cutover, the old system continued to process traffic while the new system synced the data asynchronously.
  `,
  'aws-cost': `
# Optimizing AWS ECS for $30k Monthly Savings

Cloud costs can easily spiral out of control. Here is how we reigned them in.

## Spot Instances
By moving stateless, fault-tolerant workloads to EC2 Spot Instances, we immediately saw a 60% reduction in compute costs.

## Right-sizing Tasks
We used New Relic to analyze historical CPU/Memory usage and aggressively scaled down over-provisioned ECS task definitions.
  `
};

const BlogPost = () => {
  const { slug } = useParams();
  const markdown = CONTENT[slug] || '# Post Not Found';

  return (
    <div className="blog-post-container container">
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      <div className="glass-card article-content">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
