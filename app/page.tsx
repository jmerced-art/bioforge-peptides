'use client'

import { useState, useCallback } from 'react'
import { products, getProductsByCategory, Product } from '@/lib/products'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import AgeGate from '@/components/ui/AgeGate'
import Toast from '@/components/ui/Toast'
import FilterBar from '@/components/shop/FilterBar'
import ProductGrid from '@/components/shop/ProductGrid'
import ProductModal from '@/components/shop/ProductModal'
import CartDrawer from '@/components/cart/CartDrawer'

export default function HomePage() {
  const [category, setCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '' })

  const filteredProducts = getProductsByCategory(category)

  const handleAddToCart = useCallback((message: string) => {
    setToast({ show: true, message })
  }, [])

  return (
    <>
      <AgeGate />
      <Header onCartOpen={() => setCartOpen(true)} />

      <main className="pt-16">
        {/* Hero */}
        <section
          className="relative py-20 px-4 text-center overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #080A0F 0%, #0E1117 100%)' }}
        >
          <div className="max-w-4xl mx-auto relative z-10">
            <div
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#C8A96E' }}
            >
              Precision Compounds. Research Grade.
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: '#EDE8DF' }}
            >
              Research-Grade Peptides
              <br />
              <span style={{ color: '#C8A96E' }}>Built for Discovery</span>
            </h1>
            <p
              className="text-sm max-w-xl mx-auto mb-10"
              style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace", fontWeight: 300, lineHeight: 1.8 }}
            >
              Premium lyophilized compounds verified by independent HPLC analysis.
              Every batch ships with a Certificate of Analysis.
            </p>

            {/* Stat Chips */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { value: '99.2%', label: 'Avg Purity' },
                { value: '48HR', label: 'Fulfillment' },
                { value: 'COA', label: 'Every Batch' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-5 py-3"
                  style={{
                    background: 'rgba(200, 169, 110, 0.05)',
                    border: '1px solid rgba(200, 169, 110, 0.15)',
                  }}
                >
                  <div
                    className="text-lg mb-0.5"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#C8A96E', letterSpacing: '0.05em' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Background decoration */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #C8A96E 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </section>

        {/* Disclaimer Bar */}
        <div
          className="py-3 px-4 text-center"
          style={{
            background: 'rgba(200, 169, 110, 0.06)',
            borderTop: '1px solid rgba(200, 169, 110, 0.1)',
            borderBottom: '1px solid rgba(200, 169, 110, 0.1)',
          }}
        >
          <p
            className="text-[11px] tracking-wide"
            style={{ color: '#C8A96E', fontFamily: "'DM Mono', monospace", fontWeight: 300 }}
          >
            All products are for laboratory research use only — not for human consumption
          </p>
        </div>

        {/* Product Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2
                className="text-2xl mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                Research Catalog
              </h2>
              <p
                className="text-xs"
                style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
              >
                {filteredProducts.length} compound{filteredProducts.length !== 1 ? 's' : ''} available
              </p>
            </div>
          </div>

          <FilterBar active={category} onChange={setCategory} />
          <ProductGrid
            products={filteredProducts}
            onQuickView={setSelectedProduct}
          />
        </section>
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <Toast
        show={toast.show}
        message={toast.message}
        onClose={() => setToast({ show: false, message: '' })}
      />
    </>
  )
}
