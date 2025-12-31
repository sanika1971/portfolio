import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'React', level: 95, color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', level: 90, color: 'from-green-500 to-emerald-500' },
    { name: 'Express', level: 88, color: 'from-gray-400 to-gray-600' },
    { name: 'MongoDB', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'JavaScript', level: 95, color: 'from-yellow-500 to-orange-500' },
    { name: 'Tailwind CSS', level: 92, color: 'from-blue-400 to-cyan-500' },
    { name: 'TypeScript', level: 80, color: 'from-blue-500 to-blue-700' },
    { name: 'Git', level: 88, color: 'from-orange-500 to-red-500' },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-neon bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Technologies I work with</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group backdrop-blur-glass bg-glass-dark/50 border border-glass-light rounded-2xl p-6 text-center hover:border-primary/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="8"
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke={`url(#gradient-${index})`}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - skill.level / 100)}`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-2xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills