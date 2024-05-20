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
      staggerChildren: 0.4,
    },
  },
};

const Projects = () => {
  return (
    <section class="body-font text-black">
      <div class="container mx-auto px-5 py-24">
        <motion.div
          variants={fadeInIp}
          initial="hidden"
          animate="show"
          class="-mx-4 -mb-10 -mt-4 flex flex-wrap sm:-m-4"
        >
          <motion.div variants={fadeInIp} class="mb-6 p-4 sm:mb-0 md:w-1/3">
            <div class="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                class="h-full w-full object-cover object-center"
                src="https://sgwebpartners.com/wp-content/uploads/2019/04/woocommerce-wholesale-storm-creek-983x553.jpg"
              />
            </div>
            <h2 class="title-font mt-5 text-xl font-medium">
              E Commerce Website
            </h2>
            <p class="mt-2 text-base leading-relaxed">
              I built EcoMart, an e-commerce site for eco-friendly products.
              Features: advanced search, detailed descriptions, secure payments,
              and a vendor dashboard
            </p>
            <div className="mt-4">
              <a
                className="rounded-xl bg-black px-4 py-2 font-semibold text-white"
                href="https://shahbaz-chi.vercel.app/contact"
              >
                Contact us
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeInIp} class="mb-6 p-4 sm:mb-0 md:w-1/3">
            <div class="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                class="h-full w-full object-cover object-center"
                src="https://img.freepik.com/free-vector/landing-page-template-with-smartphone_23-2148346832.jpg"
              />
            </div>
            <h2 class="title-font mt-5 text-xl font-medium">Landing Page</h2>
            <p class="mt-2 text-base leading-relaxed">
              I developed EcoMart, an eco-friendly e-commerce platform. Features
              advanced search, detailed descriptions, secure payments. Join us
              in supporting sustainable living.
            </p>
            <div className="mt-4">
              <a
                className="rounded-xl bg-black px-4 py-2 font-semibold text-white"
                href="https://shahbaz-chi.vercel.app/contact"
              >
                Contact us
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeInIp} class="mb-6 p-4 sm:mb-0 md:w-1/3">
            <div class="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                class="h-full w-full object-cover object-center"
                src="https://i.ytimg.com/vi/oMC6gyTWtic/maxresdefault.jpg"
              />
            </div>
            <h2 class="title-font mt-5 text-xl font-medium">
              Portfolio Website
            </h2>
            <p class="mt-2 text-base leading-relaxed">
              Developed a sleek portfolio website showcasing expertise and
              projects. Designed user-friendly interface for optimal navigation
              and seamless experience
            </p>
            <div className="mt-4">
              <a
                className="rounded-xl bg-black px-4 py-2 font-semibold text-white"
                href="https://shahbaz-chi.vercel.app/contact"
              >
                Contact us
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects
