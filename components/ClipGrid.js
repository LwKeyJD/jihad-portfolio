'use client';

import { useState } from 'react';

const gradients = [
  'linear-gradient(135deg,#1a2530,#0d3b36)',
  'linear-gradient(135deg,#241a10,#3b2a0d)',
  'linear-gradient(135deg,#1a1f30,#2a1a3b)',
  'linear-gradient(135deg,#1a2b25,#0d3b2c)',
];

export default function ClipGrid({ clips, hideFilters }) {
  const [filter, setFilter] = useState('all');
  const softwares = ['all', ...new Set(clips.map((c) => c.software).filter(Boolean))];
  const filtered = filter === 'all' ? clips : clips.filter((c) => c.software === filter);

  return (
    <>
      {!hideFilters && softwares.length > 1 && (
        <div className="filters">
          {softwares.map((s) => (
            <div
              key={s}
              className={`filter-chip${filter === s ? ' active' : ''}`}
              onClick={() => setFilter(s)}
            >
              {s}
            </div>
          ))}
        </div>
      )}
      <div className="clip-grid">
        {filtered.length === 0 && (
          <div className="empty-note">
            No clips here yet — sign in and use the <span className="mono">upload</span> form to add one.
          </div>
        )}
        {filtered.map((c, i) => (
          <a
            key={c.id}
            className="clip-card"
            href={c.video_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="clip-thumb" style={{ background: gradients[i % gradients.length] }}>
              <div className="play-icon"></div>
            </div>
            <div className="clip-meta">
              <div className="ctitle">{c.title}</div>
              <div className="csoft mono">Edited in {c.software}</div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
