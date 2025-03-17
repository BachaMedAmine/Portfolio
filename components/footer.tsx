"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-black py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold">
              <span className="text-fuchsia-500">&lt;</span>
              <span className="text-white">Alex Chen</span>
              <span className="text-cyan-400">/&gt;</span>
            </div>
            <p className="text-gray-400 mt-2">Creating digital experiences that inspire</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <nav className="flex gap-6">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full"
            >
              <ArrowUp className="h-5 w-5 text-black" />
            </motion.button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Med AmineBacha. All rights reserved.</p>

          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Designed & Built with <span className="text-fuchsia-500">♥</span> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

