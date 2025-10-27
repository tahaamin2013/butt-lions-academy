"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
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

  return (
    <section id="about" className="w-full bg-black bg-background py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left side - Images */}
          <motion.div  className="relative order-2 md:order-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-lg sm:rounded-2xl overflow-hidden h-40 sm:h-64 md:h-80">
                <Image
                  src="/field-hockey-training-facility.jpg"
                  alt="Hockey training"
                  width={280}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg sm:rounded-2xl overflow-hidden h-40 sm:h-64 md:h-80 mt-4 sm:mt-8">
                <Image
                  src="/hockey-players-in-action.jpg"
                  alt="Hockey players"
                  width={280}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right side - Text sections */}
          <motion.div variants={containerVariants} className="space-y-4 sm:space-y-6 md:space-y-8 order-1 md:order-2">
            <motion.div >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 text-white sm:mb-4">
                About Our Club
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                With years of experience in field hockey, we specialize in developing elite athletes through innovative
                training methods and a commitment to excellence. We aim to build lasting relationships and create
                champions both on and off the field.
              </p>
            </motion.div>

            <motion.div >
              <h3 className="text-lg text-white sm:text-xl md:text-2xl font-bold text-foreground mb-2">Our Mission</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                To provide exceptional field hockey training that exceeds player expectations through innovation,
                quality coaching, and a commitment to developing well-rounded athletes.
              </p>
            </motion.div>

            <motion.div >
              <h3 className="text-lg text-white sm:text-xl md:text-2xl font-bold text-foreground mb-2">Our Vision</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                To be the premier field hockey club recognized for developing champions and fostering a community of
                passionate, dedicated athletes.
              </p>
            </motion.div>

            <motion.div >
              <h3 className="text-lg text-white sm:text-xl md:text-2xl font-bold text-foreground mb-2">Our History</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Founded with a vision to transform field hockey in our region, Fighter Hockey Club has grown into a
                leading institution for athlete development and competitive excellence.
              </p>
            </motion.div>

            
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
