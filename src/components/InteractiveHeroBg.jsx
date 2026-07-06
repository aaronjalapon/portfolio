import { useEffect, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const blobs = [
  {
    className: 'w-[42rem] h-[42rem] bg-white/75 dark:bg-white/10 rounded-full blur-[110px]',
    baseX: '15%',
    baseY: '20%',
    depth: 0.02,
  },
  {
    className: 'w-[36rem] h-[36rem] bg-black/10 dark:bg-white/10 rounded-full blur-[120px]',
    baseX: '65%',
    baseY: '60%',
    depth: 0.035,
  },
  {
    className: 'w-96 h-96 bg-white/60 dark:bg-white/10 rounded-full blur-[90px]',
    baseX: '75%',
    baseY: '25%',
    depth: 0.05,
  },
  {
    className: 'w-[30rem] h-[30rem] bg-black/10 dark:bg-white/5 rounded-full blur-[100px]',
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.92),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.08),transparent_30%),linear-gradient(135deg,#f8f8f8_0%,#e8e8e8_48%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,#030303_0%,#101010_50%,#000000_100%)] transition-colors duration-500" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.42)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:72px_72px] dark:bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]" />

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
