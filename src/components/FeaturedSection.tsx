'use client'

import { motion } from 'framer-motion'
import Carousel from './Carousel'

const featuredCars = [
  {
    src: '/images/isometricview3.jpg',
    alt: 'Luxury Sport Coupe',
    title: 'Sport Coupe Excellence'
  },
  {
    src: '/images/isometricview4.jpg',
    alt: 'Premium Sedan',
    title: 'Executive Sedan'
  },
  {
    src: '/images/isometricview5.jpg',
    alt: 'Performance Vehicle',
    title: 'Performance Masterpiece'
  },
  {
    src: '/images/sideview3.jpg',
    alt: 'Elegant Profile',
    title: 'Timeless Design'
  },
  {
    src: '/images/sideview4.jpg',
    alt: 'Dynamic Lines',
    title: 'Dynamic Aesthetics'
  },
]

export default function FeaturedSection() {
  return (
    <section id="featured" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Featured Vehicles</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Handpicked selection of our most prestigious automobiles
          </p>
        </motion.div>

        <Carousel images={featuredCars} />
      </div>
    </section>
  )
}