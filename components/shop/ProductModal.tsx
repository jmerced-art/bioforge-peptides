'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Product, categoryLabels, vialMg } from '@/lib/products'
import { useCartStore } from '@/store/cartStore'
import VialImage from '@/components/ui/VialImage'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
  onAddToCart: (message: string) => void
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [qty, setQty] = useState(1)
  const addItem = useCartStore((s) => s.addItem)

  if (!product) return null

  const variant = product.variants[selectedVariant]
  const handleAdd = () => {
    addItem({
      productSlug: product.slug,
      productName: product.name,
      variant: variant.label,
      price: variant.price,
      quantity: qty,
    })
    onAddToCart(`${product.name} (${variant.label}) added to cart`)
    onClose()
    setQty(1)
    setSelectedVariant(0)
  }

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60]"
            style={{ background: 'rgba(8, 10, 15, 0.8)', backdropFilter: 'blur(4px)' }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              style={{
                background: '#0E1117',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Close */}
              <div className="flex justify-end p-4">
                <button
                  onClick={onClose}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4A4540' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="flex items-center justify-center">
                  <VialImage
                    name={product.name}
                    mg={vialMg[product.slug] || variant.label}
                    capColor={product.capColor}
                    isLiquid={product.isLiquid}
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  {product.badge && (
                    <span
                      className="inline-block px-2 py-0.5 text-[10px] tracking-widest uppercase mb-3"
                      style={{
                        background: 'rgba(200, 169, 110, 0.1)',
                        border: '1px solid rgba(200, 169, 110, 0.2)',
                        color: '#C8A96E',
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {product.badge}
                    </span>
                  )}

                  <div
                    className="text-[10px] tracking-widest uppercase mb-1"
                    style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
                  >
                    {categoryLabels[product.category] || product.category}
                  </div>

                  <h2
                    className="text-2xl mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                  >
                    {product.name}
                  </h2>

                  <p
                    className="text-xs mb-4"
                    style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace", fontWeight: 300 }}
                  >
                    {product.subname}
                  </p>

                  <p
                    className="text-xs leading-relaxed mb-5"
                    style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace", fontWeight: 300 }}
                  >
                    {product.description}
                  </p>

                  {/* Variants */}
                  <div className="mb-4">
                    <div
                      className="text-[10px] tracking-widest uppercase mb-2"
                      style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
                    >
                      Size
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((v, i) => (
                        <button
                          key={v.label}
                          onClick={() => setSelectedVariant(i)}
                          className="px-3 py-1.5 text-xs transition-all duration-200"
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            background: selectedVariant === i ? 'rgba(200, 169, 110, 0.1)' : 'transparent',
                            border: `1px solid ${selectedVariant === i ? 'rgba(200, 169, 110, 0.4)' : 'rgba(255,255,255,0.07)'}`,
                            color: selectedVariant === i ? '#C8A96E' : '#8A8070',
                            cursor: 'pointer',
                          }}
                        >
                          {v.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <span
                      className="text-2xl"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#C8A96E' }}
                    >
                      ${variant.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Qty */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="text-[10px] tracking-widest uppercase"
                      style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
                    >
                      Qty
                    </div>
                    <div className="flex items-center" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                      <button
                        onClick={() => setQty(Math.max(1, qty - 1))}
                        className="px-3 py-1 text-xs"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#8A8070',
                          cursor: 'pointer',
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        -
                      </button>
                      <span
                        className="px-3 py-1 text-xs"
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          color: '#EDE8DF',
                          borderLeft: '1px solid rgba(255,255,255,0.07)',
                          borderRight: '1px solid rgba(255,255,255,0.07)',
                        }}
                      >
                        {qty}
                      </span>
                      <button
                        onClick={() => setQty(qty + 1)}
                        className="px-3 py-1 text-xs"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#8A8070',
                          cursor: 'pointer',
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button onClick={handleAdd} className="btn-gold w-full py-3">
                    Add to Cart
                  </button>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-2 py-0.5 text-[10px]"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.05)',
                          color: '#4A4540',
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
