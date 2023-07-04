import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Assuming you are using React Router for navigation
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Banner from "./data/images/banner.svg";


const AnimationPage = () => {
  return (
    <div className="animation-container">
      <div className="animation-content">
        <div style={{ width: "640px" }} className="animation_title">
          <motion.h1
            style={{ fontSize: "5em", height:'190px' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Discover your perfect fit!")
                  .pauseFor(60000)
                  .deleteAll()
                  .start();
              }}
            />
          </motion.h1>
          <Link to='/home' style={{textDecoration: 'none'}}>
          <motion.div initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }} className="header__container__button">Get Started</motion.div>
          </Link>
        </div>
        <motion.div
          style={{
            backgroundImage: `url(${Banner})`,
            width: "862px",
            height: "70vh",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default AnimationPage;
