"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function FeaturedMatchSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const upcomingMatches = [
    { title: "Butt Lions Academy vs City Hawks", views: "24 videos" },
    { title: "Championship Finals Preview", views: "18 videos" },
    { title: "Player Highlights Compilation", views: "32 videos" },
  ]

  return (
    <section className="min-h-screen bg-black py-20 px-4 md:px-8 lg:px-16">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div  className="flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-white border border-white/30">
                UPCOMING
              </span>
              <span className="text-muted-foreground text-sm">High-intensity match coming</span>
            </motion.div>

            <motion.h2
              
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Butt Lions Academy
              <span className="text-orange-500"> vs City</span>
              <br />
              Hawks
            </motion.h2>

            <motion.p  className="text-lg text-muted-foreground max-w-xl">
              Join us for an intense matchup between two of the regions top field hockey teams. Experience world-class
              athleticism, strategic gameplay, and unforgettable moments on the field.
            </motion.p>
 
          </div>

          {/* Right Content - Match Image and News */}
          <div className="space-y-6">
            {/* Featured Match Image */}
            <motion.div
              
              className="relative h-80 rounded-2xl overflow-hidden glass-effect border border-white/20"
            >
              <img src="/field-hockey-match-action.jpg" alt="Featured match" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            {/* Popular News */}
            <motion.div  className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">POPULAR NEWS</h3>
              <div className="space-y-4">
                {upcomingMatches.map((match, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="group cursor-pointer pb-4 border-b border-white/10 last:border-b-0"
                  >
                    <h4 className="text-white font-semibold group-hover:text-orange-500 transition-colors">
                      {match.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{match.views}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
