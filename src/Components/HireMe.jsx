import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
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
      staggerChildren: 0.5,
    },
  },
};

const HireMe = () => {
  return (
    <section class="body-font text-gray-600 lg:overflow-hidden">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInIp}
        class="container mx-auto px-5 py-24"
      >
        <motion.h1
          variants={fadeInIp}
          class="title-font mb-12 text-center text-3xl font-medium text-gray-900 sm:text-4xl md:text-5xl"
        >
          Hire Me 👨‍💻
        </motion.h1>
        <motion.div variants={fadeInIp} class="-m-4 flex flex-wrap">
          <motion.div variants={fadeInIp} class="w-full p-4 md:w-1/2">
            <a
              class="flex h-full items-center justify-center rounded bg-gray-100 p-8 transition duration-200 hover:bg-gray-200"
              href="" target='_blank'
            >
              <img
                src="/fiverr.png"
                className="mx-auto w-[50%] "
                alt="Fiverr"
              />
            </a>
          </motion.div>
          <motion.div variants={fadeInIp} class="w-full p-4 md:w-1/2">
            <a
              class="0 flex h-full items-center justify-center rounded bg-gray-100 p-8 transition duration-200 hover:bg-gray-200"
              target="_blank"
              href="https://www.peopleperhour.com/freelancer/video-photo-audio/shahbaz-ansari-web-devloper-html-css-javascript-zzxzqzyn"
            >
              <img
                src="/peopleperhour.png"
                className="mx-auto w-[70%] "
                alt="Fiverr"
              />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HireMe