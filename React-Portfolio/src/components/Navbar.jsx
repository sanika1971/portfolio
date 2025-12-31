import React, { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ]

  const handleClick = (itemName, itemId) => {
    setActive(itemName);
    
    // Scroll to section
    const element = document.getElementById(itemId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActive('Home');
  }

  return (
    <nav className="fixed w-full z-50 px-6 lg:px-12 py-4 backdrop-blur-glass bg-glass-dark/50 border-b border-glass-light">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Only Logo Image - Circular */}
        <button 
          onClick={scrollToTop}
          className="group relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary hover:border-secondary transition-all duration-300"
        >
          <img 
            src="/sanikalogo.png" 
            alt="Sanika Logo" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {/* Optional glowing effect */}
          <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
        </button>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleClick(item.name, item.id)}
              className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 ${active === item.name ? 'w-full' : ''}`}></span>
            </button>
          ))}
        </div>

        <button 
          onClick={() => handleClick('Contact', 'contact')}
          className="px-6 py-2 bg-gradient-neon text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
        >
          Hire Me
        </button>
      </div>
    </nav>
  )
}

export default Navbar