import React from "react";
import { motion } from "framer-motion";

const Man: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-24">
      <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl font-bold text-white leading-snug">
            Hi, I'm <span className="text-green-400">Vasanth</span><br />
            Full-Stack MERN Developer
          </h1>

          <p className="text-gray-300 mt-6 max-w-xl">
            MERN Stack Developer with hands-on experience in building secure authentication systems, OTP verification, and
full-stack applications using React, Node.js, Express, and MongoDB Atlas. Transitioned from the automobile
industry to IT, driven by a strong passion for web development, clean code, and user-friendly solutions
          </p>

          <div className="mt-6 flex gap-4">
           <a
              href="/VasanthJ_Resume (6).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-green-500 text-black text-sm font-medium hover:bg-green-400 transition"
            >
              View Resume
            </a>


            <a href="#projects"
               className="px-4 py-2 border border-gray-500 text-gray-200 rounded hover:border-green-400">
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT — BIGGER PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-end"
        >
          <div className="p-1 bg-green-400/20 rounded-lg shadow-lg">
            <img
              src="/profile.jpg"
              className="w-[300px] h-[400px] object-cover rounded-lg"
              alt="Vasanth"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Man;
