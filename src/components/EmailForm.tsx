"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `${formData.message}`,
        }),
      })

      if (response.ok) {
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        const result = await response.json()
        alert(`Failed to send message: ${result.error}`)
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try again later.")
    }
  }

  return (
    <div id="contact" className="w-full bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <motion.div
            
            className="relative h-48 sm:h-64 md:h-80 lg:h-full rounded-xl sm:rounded-2xl overflow-hidden order-2 lg:order-1"
          >
            <Image src="/hockey-field-training-facility.jpg" alt="Contact" fill className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          <motion.div  className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Get in Touch</p>
              <h2 className="text-3xl font-bold text-white">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <motion.div >
                <label htmlFor="name" className="block text-white font-medium mb-2 text-sm">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-orange-500 transition-colors text-sm"
                />
              </motion.div>

              <motion.div >
                <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-orange-500 transition-colors text-sm"
                />
              </motion.div>

              <motion.div >
                <label htmlFor="message" className="block text-white font-medium mb-2 text-sm">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-orange-500 transition-colors resize-none text-sm"
                />
              </motion.div>

              <motion.button
                
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                type="submit"
                className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm mt-6"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
