export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">OPULON</h3>
            <p className="text-white/60 text-sm">
              Premium automotive gallery and test-drive booking platform.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#featured" className="hover:text-white transition-colors">Featured</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Collections</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Test Drive</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Virtual Tour</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>contact@opulon.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Mon-Sat: 9AM-7PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>&copy; 2024 Opulon. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}