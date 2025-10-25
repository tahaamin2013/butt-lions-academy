"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <div className="flex-1 relative w-full h-screen overflow-hidden">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source
          src="/video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        className="relative h-full flex flex-col justify-between p-6 md:p-8 lg:p-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >


        {/* Center - Main Content */}
        <div className="max-w-2xl">
                  {/* Top Left - Logo */}
        <motion.div className="flex items-center gap-3 pt-16  md:pt-20" >
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <span className="text-white/60 text-xs md:text-sm font-bold">FIGHTER HOCKEY</span>
        </motion.div>
        <motion.h1
    className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight mb-4 md:mb-6"
    
  >
    Elevate Your Field Hockey Excellence
  </motion.h1>
  <motion.p
    className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed font-semibold max-w-xl"
    
  >
    Join the elite ranks of field hockey athletes. Experience professional coaching, 
    state-of-the-art facilities, and a community dedicated to pushing the boundaries 
    of hockey excellence.
  </motion.p>

                 <motion.div
          className="flex  mt-6 flex-row items-center gap-3 md:gap-4 w-full md:w-auto"
          
        >
          <motion.button
            className="w-full md:w-auto px-6 md:px-8 py-3 bg-white text-black rounded-full font-black hover:bg-white/90 transition text-base md:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the team
          </motion.button>
          <motion.button
            className="w-full md:w-auto px-6 md:px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition text-base md:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore membership
          </motion.button>
        </motion.div>
        </div>

        {/* Bottom - CTA Buttons */}
 
      </motion.div>
    </div>
  )
}
