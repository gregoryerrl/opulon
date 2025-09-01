'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const collections = [
  {
    title: 'Racing Heritage',
    description: 'Born from the track, refined for the road',
    image: '/images/creative_shot_car_racing.jpg',
    count: '12 Vehicles'
  },
  {
    title: 'Luxury Executive',
    description: 'Uncompromising comfort meets sophisticated design',
    image: '/images/carwithmodel.jpg',
    count: '8 Vehicles'
  },
  {
    title: 'Night Collection',
    description: 'Experience automotive art under city lights',
    image: '/images/mutiplecars_creative_shot.jpg',
    count: '15 Vehicles'
  },
]

export default function CollectionShowcase() {
  return (
    <section id="collection" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Collections</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Explore our carefully curated automotive collections
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm text-white/70 mb-2">{collection.count}</p>
                  <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-white/80">{collection.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}