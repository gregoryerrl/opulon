import LenisProvider from '@/components/providers/LenisProvider'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ImageGallery from '@/components/ImageGallery'
import FeaturedSection from '@/components/FeaturedSection'
import CollectionShowcase from '@/components/CollectionShowcase'
import Footer from '@/components/Footer'
import AIAssistant from '@/components/AIAssistant'

export default function Home() {
  return (
    <LenisProvider>
      <Navigation />
      <main>
        <Hero />
        <ImageGallery />
        <FeaturedSection />
        <CollectionShowcase />
      </main>
      <Footer />
      <AIAssistant />
    </LenisProvider>
  )
}