"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", question: "" })
  }

  return (
    <section id="contact" className="w-full bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            
            className="relative h-48 sm:h-64 md:h-80 lg:h-full rounded-xl sm:rounded-2xl overflow-hidden order-2 lg:order-1"
          >
            <img src="/hockey-field-training-facility.jpg" alt="Contact" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Right - Form */}
          <motion.div  className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
            <div>
              <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wider mb-2">Any Questions?</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Contact Us</h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Have questions or need assistance? Reach out to our team — were here to help you find the right solutions
              quickly and easily.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 sm:py-4 text-white placeholder-muted-foreground focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
              />
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 sm:py-4 text-white placeholder-muted-foreground focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
              />
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                name="question"
                placeholder="Your question"
                rows={4}
                value={formData.question}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 sm:py-4 text-white placeholder-muted-foreground focus:outline-none focus:border-orange-500 transition-colors resize-none text-sm sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                type="submit"
                className="w-full bg-white text-black  font-semibold py-3 sm:py-4 px-6 rounded-lg hover:bg-black/80 transition-colors text-sm "
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
