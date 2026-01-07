import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaAws, FaAngular, FaBrain } from 'react-icons/fa';
import { SiDotnet, SiFlutter, SiTensorflow, SiNextdotjs } from 'react-icons/si';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import './Header.scss';

const Header = () => {
  const [heroData, setHeroData] = useState({
    heading: "Principal Full Stack & AI Engineer",
    subtext: "Bridging the gap between robust Enterprise Systems (.NET/React) and Applied AI Solutions.",
    imgUrl: images.profile
  });

  // Skills list for the scrolling ticker
  const tickerItems = ['Python', 'React', 'TensorFlow', 'Node.js', 'SQL', 'AWS', 'Tableau', 'Figma', 'Docker', 'Next.js'];

  useEffect(() => {
    // Fetch data from Sanity
    const query = '*[_type == "about"][0]';

    client.fetch(query).then((data) => {
      if (data) {
        setHeroData({
          heading: data.heroHeading || "Forging Intelligence",
          subtext: data.heroText || "Data Scientist & Dev",
          imgUrl: data.imgUrl ? urlFor(data.imgUrl) : images.profile
        });
      }
    });
  }, []);

  return (
    <div className="app__header app__flex">

      {/* --- Left Side: Typography --- */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="app__header-info"
      >
        <div className="header-content">
          <p className="p-text" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
            👋 Hi, I'm
          </p>
          <h1>Sabiran Thapa</h1>
          <p>
            {heroData.subtext} <br />
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1rem', opacity: 0.8 }}>
              📍 Based in Toronto, Canada
            </span>
          </p>
          <a href="#contact" className="p-text-btn">Let's Talk</a>
        </div>
      </motion.div>

      {/* --- Right Side: Image --- */}
      {/* --- Right Side: Image --- */}
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.95, 1] }}
        transition={{ duration: 0.8, delayChildren: 0.5, ease: 'easeOut' }}
        className="app__header-img"
      >
        <img src={heroData.imgUrl} alt="profile_bg" />

        {/* Modern Blur Blob */}
        <div className="overlay_circle" />
      </motion.div>

      {/* --- Tech Stack (Static & Professional) --- */}
      <motion.div
        className="tech-stack-static"
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="p-text" style={{ marginBottom: '1rem', opacity: 0.6 }}>Trusted Expertise In</p>
        <div className="tech-badges">
          {[
            { icon: <SiDotnet />, name: '.NET' },       // Your 3+ years core experience
            { icon: <FaAngular />, name: 'Angular' },   // Shows enterprise frontend skill
            { icon: <SiNextdotjs />, name: 'Next.js' }, // Shows modern frontend skill
            { icon: <FaPython />, name: 'Python' },     // The bridge between Backend & AI
            { icon: <SiFlutter />, name: 'Flutter' },   // Shows you can do Mobile too
            { icon: <FaBrain />, name: 'Applied AI' }   // "Applied AI" sounds more professional than generic AI/ML
          ].map((item, index) => (
            <div className="tech-badge" key={index} title={item.name}>
              <span className="badge-icon">{item.icon}</span>
              <span className="badge-text">{item.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default AppWrap(Header, 'home');