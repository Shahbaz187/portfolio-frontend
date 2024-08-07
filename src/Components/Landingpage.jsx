import React from 'react'
import Navbar from "./Navbar";
import Contact from "./Contact";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { animate, motion } from "framer-motion";

const fadeInIp = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
      staggerChildren: 0.2,
    },
  },
};

const Landingpage = () => {
  return (
    <>
      <Navbar />
      {/* ------- HOME ------- */}
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
              href="hire_me"
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

      {/* ------- ABOUT ------- */}
      <section className="container about-section flex  w-full flex-col items-center justify-between gap-10 py-14 pb-14 md:flex-row">
        <motion.div
          variants={fadeInIp}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3 }}
          className="hidden flex-1 md:block"
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
            crafting captivating front-end websites, I bring a blend of
            creativity and technical expertise to every project. Explore my work
            and let's bring your digital vision to life!
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

      {/* ------- Project ------- */}

      <section className="body-font text-black">
        <div className="container mx-auto px-5 py-24">
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
                  target="_blank"
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
                Created a responsive website for Golden Bells Academy using
                HTML, CSS, JavaScript, and Bootstrap, featuring comprehensive
                info and an online learning platform.
              </p>
              <div className="mt-4">
                <a
                  className="rounded-xl bg-black px-4 py-2 font-semibold text-white"
                  href="https://goldenbellsacademy.com"
                  target="_blank"
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
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* ------- Review ------- */}
      <section className="body-font text-gray-600">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInIp}
          className="container mx-auto px-5 py-24"
        >
          <motion.h1
            variants={fadeInIp}
            className="title-font mb-12 text-center text-3xl font-medium text-gray-900 sm:text-4xl md:text-5xl"
          >
            Clients Reviews
          </motion.h1>
          <motion.div variants={fadeInIp} className="-m-4 flex flex-wrap">
            <motion.div variants={fadeInIp} className="w-full p-4 md:w-1/2">
              <div className="h-full rounded bg-gray-100 p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="mb-4 block h-5 w-5 text-gray-400"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="mb-6 leading-relaxed">
                  Thank you so much for your kind words! It's been a pleasure
                  working with you on the development of your websites, and I'm
                  thrilled to hear that both you and your clients are happy with
                  the results. I look forward to continuing our successful
                  collaboration in the future. If there's anything else you
                  need, feel free to reach out. Cheers to more fantastic
                  projects ahead!
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="data:image/jpeg;base64,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"
                    className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
                  />
                  <span className="flex flex-grow flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Rafy Raja
                    </span>
                    <span className="flex gap-1 text-sm text-gray-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                  </span>
                </a>
              </div>
            </motion.div>
            <motion.div variants={fadeInIp} className="w-full p-4 md:w-1/2">
              <div className="h-full rounded bg-gray-100 p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="mb-4 block h-5 w-5 text-gray-400"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="mb-6 leading-relaxed">
                  <b>Shahbaz Ansari</b> was excellent to work with. He did an
                  amazing job, was patient and went above and beyond for us. He
                  responded quickly throughout and helped with everything. We
                  would recommend him highly and will 100% be working with him
                  again soon.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIryyzmR6MgwOPLJloLuMHDaq-HNanvfomp4mbLye-Q&s"
                    className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
                  />
                  <span className="flex flex-grow flex-col pl-4">
                    <span className="title-font font-medium text-gray-900"></span>
                    <span className="flex gap-1 text-sm text-gray-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalf />
                    </span>
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      {/* ------- Contact ------- */}
      <Contact />
      {/* ------- Footer ------- */}
      <footer className="body-font flex items-center justify-center bg-black py-2 text-white">
        <img src="/logo.png" width={40} className="hidden sm:block" alt="" />
        <span className="ml-3 hidden text-xl text-white md:block">
          Shahbaz Ansari
        </span>
        <p className="mt-4 text-sm text-gray-200 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          © 2024 All Copyright Reseved
        </p>
      </footer>
    </>
  );
}

export default Landingpage
