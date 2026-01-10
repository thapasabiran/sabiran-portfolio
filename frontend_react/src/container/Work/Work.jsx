import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterButtons, setFilterButtons] = useState(['All']);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);

      // --- SIMPLIFIED CATEGORY FILTERS ---
      // Renamed for "Senior Engineer" appeal as requested
      setFilterButtons(['All', 'Full Stack', 'Mobile Solutions', 'Applied AI']);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => {
          if (!work.tags) return false;
          const tagsLower = work.tags.map(t => t.toLowerCase());

          // Mapping new labels to existing tags
          if (item === 'Full Stack' && (tagsLower.includes('web app') || tagsLower.includes('react') || tagsLower.includes('asp.net') || tagsLower.includes('next.js'))) return true;
          if (item === 'Mobile Solutions' && (tagsLower.includes('mobile app') || tagsLower.includes('flutter') || tagsLower.includes('react native') || tagsLower.includes('ios'))) return true;
          if (item === 'Applied AI' && (tagsLower.includes('ai/ml') || tagsLower.includes('python') || tagsLower.includes('llm') || tagsLower.includes('tensor') || tagsLower.includes('rag'))) return true;

          return false;
        }));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Engineering & <span>AI Showcase</span></h2>

      <div className="app__work-filter">
        {filterButtons.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              {/* Show Project Image if available, else placeholder or nothing */}
              {work.imgUrl && <img src={urlFor(work.imgUrl)} alt={work.title} />}
              {!work.imgUrl && <div className="img-placeholder" style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.05)' }}></div>}

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                {/* Show up to 3 tags */}
                {work.tags && work.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="p-text">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work'
);