import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import './Header.scss';

const Header = () => {
  const [heroData, setHeroData] = useState({
    heading: "Forging Intelligence With Code",
    subtext: "Data Scientist & Full Stack Developer bridging the gap between raw data and user experience.",
    imgUrl: images.profile
  });

  // Skills list for the scrolling ticker
  const tickerItems = ['Python', 'React', 'TensorFlow', 'Node.js', 'SQL', 'AWS', 'Tableau', 'Figma', 'Docker', 'Next.js'];

  useEffect(() => {
    // Fetch data from Sanity
    const query = '*[_type == "about"][0]'; 

    client.fetch(query).then((data) => {
      if(data) {
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
          <h1>{heroData.heading}</h1>
          <p>{heroData.subtext}</p>
          <a href="#contact" className="p-text-btn">Let's Talk</a>
        </div>
      </motion.div>

      {/* --- Right Side: Image --- */}
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 0.8, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={heroData.imgUrl} alt="profile_bg" />
        
        {/* Decorative circle behind image */}
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="overlay_circle"
        />
      </motion.div>

      {/* --- Tech Stack Ticker (Marquee) --- */}
      <div className="tech-ticker">
        <div className="ticker-track">
          {/* Render list twice to create seamless loop */}
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div className="ticker-item" key={`${item}-${index}`}>
              {item}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AppWrap(Header, 'home');