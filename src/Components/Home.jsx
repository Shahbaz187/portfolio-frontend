import React from 'react'
import { animate, motion } from 'framer-motion';

const fadeInIp =  {
  hidden:{
  opacity: 0, 
  x: -100
  },
  show:{
    opacity: 1,
    x: 0,
    transition:{
      duration: 1.3,
      staggerChildren: 0.2
    }
  }

}
const Home = () => {
  return (
    <section className="container flex  h-[calc(100vh-80px)] w-full flex-col items-center justify-between gap-10 py-14 md:flex-row">
      <motion.div
        variants={fadeInIp}
        initial="hidden"
        animate="show"
        className="space-y-2 text-black"
      >
        <motion.h3
          variants={fadeInIp}
          className="text-4xl font-bold lg:text-6xl"
        >
          Hello,
        </motion.h3>
        <motion.h2
          variants={fadeInIp}
          className="text-6xl font-bold lg:text-7xl"
        >
          I'm Shahbaz
        </motion.h2>
        <motion.p
          variants={fadeInIp}
          className="font-semibold opacity-80 lg:text-lg"
        >
          Web Devloper
        </motion.p>
        <motion.div variants={fadeInIp} className="mt-3 flex gap-10">
          <a
            className="btn-shadow rounded-xl bg-black px-6 py-2 font-semibold text-white lg:text-xl"
            href="https://www.peopleperhour.com/freelancer/video-photo-audio/shahbaz-ansari-web-devloper-html-css-javascript-zzxzqzyn"
          >
            Hire Me
          </a>
          <a
            className="btn-shadow rounded-xl bg-black px-6 py-2 font-semibold text-white lg:text-xl"
            href="/about"
          >
            About ME
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeInIp}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
      >
        <img
          src="/avatar.png"
          className="mx-auto w-[80%] sm:w-[70%] md:w-[80%] lg:w-full"
          alt="Avatar"
        />
      </motion.div>
    </section>
  );
}

export default Home