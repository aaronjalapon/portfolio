import { useEffect, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const blobs = [
  {
    // Large primary blob — top-left area
    className: 'w-[40rem] h-[40rem] bg-teal-500/40 dark:bg-teal-500/30 rounded-full blur-[100px]',
    baseX: '15%',
    baseY: '20%',
    depth: 0.02, // slowest layer
  },
  {
    // Medium blue blob — bottom-right area
    className: 'w-[35rem] h-[35rem] bg-sky-500/40 dark:bg-sky-500/30 rounded-full blur-[100px]',
    baseX: '65%',
    baseY: '60%',
    depth: 0.035,
  },
  {
    // Small cyan accent — center-right
    className: 'w-96 h-96 bg-cyan-400/40 dark:bg-cyan-400/30 rounded-full blur-[90px]',
    baseX: '75%',
    baseY: '25%',
    depth: 0.05, // fastest layer
  },
  {
    // Additional deep blue accent
    className: 'w-[30rem] h-[30rem] bg-blue-600/30 dark:bg-blue-500/20 rounded-full blur-[100px]',
    baseX: '30%',
    baseY: '70%',
    depth: 0.04,
  }
]

export default function InteractiveHeroBg() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for fluid parallax
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30, mass: 1 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30, mass: 1 })

  const handleMouseMove = useCallback(
    (e) => {
      // Offset from center of window
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    },
    [mouseX, mouseY]
  )

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient background - dynamic & vibrant */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-sky-50 to-teal-50 dark:from-slate-950 dark:via-sky-950 dark:to-teal-950 transition-colors duration-500" />

      {/* Parallax blobs */}
      {blobs.map((blob, i) => {
        return (
          <ParallaxBlob
            key={i}
            blob={blob}
            springX={springX}
            springY={springY}
          />
        )
      })}
    </div>
  )
}

function ParallaxBlob({ blob, springX, springY }) {
  const x = useTransform(springX, (v) => v * blob.depth)
  const y = useTransform(springY, (v) => v * blob.depth)

  return (
    <motion.div
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${blob.className}`}
      style={{
        left: blob.baseX,
        top: blob.baseY,
        x,
        y,
        willChange: 'transform',
      }}
      // Gentle floating fallback for touch devices / initial state
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
