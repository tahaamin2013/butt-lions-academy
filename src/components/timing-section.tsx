"use client"

import { motion } from "framer-motion"

export function TimingSection() {
  const timings = [
    {
      day: "Saturday",
      time: "6:00 AM",
      description: "Morning Training Session",
    },
    {
      day: "Sunday",
      time: "6:00 AM",
      description: "Weekend Practice",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      className="w-full lg:w-80 bg-white text-black   md:pt-23 backdrop-blur-lg border-l border-black/30 md:border-white/20 p-6 overflow-y-auto rounded-none md:rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div className="mb-8" >
        <p className="text-black md:text-black/60 text-sm font-medium mb-2">Training Schedule</p>
        <h2 className="text-black md:text-black text-3xl font-black">Timing</h2>
      </motion.div>

      {/* Timing Cards */}
      <motion.div className="space-y-4" variants={containerVariants}>
        {timings.map((session, idx) => (
          <motion.div
            key={idx}
            className="bg-white/5 backdrop-blur-sm border border-black/30 md:border-white/10 rounded-lg p-5 hover:bg-white/10 transition group cursor-pointer"
            
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-black md:text-black/60 text-xs font-medium uppercase tracking-wider">{session.day}</p>
                <p className="text-black md:text-black text-3xl font-black mt-2">{session.time}</p>
                <p className="text-black md:text-black/70 text-sm font-medium mt-2">{session.description}</p>
              </div>
              <motion.div
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition"
                whileHover={{ rotate: 90 }}
              >
                <svg className="w-5 h-5 text-black md:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Register Button */}
      <motion.button
        className="w-full mt-8 px-4 py-3 bg-black  text-white  rounded-full font-semibold hover:bg-black/90  transition"
        
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Register Now
      </motion.button>
    </motion.div>
  )
}
