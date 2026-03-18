'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import CartItemComponent from './CartItem'
import Link from 'next/link'

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const items = useCartStore((s) => s.items)
  const total = useCartStore((s) => s.total())
  const clearCart = useCartStore((s) => s.clearCart)

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[80]"
            style={{ background: 'rgba(8, 10, 15, 0.7)' }}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-[85] w-full sm:w-96 flex flex-col"
            style={{
              background: '#0E1117',
              borderLeft: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between p-5"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3
                className="text-lg"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                Your Cart
              </h3>
              <button
                onClick={onClose}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4A4540' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p
                    className="text-xs mb-4"
                    style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
                  >
                    Your cart is empty
                  </p>
                  <button onClick={onClose} className="btn-outline text-xs">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <CartItemComponent
                    key={`${item.productSlug}-${item.variant}`}
                    item={item}
                  />
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div
                className="p-5"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace" }}
                  >
                    Subtotal
                  </span>
                  <span
                    className="text-lg"
                    style={{ color: '#C8A96E', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                  >
                    ${total.toFixed(2)}
                  </span>
                </div>
                <Link href="/checkout" onClick={onClose}>
                  <button className="btn-gold w-full py-3 mb-2">
                    Checkout
                  </button>
                </Link>
                <button
                  onClick={clearCart}
                  className="w-full py-2 text-[10px] uppercase tracking-widest"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#4A4540',
                    cursor: 'pointer',
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
