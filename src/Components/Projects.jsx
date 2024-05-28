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
                src="https://aceternity.com/images/products/thumbnails/new/renderwork.png"
              />
            </div>
            <h2 class="title-font mt-5 text-xl font-medium">
              Renderwork Studio
            </h2>
            <p class="mt-2 text-base leading-relaxed">
              Next.js responsive website for Renderwork Studio, featuring 3D
              renderings and visual designs, enhancing brand identity and
              product appeal for clients.
            </p>
            <div className="mt-4">
              <a
                className="rounded-xl bg-black px-4 py-2 font-semibold text-white"
                href="https://renderwork.studio"
              >
                View Project
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeInIp} class="mb-6 p-4 sm:mb-0 md:w-1/3">
            <div class="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                class="h-full w-full object-cover object-center"
                src="https://www.aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png"
              />
            </div>
            <h2 class="title-font mt-5 text-xl font-medium">
              Golden Bells Academy
            </h2>
            <p class="mt-2 text-base leading-relaxed">
              Created a responsive website for Golden Bells Academy using HTML,
              CSS, JavaScript, and Bootstrap, featuring comprehensive info and
              an online learning platform.
            </p>
            <div className="mt-4">
              <a
                className="rounded-xl bg-black px-4 py-2 font-semibold text-white"
                href="https://goldenbellsacademy.com"
              >
                View Project
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeInIp} class="mb-6 p-4 sm:mb-0 md:w-1/3">
            <div class="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                class="h-full w-full object-cover object-center"
                src="https://aceternity.com/images/products/thumbnails/new/algochurn.png"
              />
            </div>
            <h2 class="title-font mt-5 text-xl font-medium">Algochurn</h2>
            <p class="mt-2 text-base leading-relaxed">
              A MERN website offering free practice for technical interviews
              with coding playgrounds and real-world questions on data
              structures and algorithms.
            </p>
            <div className="mt-4">
              <a
                className="rounded-xl bg-black px-4 py-2 font-semibold text-white"
                href="https://www.algochurn.com/"
              >
                View Project
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects
