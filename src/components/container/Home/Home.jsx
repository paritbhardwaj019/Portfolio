import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className="container "
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        <img
          src={"https://avatars.githubusercontent.com/u/111231393?s=96&v=4"}
          alt="portfolio"
        />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Parit Bhardwaj</span>{" "}
        </h3>
        <span className="job">Full Stack Developer Based on India</span>
        <span className="text">
          Developer
          <br /> bridging the gap between <br /> front and back end
        </span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          connect with me
        </motion.a>
        <div className="web">Full stack Developer</div>
        <div className="ui">Frontend Developer</div>
        <div className="freelance">Backend Developer</div>
      </div>
    </motion.div>
  );
};

export default Home;
