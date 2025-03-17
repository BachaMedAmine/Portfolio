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
      title: "NexusAI Dashboard",
      description: "An AI-powered analytics dashboard with real-time data visualization and predictive insights.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "TensorFlow", "D3.js"],
      category: "AI",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Quantum E-commerce",
      description:
        "A full-featured e-commerce platform with advanced filtering, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      category: "Web",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Nebula Social App",
      description: "A cross-platform social networking app with real-time messaging and content sharing capabilities.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "Firebase", "Redux", "Socket.io"],
      category: "Mobile",
      demoLink: "#",
      codeLink: "#",
    },
   
  
    {
      title: "Spectrum Image Recognition",
      description: "An AI-powered image recognition tool that can identify objects, scenes, and people in photos.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Python", "TensorFlow", "Flask", "React"],
      category: "AI",
      demoLink: "#",
      codeLink: "#",
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
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
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

