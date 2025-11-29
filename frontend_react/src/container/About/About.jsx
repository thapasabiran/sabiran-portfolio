import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    // We filter in the query to ensure we only get items that actually have a title
    const query = '*[_type == "about" && defined(title)]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        Structuring <span>Chaos</span> <br /> into <span>Logic</span>
      </h2>

      <div className="app__profiles">
        
        {/* --- BENTO ITEM 1: The Bio (Wide Card) --- */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item item-bio"
        >
          <h2>Who I Am</h2>
          <p>
            I don't just write code; I build systems that solve problems. 
            With a background in both <strong>Data Science</strong> and <strong>Full Stack Engineering</strong>, 
            I bridge the gap between complex algorithms and intuitive user interfaces.
          </p>
        </motion.div>

        {/* --- BENTO ITEM 2: Tech Stack (Tall Card) --- */}
        <motion.div
           whileInView={{ opacity: 1, y: 0 }}
           initial={{ opacity: 0, y: 20 }}
           transition={{ duration: 0.5, delay: 0.1, type: 'tween' }}
           className="app__profile-item item-stack"
        >
           <h2>Core Stack</h2>
           <p>Tools of the trade.</p>
           <div className="stack-list">
             <span>Python</span>
             <span>React</span>
             <span>Node.js</span>
             <span>TensorFlow</span>
             <span>SQL</span>
             <span>AWS</span>
             <span>Git</span>
             <span>Sass</span>
             <span>Next.js</span>
             <span>Figma</span>
           </div>
        </motion.div>

        {/* --- BENTO ITEMS 3+: Dynamic Sanity Cards --- */}
        {abouts.map((about, index) => {
          // SAFETY CHECK: If the item has no description or looks empty, don't render it.
          // This prevents the "Hero Text" document from appearing as an empty box.
          if (!about.description && !about.imgUrl) return null;

          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item item-standard"
              key={about.title + index}
            >
              {about.imgUrl && <img src={urlFor(about.imgUrl)} alt={about.title} />}
              
              <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
          );
        })}

      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);