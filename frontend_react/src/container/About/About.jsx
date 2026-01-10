import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

// Using consistent Ant Design icons for a clean, professional look
import { AiOutlineSafety, AiOutlineTeam, AiFillThunderbolt } from 'react-icons/ai';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about" && defined(title)]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        Bridging <span>Enterprise Logic</span> <br /> with <span>AI Innovation</span>
      </h2>

      <div className="app__profiles">

        {/* --- BENTO ITEM 1: The Bio (Narrative) --- */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item item-bio"
        >
          <h2>About Me</h2>
          I am a <strong>Full Stack & AI Engineer</strong> (since 2018) combining <strong>Enterprise .NET Architecture</strong> with <strong>Applied AI</strong>.
          I build systems—from high-traffic platforms to RAG-powered chatbots—focused on <strong>scalability, security, and impact</strong>.
        </motion.div>

        {/* --- BENTO ITEM 2: Key Impact (Action-Oriented) --- */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1, type: 'tween' }}
          className="app__profile-item item-stack"
        >
          <h2>Key Impact</h2>
          <div className="impact-list">
            <div className="impact-item">
              <AiOutlineTeam size={25} style={{ color: '#007bff' }} />
              <div>
                <h3>High-Traffic Systems</h3>
                <p>Modernized legacy ASP.NET architecture for Slo-Pitch Ontario, enhancing performance for <strong>thousands of active users</strong>.</p>
              </div>
            </div>
            <div className="impact-item">
              <AiFillThunderbolt size={25} style={{ color: '#ffc107' }} />
              <div>
                <h3>Intelligent Automation</h3>
                <p>Engineered <strong>SavvyMenu AI</strong> (RAG/Vector DB) and fine-tuned multimodal LLMs to automate complex image-to-text workflows.</p>
              </div>
            </div>
            <div className="impact-item">
              <AiOutlineSafety size={25} style={{ color: '#28a745' }} />
              <div>
                <h3>Secure Mobile Ops</h3>
                <p>Built privacy-first apps with <strong>End-to-End Encryption (E2EE)</strong> in Flutter and banking-grade payment gateways in React Native.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- BENTO ITEM 3: Education (Cleaned Up) --- */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2, type: 'tween' }}
          className="app__profile-item item-edu"
        >
          <h2>Education</h2>
          <div className="edu-list">
            <div className="edu-item">
              <span>2024</span>
              <p><strong>Postgrad: Applied A.I. Solutions</strong><br />George Brown College, Toronto</p>
            </div>
            <div className="edu-item">
              <span>2018</span>
              <p><strong>Diploma: Computer Programming</strong><br />Seneca College, Toronto</p>
            </div>
            <div className="edu-item">
              <span>2012</span>
              <p><strong>B.E. Electronics Engineering</strong><br />ACEM, Kathmandu</p>
            </div>
          </div>
        </motion.div>

        {/* --- BENTO ITEMS 3+: Dynamic Sanity Cards (CMS Content) --- */}
        {abouts.map((about, index) => {
          // SAFETY CHECK: If the item has no description or looks empty, don't render it.
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