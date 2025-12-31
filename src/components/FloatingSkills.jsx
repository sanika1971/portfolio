// components/FloatingSkills.jsx
import React, { useEffect, useState } from 'react'

const FloatingSkills = () => {
  const [icons, setIcons] = useState([])

  const skillData = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'JS', icon: 'JS', color: '#F7DF1E' },
    { name: 'HTML', icon: 'HTML', color: '#E34F26' },
    { name: 'CSS', icon: 'CSS', color: '#1572B6' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'Java', icon: '☕', color: '#007396' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'SQL', icon: '🗄️', color: '#4479A1' },
    { name: 'Git', icon: '📦', color: '#F05032' },
    { name: 'API', icon: '🔌', color: '#FF6C37' },
    { name: 'UI/UX', icon: '🎨', color: '#8B5CF6' },
    { name: 'Next.js', icon: 'N', color: '#000000' },
    { name: 'Tailwind', icon: 'TW', color: '#06B6D4' },
    { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
    { name: 'Redux', icon: '🔄', color: '#764ABC' },
    { name: 'Firebase', icon: '🔥', color: '#FFCA28' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
  ]

  useEffect(() => {
    // Create floating icons with random positions
    const newIcons = skillData.map((skill, index) => ({
      ...skill,
      id: index,
      top: Math.random() * 100,
      left: Math.random() * 100,
      speed: 0.3 + Math.random() * 0.7,
      directionX: Math.random() > 0.5 ? 1 : -1,
      directionY: Math.random() > 0.5 ? 1 : -1,
      size: 20 + Math.random() * 20,
      rotation: Math.random() * 360,
      rotationSpeed: 0.3 + Math.random() * 0.7,
      opacity: 0.05 + Math.random() * 0.15,
    }))
    setIcons(newIcons)

    // Animation function
    const animateIcons = () => {
      setIcons(prevIcons =>
        prevIcons.map(icon => {
          let newTop = icon.top + icon.speed * icon.directionY
          let newLeft = icon.left + icon.speed * icon.directionX
          let newDirectionX = icon.directionX
          let newDirectionY = icon.directionY

          // Boundary check with bounce
          if (newTop <= 0 || newTop >= 95) newDirectionY *= -1
          if (newLeft <= 0 || newLeft >= 95) newDirectionX *= -1

          newTop = Math.max(0, Math.min(95, newTop))
          newLeft = Math.max(0, Math.min(95, newLeft))

          return {
            ...icon,
            top: newTop,
            left: newLeft,
            directionX: newDirectionX,
            directionY: newDirectionY,
            rotation: icon.rotation + icon.rotationSpeed,
          }
        })
      )
    }

    const interval = setInterval(animateIcons, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <style>
        {`
          .floating-icon {
            transition: all 0.5s ease;
            will-change: transform, opacity;
          }
          .floating-icon:hover {
            transform: scale(1.5) !important;
            opacity: 0.5 !important;
            z-index: 1;
          }
        `}
      </style>
      
      {icons.map(icon => (
        <div
          key={icon.id}
          className="absolute floating-icon group"
          style={{
            top: `${icon.top}vh`,
            left: `${icon.left}vw`,
            transform: `translate(-50%, -50%) rotate(${icon.rotation}deg)`,
            opacity: icon.opacity,
            fontSize: `${icon.size}px`,
            color: icon.color,
            textShadow: `0 0 10px ${icon.color}40`,
          }}
          title={icon.name}
        >
          <div className="relative">
            <div className="font-bold transition-all duration-300">
              {icon.icon}
            </div>
            
            {/* Tooltip */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900/90 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto border border-gray-700">
              {icon.name}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-l border-t border-gray-700"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FloatingSkills