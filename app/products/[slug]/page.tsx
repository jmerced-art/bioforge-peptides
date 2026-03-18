'use client'

import { useState, useCallback } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { getProduct, categoryLabels, vialMg } from '@/lib/products'
import { useCartStore } from '@/store/cartStore'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Toast from '@/components/ui/Toast'
import CartDrawer from '@/components/cart/CartDrawer'
import VialImage from '@/components/ui/VialImage'

export default function ProductPage() {
  const params = useParams()
  const product = getProduct(params.slug as string)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [qty, setQty] = useState(1)
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '' })
  const addItem = useCartStore((s) => s.addItem)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-3xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Product Not Found
          </h1>
          <Link href="/" className="btn-outline inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const variant = product.variants[selectedVariant]
  const handleAdd = () => {
    addItem({
      productSlug: product.slug,
      productName: product.name,
      variant: variant.label,
      price: variant.price,
      quantity: qty,
    })
    setToast({ show: true, message: `${product.name} (${variant.label}) added to cart` })
  }

  return (
    <>
      <Header onCartOpen={() => setCartOpen(true)} />

      <main className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/"
              className="text-xs no-underline"
              style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
            >
              &larr; Back to catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div
              className="flex items-center justify-center"
              style={{ border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <VialImage
                name={product.name}
                mg={vialMg[product.slug] || variant.label}
                capColor={product.capColor}
                isLiquid={product.isLiquid}
              />
            </div>

            {/* Details */}
            <div>
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
                className="text-[10px] tracking-widest uppercase mb-2"
                style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
              >
                {categoryLabels[product.category] || product.category}
              </div>

              <h1
                className="text-4xl mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                {product.name}
              </h1>

              <p
                className="text-sm mb-6"
                style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace", fontWeight: 300 }}
              >
                {product.subname}
              </p>

              <p
                className="text-xs leading-relaxed mb-8"
                style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace", fontWeight: 300, lineHeight: 1.8 }}
              >
                {product.description}
              </p>

              {/* Variants */}
              <div className="mb-5">
                <div
                  className="text-[10px] tracking-widest uppercase mb-2"
                  style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
                >
                  Select Size
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v, i) => (
                    <button
                      key={v.label}
                      onClick={() => setSelectedVariant(i)}
                      className="px-4 py-2 text-xs transition-all duration-200"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        background: selectedVariant === i ? 'rgba(200, 169, 110, 0.1)' : 'transparent',
                        border: `1px solid ${selectedVariant === i ? 'rgba(200, 169, 110, 0.4)' : 'rgba(255,255,255,0.07)'}`,
                        color: selectedVariant === i ? '#C8A96E' : '#8A8070',
                        cursor: 'pointer',
                      }}
                    >
                      {v.label} — ${v.price.toFixed(2)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-5">
                <span
                  className="text-3xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#C8A96E' }}
                >
                  ${variant.price.toFixed(2)}
                </span>
              </div>

              {/* Qty + Add */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-4 py-2 text-sm"
                    style={{ background: 'none', border: 'none', color: '#8A8070', cursor: 'pointer', fontFamily: "'DM Mono', monospace" }}
                  >
                    -
                  </button>
                  <span
                    className="px-4 py-2 text-sm"
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
                    className="px-4 py-2 text-sm"
                    style={{ background: 'none', border: 'none', color: '#8A8070', cursor: 'pointer', fontFamily: "'DM Mono', monospace" }}
                  >
                    +
                  </button>
                </div>
                <button onClick={handleAdd} className="btn-gold flex-1 py-3">
                  Add to Cart
                </button>
              </div>

              {/* Technical Details */}
              <div
                className="p-5"
                style={{ background: '#0E1117', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <h4
                  className="text-[10px] tracking-widest uppercase mb-4"
                  style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace" }}
                >
                  Technical Specifications
                </h4>
                <div className="space-y-2">
                  {Object.entries(product.details).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                      <span
                        className="text-[11px]"
                        style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
                      >
                        {key}
                      </span>
                      <span
                        className="text-[11px]"
                        style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace" }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <Toast
        show={toast.show}
        message={toast.message}
        onClose={() => setToast({ show: false, message: '' })}
      />
    </>
  )
}
