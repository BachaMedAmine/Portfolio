"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Globe, Layers, PenTool, Cloud } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      category: "Frontend",
      icon: <Code className="h-6 w-6 text-cyan-400" />,
      items: ["SwiftUI", "JetPack Compose", "Flutter", "React", "Three.js"],
    },
    {
      category: "Backend",
      icon: <Database className="h-6 w-6 text-fuchsia-500" />,
      items: ["Node.js", "NestJS", "Java", "C#", "Python"],
    },
    {
      category: "Database",
      icon: <Layers className="h-6 w-6 text-purple-600" />,
      items: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "Prisma"],
    },
    {
      category: "DevOps",
      icon: <Cloud className="h-6 w-6 text-cyan-400" />,
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel"],
    },
    {
      category: "Design",
      icon: <PenTool className="h-6 w-6 text-fuchsia-500" />,
      items: ["Figma", "UI/UX", "Responsive Design"],
    },
    {
      category: "Other",
      icon: <Globe className="h-6 w-6 text-purple-600" />,
      items: ["Git", "REST APIs", "Performance Optimization"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            My toolkit for building modern, scalable, and beautiful applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-shadow group"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-md bg-gray-800 mr-3">{skill.icon}</div>
                <h3 className="text-xl font-bold text-white">{skill.category}</h3>
              </div>

              <div className="space-y-3">
                {skill.items.map((item, i) => (
                  <div key={item} className="flex items-center">
                    <div className="h-1 w-1 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 mr-2"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill meter section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency</h3>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { name: "Frontend Development", percentage: 95 },
              { name: "Backend Development", percentage: 90 },
              { name: "UI/UX Design", percentage: 85 },
              { name: "DevOps & Cloud", percentage: 80 },
              { name: "Machine Learning", percentage: 70 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-400">{skill.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

