import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/feed' },
    { icon: <FaGithub />, url: 'https://github.com/sanika1971' },
    { icon: <FaTwitter />, url: 'https://twitter.com/sanikagaikwad' },
    { icon: <FaInstagram />, url: 'https://instagram.com/sanikagaikwad' },
  ]

  return (
    <footer className="py-8 px-6 border-t border-glass-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent">
            Sanika<span className="text-white">GaikwadPatil</span>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-glass-dark/50 border border-glass-light flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
          
          <div className="text-gray-400 text-center md:text-right">
            <p>© {currentYear} Sanika Gaikwad Patil. All rights reserved.</p>
            <p className="text-sm mt-1">Built with React, Vite & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer