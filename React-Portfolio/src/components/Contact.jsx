import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      value: 'sanikagaikwad189@gmail.com',
      link: 'mailto:sanikagaikwad189@gmail.com'
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/sanikagaikwad',
      link: 'https://www.linkedin.com/feed/'
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: 'GitHub',
      value: 'github.com/sanikagaikwad',
      link: 'https://github.com/sanika1971'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Location',
      value: 'Pune, India',
      link: '#'
    },
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Contact <span className="bg-gradient-neon bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Get in touch with me</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="backdrop-blur-glass bg-glass-dark/50 border border-glass-light rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-glass-dark/30 hover:border-primary/30 border border-transparent transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-neon rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-gray-400">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="backdrop-blur-glass bg-glass-dark/50 border border-glass-light rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-dark/50 border border-glass-light rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-dark/50 border border-glass-light rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-dark/50 border border-glass-light rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-3 bg-dark/50 border border-glass-light rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-neon text-white rounded-xl font-medium hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact