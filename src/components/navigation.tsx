"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Goy from "./goy"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Teams", href: "teams" },
    { name: "Contact", href: "contact" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">BLA</span>
          </div>
          <span className="text-white font-bold text-xs md:text-lg">Butt Lions Academy</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
           <motion.a
           href="/"
                className="text-white/80 hover:text-white text-sm font-semibold transition"
              >
                Home
              </motion.a>
          {navLinks.map((link, index) => (
            <Goy id={link.href} key={link.name}>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-white/80 hover:text-white text-sm font-semibold transition"
              >
                {link.name}
              </motion.p>
            </Goy>
          ))}
        </div>

        {/* Right Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex items-center gap-4"
        >
          <Goy id="contact">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-white/90 transition"
          >
            Contact
          </motion.a>
          </Goy>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-black/80 backdrop-blur-sm border-t border-white/10"
        >
          <div className="px-6 py-4 space-y-3 flex flex-col">
              <motion.a
           href="/"
                className="text-white/80 hover:text-white text-sm font-semibold transition"
              >
                Home
              </motion.a>
          {navLinks.map((link, index) => (
            <Goy id={link.href} key={link.name}>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-white/80 hover:text-white text-sm font-semibold transition"
              >
                {link.name}
              </motion.p>
            </Goy>
          ))}
              <Goy id="contact">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-white/90 transition"
          >
            Contact
          </motion.a>
          </Goy>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
