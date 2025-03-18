"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"



export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
           <div className="relative w-[90%] max-w-[350px] mx-auto h-[350px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                 <Image
                    src="/portfolio.jpeg"
                    alt="Developer Portrait"
                    fill
                    className="rounded-lg object-cover"
                />
              <div></div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-5 left-5 h-20 w-1 bg-cyan-400"></div>
                <div className="absolute top-5 left-5 h-1 w-20 bg-cyan-400"></div>
                <div className="absolute bottom-5 right-5 h-20 w-1 bg-fuchsia-500"></div>
                <div className="absolute bottom-5 right-5 h-1 w-20 bg-fuchsia-500"></div>
              </div>
            </div>

            {/* Glowing effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-lg blur opacity-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Hi, I'm <span className="text-fuchsia-500">Med Amine Bacha</span>
            </h3>
            <p className="text-gray-300 mb-4">
            I specialize in mobile and backend development, 
            delivering high-performance and user-centric applications.
             I thrive in designing and implementing scalable solutions, 
             ensuring seamless integrations between frontend and backend systems. 
             With experience in both freelance and team-based projects.
            </p>
            <p className="text-gray-300 mb-6">
              Specializing in React, Node.js, and cloud architecture, I build scalable applications that deliver
              exceptional user experiences. I'm constantly exploring emerging technologies like AI and blockchain to
              push the boundaries of what's possible.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-cyan-400 mr-2"></div>
                <span className="text-gray-300">Based in Tunisia</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-fuchsia-500 mr-2"></div>
                <span className="text-gray-300">Mobile Software Developer</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-purple-600 mr-2"></div>
                <span className="text-gray-300">Available for Freelance</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-cyan-400 mr-2"></div>
                <span className="text-gray-300">Open to Collaboration</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-md font-medium hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-shadow"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

