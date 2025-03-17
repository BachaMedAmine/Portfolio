"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { ExternalLink, Github, Code } from "lucide-react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Web", "Mobile", "AI", "UI/UX"]

  const projects = [
    {
      title: "DrKhaled (In Progress)",
      description: "An AI-powered healthcare app designed to streamline patient management, appointment scheduling, and secure medical data handling.",
      image: "/drkhaled.png", 
      objectPosition: "top",
      tags: ["AI", "Mobile Development", "Android", "iOS", "Healthcare Tech"],
      category: "Mobile",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Car Management Backend",
      description: "A backend service for managing car data, built with NestJS and MongoDB.",
      image: "/car-management-backend.png",
      objectPosition: "top",
      tags: ["NestJS", "MongoDB", "AI"],
      category: "Backend",
      demoLink: "#",
      codeLink: "https://github.com/BachaMedAmine/car-management-backend",
    },
    {
      title: "Pixeliz",
      description: "A modern web platform for projection, sound, and lighting services with a sleek dark theme.",
      image: "/pixeliz.png",
      objectPosition: "top",
      tags: ["React", "Next.js", "Tailwind CSS"],
      category: "Web",
      demoLink: "#",
      codeLink: "https://github.com/BachaMedAmine/Pixeliz",
    },
    {
      title: "AI Image Processing Service",
      description: "An AI-powered image enhancement and classification service.",
      image: "/ai-image-processing.png",
      objectPosition: "top",
      tags: ["TypeScript", "Machine Learning", "Flask", "React"],
      category: "AI",
      demoLink: "#",
      codeLink: "https://github.com/BachaMedAmine/ai-image-processing-service",
    },
    {
      title: "Auth-iOS",
      description: "The iOS frontend application for a Car Management System using Swift and SwiftUI.",
      image: "/ova.png",
      objectPosition: "top",
      tags: ["Swift", "SwiftUI", "iOS"],
      category: "Mobile",
      demoLink: "#",
      codeLink: "https://github.com/BachaMedAmine/Auth-iOS",
    },
   
  
    {
      title: "Auth-Android",
      description: "A mobile authentication system for Android, developed using Kotlin.",
      image: "/ova2.png",
      objectPosition: "top",
      tags: ["Kotlin", "Jetpack Compose", "Firebase"],
      category: "Mobile",
      demoLink: "#",
      codeLink: "https://github.com/BachaMedAmine/authAndroid",
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A selection of my recent work across various domains and technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden group"
            >
              <div className="relative w-[90%] max-w-[350px] mx-auto h-[350px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                 <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={project.objectPosition || "center"}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      className="p-2 bg-cyan-400 rounded-full hover:bg-cyan-500 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 text-black" />
                    </a>
                    <a
                      href={project.codeLink}
                      className="p-2 bg-fuchsia-500 rounded-full hover:bg-fuchsia-600 transition-colors"
                    >
                      <Github className="h-5 w-5 text-black" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-sm"
                  >
                    Live Demo <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-fuchsia-500 hover:text-fuchsia-400 flex items-center gap-1 text-sm"
                  >
                    View Code <Code className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-md font-medium hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-shadow"
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  )
}

