import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

// Using consistent Ant Design icons for a clean, professional look
import { AiOutlineSafety, AiOutlineRise, AiOutlineTeam, AiFillThunderbolt } from 'react-icons/ai';

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
          <p>
            I am a <strong>Full Stack & AI Engineer</strong> building solutions <strong>since 2018</strong>.
            My journey spans enterprise .NET architecture at <strong>Crestline</strong>, mobile engineering at <strong>Revature</strong>,
            and delivering independent <strong>SaaS & Web Solutions</strong> for local businesses.
            <br /><br />
            Currently, I specialize in combining robust backend logic (Python/C#) with modern frontend interactivity (Next.js) to solve complex business problems.
          </p>
        </motion.div>

        {/* --- BENTO ITEM 2: Key Impact (Metrics & Tech) --- */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1, type: 'tween' }}
          className="app__profile-item item-stack"
        >
          <h2>Key Impact</h2>
          <div className="impact-list">
            <div className="impact-item">
              <AiOutlineTeam size={25} style={{ color: '#007bff' }} /> {/* Blue for Enterprise */}
              <div>
                <h3>Enterprise Scale</h3>
                <p>Architected the Slo-Pitch Ontario registration system (ASP.NET), managing <strong>thousands of active users</strong> and complex league rosters.</p>
              </div>
            </div>
            <div className="impact-item">
              <AiFillThunderbolt size={25} style={{ color: '#ffc107' }} /> {/* Gold for AI/Speed */}
              <div>
                <h3>Applied AI & RAG</h3>
                <p>Engineered multimodal pipelines to fine-tune LLMs for image-to-text generation and built <strong>SavvyMenu AI</strong>, a RAG-powered concierge.</p>
              </div>
            </div>
            <div className="impact-item">
              <AiOutlineSafety size={25} style={{ color: '#28a745' }} /> {/* Green for Security */}
              <div>
                <h3>Security & Mobile</h3>
                <p>Developed privacy-first mobile apps with <strong>End-to-End Encryption (E2EE)</strong> in Flutter and banking-grade payment gateways in React Native.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- BENTO ITEM 3: Education & Credentials --- */}
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
              <p><strong>Diploma in Computer Programming</strong><br />Seneca College, Toronto</p>
            </div>
            <div className="edu-item">
              <span>2012</span>
              <p><strong>B.E. Electronics & Communication</strong><br />ACEM, Kathmandu</p>
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