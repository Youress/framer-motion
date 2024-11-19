'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

export default function Component() {
  const [isArabic, setIsArabic] = useState(true)
  const secondSectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: secondSectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsArabic((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-black text-white overflow-hidden">
      <section className="flex items-center justify-center h-screen relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black"
        />
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={isArabic ? "arabic" : "english"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center"
            >
              <h1 className="text-6xl font-bold mb-4">
                {isArabic ? "نورتنا" : "Welcome"}
              </h1>
              <p className="text-2xl">
                {isArabic ? "للاعلام والتسويق" : "Media and Marketing"}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <motion.section
        ref={secondSectionRef}
        className="min-h-screen py-16 px-8 relative"
        style={{ opacity }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          style={{ y }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            {isArabic ? "نجهز شيْ يعجبكم" : "Wait For It"}
          </h2>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg shadow-2xl mb-12">
            <p className="text-2xl text-center">
              {isArabic ? "محتوى مميز قادم" : "Exciting content coming soon"}
            </p>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">
                {isArabic ? "تواصل معنا" : "Contact Us"}
              </h3>
              <p>{isArabic ? "اطلب ملف الشركة" : "Request Profile"}</p>
              <p>{isArabic ? "واتساب" : "WhatsApp"}</p>
              <p>Contact@taramedia.com</p>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                {isArabic ? "تابعنا" : "Follow Us"}
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl">📘</a>
                <a href="#" className="text-2xl">📸</a>
                <a href="#" className="text-2xl">🐦</a>
                <a href="#" className="text-2xl">💼</a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}