import React, { useState } from 'react';
import { Play, X, Film, PlayCircle } from 'lucide-react';

const VideoGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [playingVideo, setPlayingVideo] = useState(null);

  const videoItems = [
    {
      id: 1,
      title: "Fitness Gym Enrollment Reel",
      category: "Reels & Ads",
      client: "FitnessZone Gyms",
      desc: "Short high-energy promotional video highlighting registration discounts, edited with CapCut."
    },
    {
      id: 2,
      title: "SaaS Search Bidding Setup Walkthrough",
      category: "Case Studies",
      client: "SyncFlow Solutions",
      desc: "Campaign screen recording detailing exact keywords bids structure and search queries rules."
    },
    {
      id: 3,
      title: "Healthy Organic Recipe Short Ad",
      category: "Reels & Ads",
      client: "GoOrganic Foods",
      desc: "Cooking and recipe reels formatted for Instagram Stories and Reels to maximize comments."
    },
    {
      id: 4,
      title: "Apex Property Overview Shorts",
      category: "Reels & Ads",
      client: "Apex Realty Group",
      desc: "Architectural real estate panning clips utilizing speed ramps and background beats."
    },
    {
      id: 5,
      title: "E-Commerce SEO Technical Diagnostics Video",
      category: "Case Studies",
      client: "Elite Fashion",
      desc: "Detailed video report sent to clients analyzing console warnings and indexing results."
    },
    {
      id: 6,
      title: "HAL Responsive UI Walkthrough",
      category: "Interactive Promos",
      client: "Hindustan Aeronautics Limited",
      desc: "A structural presentation video highlighting responsive grid layouts and clean code structure."
    }
  ];

  const categories = ['All', 'Reels & Ads', 'Case Studies', 'Interactive Promos'];

  const filteredVideos = activeFilter === 'All'
    ? videoItems
    : videoItems.filter(v => v.category.toLowerCase() === activeFilter.toLowerCase());

  const handlePlayVideo = (video) => {
    setPlayingVideo(video);
  };

  const handleClosePlayer = () => {
    setPlayingVideo(null);
  };

  return (
    <div className="container section fade-in">
      <div className="section-header">
        <span className="section-subtitle">Video Content</span>
        <h2 className="section-title">Video Portfolio</h2>
        <p className="section-desc">
          Browse through short-form social reels, video ads, and structural walk-throughs edited with CapCut. Click any preview card to run the demo player.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-tab-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of video items */}
      <div className="video-grid">
        {filteredVideos.map((video) => (
          <div key={video.id} className="video-card">
            <div 
              className="video-thumbnail-wrapper"
              onClick={() => handlePlayVideo(video)}
            >
              <div className="video-mock-svg">
                <Film size={44} />
              </div>
              <div className="video-play-btn" aria-label="Play video">
                <Play size={20} fill="currentColor" />
              </div>
            </div>

            <div className="video-info">
              <span className="badge" style={{ alignSelf: 'flex-start', marginBottom: '8px', fontSize: '10px' }}>
                {video.category}
              </span>
              <h3 className="video-title">{video.title}</h3>
              <p className="video-desc">{video.desc}</p>
              <span style={{ fontSize: '11px', color: 'var(--text-dark)', marginTop: '12px', display: 'block', fontWeight: 600 }}>
                Client: {video.client}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      {playingVideo && (
        <div className="modal-overlay" onClick={handleClosePlayer}>
          <div className="modal-content" style={{ maxWidth: '800px', background: 'var(--bg-darker)' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleClosePlayer} aria-label="Close Video Player">
              <X size={20} />
            </button>

            <div className="video-player-container">
              {/* Mock Video Stream Interface */}
              <div className="video-placeholder-player">
                <PlayCircle size={64} style={{ color: 'var(--secondary)' }} />
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--text-white)' }}>{playingVideo.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    [ Stream Placeholder: {playingVideo.client} Asset File ]
                  </p>
                </div>
              </div>

              {/* Custom Video Control elements */}
              <div className="video-player-bar">
                <div className="video-progress-bg">
                  <div className="video-progress-fill"></div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-light)', fontSize: '13px' }}>
                  <Play size={14} fill="currentColor" />
                  <span>0:32 / 1:30</span>
                </div>

                <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>
                  Category: {playingVideo.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
