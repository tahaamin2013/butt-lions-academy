"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Senior Player",
      image: "/female-athlete.png",
      rating: 5,
      text: "The training program at Butt Lions Academy Club has transformed my game. The coaching staff is exceptional and truly invested in our development.",
    },
    {
      name: "James Chen",
      role: "Junior Team Captain",
      image: "/male-athlete.png",
      rating: 5,
      text: "Best decision joining this club. The community is supportive, the facilities are top-notch, and the competitive spirit is unmatched.",
    },
    {
      name: "Emma Rodriguez",
      role: "Parent",
      image: "/loving-parent.png",
      rating: 5,
      text: "My daughter has grown so much as a player and person. The club emphasizes both skill development and character building.",
    },
  ]

  return (
    <section className="w-full bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div  className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
            What Our Community Says
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our players, families, and supporters about their experience with Butt Lions Academy Club.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              
              whileHover={{ y: -3 }}
              className="glass-effect p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-500 text-orange-500 sm:w-5 sm:h-5" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
