import { useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const blobs = [
  {
    // Large primary blob — top-left area
    className: 'w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-[80px]',
    baseX: '15%',
    baseY: '20%',
    depth: 0.02, // slowest layer
  },
  {
    // Medium blue blob — bottom-right area
    className: 'w-80 h-80 bg-blue-500/[0.08] rounded-full blur-3xl',
    baseX: '65%',
    baseY: '60%',
    depth: 0.035,
  },
  {
    // Small cyan accent — center-right
    className: 'w-72 h-72 bg-cyan-400/[0.06] rounded-full blur-3xl',
    baseX: '75%',
    baseY: '25%',
    depth: 0.05, // fastest layer
  },
]

export default function InteractiveHeroBg() {
  const containerRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for fluid parallax
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30, mass: 1 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30, mass: 1 })

  const handleMouseMove = useCallback(
    (e) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      // Offset from center of container
      mouseX.set(e.clientX - rect.left - rect.width / 2)
      mouseY.set(e.clientY - rect.top - rect.height / 2)
    },
    [mouseX, mouseY],
  )

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 overflow-hidden"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />

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
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
