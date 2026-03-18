'use client'

import { motion } from 'framer-motion'
import { Product, categoryLabels, vialMg } from '@/lib/products'
import VialImage from '@/components/ui/VialImage'

interface ProductCardProps {
  product: Product
  index: number
  onQuickView: (product: Product) => void
}

export default function ProductCard({ product, index, onQuickView }: ProductCardProps) {
  const lowestPrice = Math.min(...product.variants.map((v) => v.price))
  const mg = vialMg[product.slug] || product.variants[0].label

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={() => onQuickView(product)}
      className="group cursor-pointer relative"
      style={{
        background: '#0E1117',
        border: '1px solid rgba(255,255,255,0.07)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.borderColor = 'rgba(200, 169, 110, 0.2)'
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Badge */}
      {product.badge && (
        <div
          className="absolute top-3 right-3 px-2 py-0.5 text-[10px] tracking-widest uppercase z-10"
          style={{
            background: product.badge === 'HOT' ? 'rgba(192, 74, 58, 0.2)' : product.badge === 'NEW' ? 'rgba(45, 139, 127, 0.2)' : 'rgba(200, 169, 110, 0.2)',
            color: product.badge === 'HOT' ? '#C04A3A' : product.badge === 'NEW' ? '#3DADA0' : '#C8A96E',
            border: `1px solid ${product.badge === 'HOT' ? 'rgba(192, 74, 58, 0.3)' : product.badge === 'NEW' ? 'rgba(45, 139, 127, 0.3)' : 'rgba(200, 169, 110, 0.3)'}`,
            fontFamily: "'DM Mono', monospace",
          }}
        >
          {product.badge}
        </div>
      )}

      {/* Category badge - top left */}
      <div
        className="absolute top-3 left-3 px-2 py-0.5 text-[9px] tracking-widest uppercase z-10"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.06)',
          color: '#4A4540',
          fontFamily: "'DM Mono', monospace",
        }}
      >
        {categoryLabels[product.category] || product.category}
      </div>

      {/* Image Area */}
      <div className="relative overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        <VialImage
          name={product.name}
          mg={mg}
          capColor={product.capColor}
          isLiquid={product.isLiquid}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name */}
        <h3
          className="text-xl mb-1"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#EDE8DF' }}
        >
          {product.name}
        </h3>

        {/* Subname */}
        <p
          className="text-[11px] mb-3"
          style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace", fontWeight: 300 }}
        >
          {product.subname}
        </p>

        {/* Purity / Form chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.specs.slice(0, 3).map((spec) => (
            <span
              key={spec}
              className="px-2 py-0.5 text-[10px]"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
                color: '#8A8070',
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span
              className="text-[10px] uppercase tracking-wider"
              style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
            >
              From{' '}
            </span>
            <span
              className="text-lg"
              style={{ color: '#C8A96E', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              ${lowestPrice.toFixed(2)}
            </span>
          </div>
          <span
            className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: '#C8A96E', fontFamily: "'DM Mono', monospace" }}
          >
            Select Options &rarr;
          </span>
        </div>
      </div>
    </motion.div>
  )
}
