import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

import { Mdschool, MdSecurity, MdAutoGraph } from 'react-icons/md'; // Use Generic Material Icons if specific ones fail, or just use text for now if unsure of package
// Better to use safe icons. Let's use `react-icons/md` or `ai` if available.
// Checking imports first. Work.jsx used `ai`.
import { AiOutlineSafety, AiOutlineRise, AiOutlineTeam, AiFillTrophy } from 'react-icons/ai';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
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
          <h2>About Me</h2>
          <p>
            I am a <strong>Full Stack & AI Developer</strong> with 3+ years of experience building scalable systems.
            My background spans enterprise .NET development at <strong>Crestline</strong>, mobile engineering at <strong>Revature</strong>,
            and advanced AI research in <strong>LLM Fine-Tuning</strong>.
          </p>
        </motion.div>

        {/* --- BENTO ITEM 2: Impact Highlight (Tall Card) --- */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1, type: 'tween' }}
          className="app__profile-item item-stack"
        >
          <h2>Key Impact</h2>
          <div className="impact-list">
            <div className="impact-item">
              <AiOutlineTeam size={25} style={{ color: 'var(--primary-color)' }} />
              <div>
                <h3>Slo-Pitch Ontario</h3>
                <p>Designed a large-scale registration system serving thousands of users (ASP.NET & MySQL).</p>
              </div>
            </div>
            <div className="impact-item">
              <AiOutlineRise size={25} style={{ color: 'var(--secondary-color)' }} />
              <div>
                <h3>Applied AI Solutions</h3>
                <p>Fine-tuned multimodal LLMs to automate image-to-text generation for complex datasets.</p>
              </div>
            </div>
            <div className="impact-item">
              <AiOutlineSafety size={25} style={{ color: 'var(--primary-color)' }} />
              <div>
                <h3>Secure Systems</h3>
                <p>Built E2EE Flutter chat apps and banking-grade payment gateways in React Native.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- BENTO ITEM 3: Education & Certs (New!) --- */}
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
              <p><strong>Postgrad: Applied A.I. Solutions</strong><br />George Brown College</p>
            </div>
            <div className="edu-item">
              <span>2018</span>
              <p><strong>Diploma in Computer Programming</strong><br />Seneca College</p>
            </div>
            <div className="edu-item">
              <span>2012</span>
              <p><strong>B.E. Electronics & Communication</strong><br />ACEM, Nepal</p>
            </div>
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