"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Teams", href: "#teams" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-black border-t border-white/10">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div  className="space-y-4">
            <h4 className="text-xl font-bold text-white">BLA</h4>
            <p className="text-muted-foreground text-xs md:text-sm">
              Butt Lions Academy Club - Developing champions on and off the field.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Icon size={18} className="text-white" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div  className="space-y-4">
            <h5 className="font-semibold text-white text-sm">Navigation</h5>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 4, color: "#fff" }}
                    transition={{ duration: 0.2 }}
                    className="transition-colors"
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
     

          {/* Contact */}
          <motion.div  className="space-y-4">
            <h5 className="font-semibold text-white text-sm">Contact</h5>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>123 Hockey Lane</li>
              <li>Sports City, SC 12345</li>
              <li>(555) 123-4567</li>
              <li>info@fighterhockey.com</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-muted-foreground gap-4"
        >
          <p>&copy; Butt Lions Academy Club 2025. All rights reserved.</p>
      
        </motion.div>
      </motion.div>
    </footer>
  )
}
