"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Navbar from "@/components/navbar"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5

        // Neon colors from the reference images
        const colors = [
          "rgba(255, 0, 255, 0.7)", // Neon pink
          "rgba(0, 255, 255, 0.7)", // Neon cyan
          "rgba(128, 0, 255, 0.7)", // Neon purple
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }

        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = 15
        ctx.shadowColor = this.color
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      // Connect particles with lines if they are close enough
      connectParticles()

      requestAnimationFrame(animate)
    }

    function connectParticles() {
      if (!ctx) return
      const maxDistance = 150

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = particles[a].color
            ctx.lineWidth = 0.2
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
            ctx.closePath()
          }
        }
      }
    }

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    })

    init()
    animate()

    return () => {
      window.removeEventListener("resize", () => {})
    }
  }, [])

  return (
    <section className="relative h-screen flex flex-col justify-center items-center">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <Navbar />
      <div className="z-10 text-center px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600">
            Med Amine Bacha
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 text-cyan-300">
            Mobile Software Developer <span className="text-fuchsia-500">|</span> AI Enthusiast{" "}
            <span className="text-fuchsia-500">|</span> implementing scalable solutions
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            Specialize in Mobile and Backend development
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-md font-medium hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-shadow"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-cyan-400 rounded-md font-medium hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-shadow"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <ArrowDown className="h-8 w-8 text-cyan-400" />
      </motion.div>
    </section>
  )
}

