'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AgeGate() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem('bioforge_age_verified')
    if (verified !== 'true') {
      setShow(true)
    }
  }, [])

  const handleAgree = () => {
    localStorage.setItem('bioforge_age_verified', 'true')
    setShow(false)
  }

  const handleDisagree = () => {
    window.location.href = 'https://www.google.com'
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(8, 10, 15, 0.97)', backdropFilter: 'blur(20px)' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="max-w-lg w-full mx-4 p-8 text-center"
            style={{
              background: '#0E1117',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: '#C8A96E', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.2em' }}
            >
              Age Verification Required
            </div>

            <h2
              className="text-3xl mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Welcome to BIOFORGE Peptides
            </h2>

            <div
              className="text-sm leading-relaxed mb-8"
              style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace", fontWeight: 300 }}
            >
              <p className="mb-3">
                You must be 21 years of age or older to access this website.
              </p>
              <p className="mb-3">
                All products are sold strictly for laboratory and research purposes only.
                They are not intended for human or animal consumption,
                therapeutic use, or any form of self-administration.
              </p>
              <p>
                By entering this site, you confirm that you meet the age requirement
                and agree to our Terms of Service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleAgree}
                className="btn-gold px-8 py-3"
              >
                I Agree — Enter
              </button>
              <button
                onClick={handleDisagree}
                className="btn-outline px-8 py-3"
              >
                I Disagree — Exit
              </button>
            </div>

            <p
              className="mt-6 text-xs"
              style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
            >
              Not FDA evaluated. Research use only.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
