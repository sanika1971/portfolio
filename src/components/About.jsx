import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-neon bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Get to know more about me</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="backdrop-blur-glass bg-glass-dark/50 border border-glass-light rounded-3xl p-8 lg:p-12 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
                   I am an aspiring Software Engineer and B.Tech Computer Science student with hands-on experience in Java, Python, and MERN Stack development. I enjoy building scalable, user-friendly applications and solving real-world problems through clean and efficient code. I am a quick learner, adaptable, and goal-oriented, always eager to improve my skills and contribute effectively to a development team. My long-term goal is to grow into a successful software developer and work on impactful technology solutions. </p>
            <p className="text-gray-300 leading-relaxed">
             My long-term goal is to grow into a successful software developer and work on impactful technology solutions.      
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8">What I Do</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Web Development', desc: 'Full stack applications' },
                { title: 'UI/UX Design', desc: 'User-centered designs' },
                { title: 'API Development', desc: 'REST & GraphQL APIs' },
                { title: 'Database Design', desc: 'MongoDB & SQL' },
              ].map((service, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-glass bg-glass-dark/30 border border-glass-light rounded-2xl p-6 hover:bg-glass-dark/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-neon rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About