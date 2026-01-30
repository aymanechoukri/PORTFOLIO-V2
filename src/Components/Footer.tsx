import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Aymane Chokri</h2>
            <p className="text-gray-400">Frontend Web Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 z-50">
            <a 
              href="https://github.com/aymanechoukri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
            >
              <FiGithub className="text-white text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aymane-chokri-8750a6321/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FiLinkedin className="text-white text-xl" />
            </a>
            <a 
              href="mailto:chokriaymane2000@gmail.com" 
              className="p-3 bg-gray-900 rounded-full hover:bg-red-700 transition-colors"
            >
              <FiMail className="text-white text-xl" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 my-8"></div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-center md:text-left z-50">
            <h3 className="text-white font-bold mb-4">Get in Touch</h3>
            <div className="space-y-2">
              <a 
                href="mailto:chokriaymane2000@gmail.com" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                chokriaymane2000@gmail.com
              </a>
              <a 
                href="tel:+212674851005" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                +212 674-851-005
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right z-50">
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#Home" className="text-gray-400 hover:text-white transition-colors block">
                Home
              </a>
              <a href="#Project" className="text-gray-400 hover:text-white transition-colors block">
                Projects
              </a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors block">
                services
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <span>Made with</span>
            <FiHeart className="text-red-500" />
            <span>in Morocco</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} Aymane Chokri. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}