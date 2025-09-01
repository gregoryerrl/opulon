'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const galleryImages = [
  { src: '/images/sideview_sunset.jpg', alt: 'Sunset Side View', span: 'col-span-2 row-span-2' },
  { src: '/images/interior.jpg', alt: 'Luxury Interior', span: 'col-span-1 row-span-1' },
  { src: '/images/dashboard.jpg', alt: 'Dashboard', span: 'col-span-1 row-span-1' },
  { src: '/images/isometricview.jpg', alt: 'Isometric View', span: 'col-span-1 row-span-2' },
  { src: '/images/frontview.jpg', alt: 'Front View', span: 'col-span-2 row-span-1' },
  { src: '/images/creative_shot_headlights.jpg', alt: 'Headlights', span: 'col-span-1 row-span-1' },
  { src: '/images/sideview2.jpg', alt: 'Side Profile', span: 'col-span-1 row-span-1' },
  { src: '/images/interior2.jpg', alt: 'Interior Detail', span: 'col-span-2 row-span-1' },
  { src: '/images/isometricview2.jpg', alt: 'Isometric Angle', span: 'col-span-1 row-span-1' },
  { src: '/images/creative_shot_car_racing.jpg', alt: 'Racing Shot', span: 'col-span-2 row-span-2' },
  { src: '/images/interior3.jpg', alt: 'Cabin View', span: 'col-span-1 row-span-1' },
]

export default function ImageGallery() {
  return (
    <section id="gallery" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Gallery</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Immerse yourself in our curated collection of automotive excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-xl ${image.span} group cursor-pointer`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-lg">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}