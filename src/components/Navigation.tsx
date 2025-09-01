'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center space-x-2"
        >
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">
            OPULON
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex items-center space-x-8"
        >
          <a href="#gallery" className="text-sm font-medium hover:text-white/70 transition-colors">
            Gallery
          </a>
          <a href="#featured" className="text-sm font-medium hover:text-white/70 transition-colors">
            Featured
          </a>
          <a href="#collection" className="text-sm font-medium hover:text-white/70 transition-colors">
            Collection
          </a>
          <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
            Book Test Drive
          </button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:hidden flex flex-col space-y-1.5"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </motion.button>
      </div>
    </motion.nav>
  )
}