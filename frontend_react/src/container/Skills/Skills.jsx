import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      // Optional: Sort experiences by year if Sanity doesn't
      // data.sort((a, b) => b.year - a.year); 
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & <span>Experience</span></h2>

      <div className="app__skills-container">

        {/* --- LEFT SIDE: CATEGORIZED SKILLS (New!) --- */}
        <motion.div className="app__skills-list-grouped">
          {[
            { title: 'Frontend & Mobile', skills: ['React', 'Next.js', 'Flutter', 'TypeScript'] },
            { title: 'Backend & Cloud', skills: ['C# .NET', 'Node.js', 'AWS', 'SQL'] },
            { title: 'AI & Data', skills: ['Python', 'TensorFlow', 'LLM', 'RAG'] }
          ].map((group, index) => (
            <div className="skill-group" key={index}>
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skill-group-items">
                {group.skills.map((skillName) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-item-pill"
                    key={skillName}
                  >
                    <p className="p-text">{skillName}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* --- RIGHT SIDE: TIMELINE (Merged) --- */}
        <div className="app__skills-exp">
          {/* HARDCODED RESUME EXPERIENCE */}
          {[
            {
              year: '2025',
              works: [{ name: 'Software Developer Co-op', company: 'Eyeo', desc: 'Developing custom Salesforce solutions using Apex and LWC.' }]
            },
            {
              year: '2022',
              works: [{ name: 'Android Developer', company: 'Revature', desc: 'Built enterprise mobile apps with Kotlin, Retrofit, and Jetpack.' }]
            },
            {
              year: '2019',
              works: [{ name: 'Full Stack .NET Dev', company: 'Crestline IT', desc: 'Architected large-scale ASP.NET registration systems.' }]
            }
          ].map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-id={work.name}
                      data-tooltip-content={work.desc}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>

                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="var(--bg-secondary)"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg', // Uses the Surface Color ($bg-secondary)
);