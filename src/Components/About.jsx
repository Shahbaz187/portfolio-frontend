import React from 'react'
import { animate, motion } from "framer-motion";
const fadeInIp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3,
      staggerChildren: 0.2,
    },
},
};
const About = () => {
  return (
    <section className="container flex  h-[calc(100vh-80px)] w-full flex-col items-center justify-between gap-10 py-14 pb-14 md:flex-row">
      <motion.div
        variants={fadeInIp}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3 }}
        className="flex-1"
      >
        <img
          src="/avatar1.png"
          className="mx-auto w-[80%] sm:w-[70%] md:w-[80%]"
          alt="Avatar"
        />
      </motion.div>
      <motion.div
        variants={fadeInIp}
        initial="hidden"
        animate="show"
        className="flex-1 pb-14  text-black "
      >
        <motion.h4 variants={fadeInIp} className="text-5xl font-semibold">
          About me
        </motion.h4>
        <motion.h2 variants={fadeInIp} className="mb-2 mt-1 opacity-80">
          Web Devloper
        </motion.h2>
        <motion.p variants={fadeInIp} className="md: text-lg">
          Welcome to my portfolio! I'm Shahbaz Ansari, a seasoned MERN stack
          developer with over 2 years of hands-on experience. Specializing in
          crafting captivating front-end websites, I bring a blend of creativity
          and technical expertise to every project. Explore my work and let's
          bring your digital vision to life!
        </motion.p>
        <motion.div variants={fadeInIp} className="mt-4">
          <a
            className="btn-shadow rounded-xl bg-black px-6  py-2 font-semibold text-white lg:text-xl"
            href="/project"
          >
            My Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About