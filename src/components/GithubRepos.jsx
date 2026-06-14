import React, { useEffect, useState } from 'react';
import { Star, GitFork, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import './GithubRepos.css';

const GithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/saigoud1000/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) {
            const sorted = data.filter(r => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);
            setRepos(sorted);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching repos", err);
        setLoading(false);
      });
  }, []);

  if (loading || repos.length === 0) return null;

  return (
    <section className="github-section container">
      <h2 className="section-title">Open Source Activity</h2>
      <div className="github-grid">
        {repos.map((repo, idx) => (
          <motion.a 
            href={repo.html_url} 
            target="_blank" 
            rel="noreferrer" 
            key={repo.id} 
            className="repo-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="repo-header">
              <BookOpen size={20} className="repo-icon" />
              <h3>{repo.name}</h3>
            </div>
            <p className="repo-desc">{repo.description || "No description provided."}</p>
            <div className="repo-stats">
              {repo.language && <span className="repo-lang"><span className="lang-dot"></span>{repo.language}</span>}
              <span className="repo-stat"><Star size={14}/> {repo.stargazers_count}</span>
              <span className="repo-stat"><GitFork size={14}/> {repo.forks_count}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default GithubRepos;
