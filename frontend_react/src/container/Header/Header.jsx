import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaAngular, FaBrain, FaMapMarkerAlt, FaHandSparkles } from 'react-icons/fa';
import { SiDotnet, SiFlutter, SiNextdotjs } from 'react-icons/si';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import './Header.scss';

const Header = () => {
  // Hardcoded for immediate update as requested
  const [heroData, setHeroData] = useState({
    heading: "Solving Complex Problems with Logic & AI",
    subtext: "Delivering robust Full Stack solutions for enterprise and startups since 2018.",
    imgUrl: images.profile
  });

  useEffect(() => {
    // Completely disable text overwrite from Sanity to force new headline
    const query = '*[_type == "about"][0]';

    client.fetch(query).then((data) => {
      if (data && data.imgUrl) {
        setHeroData((prev) => ({
          ...prev,
          imgUrl: urlFor(data.imgUrl)
        }));
      }
    });
  }, []);

  return (
    <div className="app__header app__flex">

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="app__header-info"
      >
        <div className="header-content">
          <p className="p-text" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaHandSparkles /> Hi, I'm
          </p>
          <h1>Sabiran Thapa</h1>
          <h2 className="head-text-main">
            {heroData.heading}
          </h2>
          <p>
            {heroData.subtext} <br />
            <span className="location-badge">
              <FaMapMarkerAlt /> Toronto, Canada
            </span>
          </p>
          <a href="#contact" className="p-text-btn">Let's Talk</a>
        </div>

        {/* --- Tech Stack (Moved Inside Info for Proper 2-Col Layout) --- */}
        <motion.div
          className="tech-stack-static"
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="p-text" style={{ marginBottom: '1rem', opacity: 0.6, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
            Trusted Expertise In
          </p>
          <div className="tech-badges">
            {[
              { icon: <SiDotnet />, name: '.NET' },
              { icon: <FaAngular />, name: 'Angular' },
              { icon: <SiNextdotjs />, name: 'Next.js' },
              { icon: <FaPython />, name: 'Python' },
              { icon: <SiFlutter />, name: 'Flutter' },
              { icon: <FaBrain />, name: 'Applied AI' }
            ].map((item, index) => (
              <div className="tech-badge" key={index} title={item.name}>
                <span className="badge-icon">{item.icon}</span>
                <span className="badge-text">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

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

    </div>
  );
};

export default AppWrap(Header, 'home');