'use client';

import { useEffect, useState } from 'react';

export default function HearingRecordCard() {
  const [phase, setPhase] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      setPhase(5);
      setScore(78);
      return;
    }

    // Animation timeline
    const timers = [
      setTimeout(() => setPhase(1), 200),  // Case No
      setTimeout(() => setPhase(2), 800),  // Filed
      setTimeout(() => setPhase(3), 1200), // Heard
      setTimeout(() => {
        setPhase(4);
        // Animate score from 0 to 78
        let current = 0;
        const interval = setInterval(() => {
          current += Math.ceil((78 - current) / 4);
          if (current >= 78) {
            current = 78;
            clearInterval(interval);
          }
          setScore(current);
        }, 30);
      }, 1600),
      setTimeout(() => setPhase(5), 2200), // Finding + Seal
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="record-card" aria-label="Hearing record card showing case SW-01/0247 scored 78 and listed">
      <div className="record-row">
        <span className="record-label">CASE NO.</span>
        <span className="record-value" style={{ opacity: phase >= 1 ? 1 : 0 }}>SW-01/0247</span>
      </div>
      <div className="record-row">
        <span className="record-label">FILED</span>
        <span className="record-value" style={{ opacity: phase >= 2 ? 1 : 0 }}>14 Aug 2026</span>
      </div>
      <div className="record-row">
        <span className="record-label">HEARD</span>
        <span className="record-value" style={{ opacity: phase >= 3 ? 1 : 0 }}>02 Sep 2026</span>
      </div>
      
      <div className="record-divider"></div>
      
      <div className="record-row">
        <span className="record-label">SUNWAI SCORE</span>
        <span className="record-value">
          <span style={{ opacity: phase >= 4 ? 1 : 0, transition: 'opacity 0.2s' }}>{score.toString().padStart(2, '0')}</span>
          <span className="record-seal" style={{ opacity: phase >= 5 ? 1 : 0, transition: 'opacity 0.2s, transform 0.2s', transform: phase >= 5 ? 'scale(1) rotate(-4deg)' : 'scale(1.5) rotate(0deg)' }}>⊘</span>
        </span>
      </div>
      <div className="record-row">
        <span className="record-label">FINDING</span>
        <span className="record-value" style={{ opacity: phase >= 5 ? 1 : 0, transition: 'opacity 0.2s' }}>Listed</span>
      </div>
    </div>
  );
}
