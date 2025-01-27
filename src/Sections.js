import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 1, title: 'Section 1', content: 'This is the content of Section 1.' },
  { id: 2, title: 'Section 2', content: 'This is the content of Section 2.' },
  { id: 3, title: 'Section 3', content: 'This is the content of Section 3.' },
  { id: 4, title: 'Section 4', content: 'This is the content of Section 4.' },
  { id: 5, title: 'Section 5', content: 'This is the content of Section 5.' },
];

function Sections() {
  return (
    <div className="sections">
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Sections;
