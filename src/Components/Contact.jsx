import React, { useRef, useState } from 'react'
import { animate, motion } from "framer-motion";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";


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
      staggerChildren: 0.3,
    },
  },
};


const Contact = () => {
const [data, setData] = useState({name: "" , email: "" , message: ""})
  const navigate = useNavigate();

 const {
   register,
   handleSubmit,
   setError,
   watch,
   formState: { errors, isSubmitting },
 } = useForm();

const onSubmit = async() => {
  try {
    const url = await axios.post(
      "https://backend-api-seven-zeta.vercel.app/",
      data,
    );
    console.log(url.data);
    await toast.success("Your Message Is Send")
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
const handleInp = (e) => {
  setData({...data  , [e.target.name]: e.target.value})
};

  return (
    <section className="body-font relative text-gray-600 lg:overflow-hidden">
      <motion.div
        variants={fadeInIp}
        initial="hidden"
        animate="show"
        className="container mx-auto px-5 py-24"
      >
        <motion.div
          variants={fadeInIp}
          className="mb-12 flex w-full flex-col text-center"
        >
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl md:text-6xl">
            Contact us
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            If You Need To Create A Website Than Contact With Me
          </p>
        </motion.div>
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <motion.form
            onSubmit={handleSubmit(onSubmit)} 
            variants={fadeInIp} 
            initial="hidden"
            animate="show"
            className="-m-2 flex flex-wrap"
          >
            <motion.div variants={fadeInIp} className="w-1/2 p-2">
              <div className="relative">
                <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: { value: true, message: "Enter Your Name" },
                  })}
                  onChange={handleInp}
                  name="name"
                  value={data.name}
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter Name"
                />
                {errors.name && (
                  <div className="px-2 text-red-500">{errors.name.message}</div>
                )}
              </div>
            </motion.div>
            <motion.div variants={fadeInIp} className="w-1/2 p-2">
              <motion.div variants={fadeInIp} className="relative">
                <label htmlFor="email" className="text-sm leading-7 text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: { value: true, message: "Enter Your Email" },
                  })}
                  onChange={handleInp}
                  value={data.email}
                  placeholder="Enter Email"
                  name="email"
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                />
                {errors.email && (
                  <div className="px-2 text-red-500">
                    {errors.email.message}
                  </div>
                )}
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInIp} className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  {...register("message", {
                    required: { value: true, message: "Enter Your Message" },
                  })}
                  value={data.message}
                  onChange={handleInp}
                  placeholder="Enter Your Message"
                  className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                ></textarea>
                {errors.message && (
                  <div className="px-2 text-red-500">
                    {errors.message.message}
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div variants={fadeInIp} className="w-full p-2">
              <button className="btn-shadow rounded-xl bg-black px-6  py-2 font-semibold text-white lg:text-xl">
                Send
              </button>
            </motion.div>
            <motion.div
              variants={fadeInIp}
              className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center"
            >
              <a
                className="text-blue-500"
                href="mailto:shahbazansari8199@email.com"
              >
                shahbazansari8199@email.com
              </a>
              <p className="my-5 leading-normal">
                Web Devloper
                <br />
              </p>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact
