"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Teams", href: "#teams" },
    { name: "Contact", href: "#contact" },
  ]

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
            <span className="text-black font-bold text-sm">FH</span>
          </div>
          <span className="text-white font-bold text-xs md:text-lg">Fighter Hockey</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="text-white/80 hover:text-white text-sm font-semibold transition scroll-smooth"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector(link.href)
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Right Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex items-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector("#contact")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-white/90 transition cursor-pointer"
          >
            Contact
          </motion.a>
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
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ x: 5 }}
                className="block text-white/80 hover:text-white text-sm font-semibold"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(link.href)
                  element?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector("#contact")
                element?.scrollIntoView({ behavior: "smooth" })
                setIsOpen(false)
              }}
              className="w-full px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-white/90 transition text-center cursor-pointer"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
