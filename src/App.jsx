import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingSkills from './components/FloatingSkills'

function App() {
  return (
    <div className="min-h-screen bg-dark bg-gradient-dark relative overflow-hidden">
      {/* Floating Skills Background */}
      <FloatingSkills />
      
      {/* Background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-60 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-40 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* CDN के लिए additional styles */}
      <style>
        {`
          .backdrop-blur-glass {
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
          }
          
          .bg-glass-dark {
            background: rgba(15, 15, 15, 0.7);
          }
          
          .border-glass-light {
            border-color: rgba(255, 255, 255, 0.05);
          }
          
          .hover\:bg-glass-dark\/50:hover {
            background: rgba(15, 15, 15, 0.5);
          }
          
          .hover\:border-primary\/50:hover {
            border-color: rgba(139, 92, 246, 0.5);
          }
          
          .bg-gradient-to-br {
            background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
          }
          
          .from-primary {
            --tw-gradient-from: #8b5cf6;
          }
          
          .to-secondary {
            --tw-gradient-to: #ec4899;
          }
          
          .to-accent {
            --tw-gradient-to: #3b82f6;
          }
          
          .via-secondary {
            --tw-gradient-via: #ec4899;
          }
          
          .bg-clip-text {
            -webkit-background-clip: text;
            background-clip: text;
          }
          
          .bg-primary\/10 {
            background-color: rgba(139, 92, 246, 0.1);
          }
          
          .hover\:shadow-purple-500\/30:hover {
            box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
          }
          
          .hover\:shadow-purple-500\/20:hover {
            box-shadow: 0 10px 30px rgba(168, 85, 247, 0.2);
          }
          
          .hover\:shadow-purple-500\/10:hover {
            box-shadow: 0 10px 30px rgba(168, 85, 247, 0.1);
          }
          
          .group:hover .group-hover\:scale-110 {
            transform: scale(1.1);
          }
          
          .group:hover .group-hover\:scale-125 {
            transform: scale(1.25);
          }
          
          .hover\:-translate-y-1:hover {
            transform: translateY(-4px);
          }
          
          .transition-transform {
            transition-property: transform;
          }
          
          .transition-all {
            transition-property: all;
          }
          
          .duration-300 {
            transition-duration: 300ms;
          }
          
          .duration-500 {
            transition-duration: 500ms;
          }
          
          .duration-1000 {
            transition-duration: 1000ms;
          }
          
          .border-primary {
            border-color: #8b5cf6;
          }
          
          .text-primary {
            color: #8b5cf6;
          }
          
          .hover\:bg-primary\/10:hover {
            background-color: rgba(139, 92, 246, 0.1);
          }
          
          .border-primary\/30 {
            border-color: rgba(139, 92, 246, 0.3);
          }
          
          .focus\:border-primary:focus {
            border-color: #8b5cf6;
          }
          
          .focus\:ring-primary:focus {
            --tw-ring-color: rgba(139, 92, 246, 0.5);
          }
          
          .leading-relaxed {
            line-height: 1.625;
          }
          
          .resize-none {
            resize: none;
          }
          
          .hover\:shadow-xl:hover {
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </div>
  )
}

export default App