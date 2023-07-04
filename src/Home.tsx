import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import jobs from './data/output_file.json';
import JobCard from './JobCard.jsx';
import { motion } from 'framer-motion';



import './App.css';
import Blog from './blog/Blog';

const sections = Object.keys(jobs).map(title => {
    const firstWord = title.split(' ')[0];
    return { firstWord, title, url: '/some-url' };
  });
  

const Home = () => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
    return (
        <>
        {/* <div className="main_head">
              <h1>JOB CATEGORIES</h1>
            </div> */}
          <div className='main'>
            
            <div className='job_cards'>
            {sections.map((job, index) => (
            <motion.div
              key={index}
              className="job-card-wrapper"
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <JobCard
              
                title={job.title}
                image={job.title}
                firstWord={job.firstWord}
              />
            </motion.div>
          ))}

          </div>
          </div>
        </>
      );
}

export default Home