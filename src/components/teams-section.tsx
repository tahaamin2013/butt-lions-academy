"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function TeamsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const teams = [
    {
      name: "Senior Team",
      description: "Our elite senior squad competing at the highest levels of field hockey.",
      image: "/senior-field-hockey-team.jpg",
    },
    {
      name: "Junior Team",
      description: "Developing the next generation of hockey champions with intensive training.",
      image: "/junior-field-hockey-team.jpg",
    },
  ]

  return (
    <section className="w-full bg-black py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div  className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-4">Teams</h2>
          <p className="text-sm text-white sm:text-base md:text-lg text-muted-foreground max-w-2xl">
            Explore our competitive teams and join the Fighter Hockey Club family.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="space-y-8 sm:space-y-10 md:space-y-12">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center"
            >
              {/* Alternate layout for visual interest */}
              {index % 2 === 0 ? (
                <>
                  <div className="rounded-lg sm:rounded-2xl overflow-hidden h-48 sm:h-64 md:h-80 lg:h-96">
                    <Image
                      src={team.image || "/placeholder.svg"}
                      alt={team.name}
                      width={500}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
                        {team.name}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                        {team.description}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-bold hover:bg-accent transition-colors text-sm sm:text-base"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-3 sm:space-y-4 md:space-y-6 order-2 md:order-1">
                    <div>
                      <h3 className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl font-bold  mb-2 sm:mb-4">
                        {team.name}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                        {team.description}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-bold hover:bg-accent transition-colors text-sm sm:text-base"
                    >
                      Learn More
                    </motion.button>
                  </div>
                  <div className="rounded-lg sm:rounded-2xl overflow-hidden h-48 sm:h-64 md:h-80 lg:h-96 order-1 md:order-2">
                    <Image
                      src={team.image || "/placeholder.svg"}
                      alt={team.name}
                      width={500}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
