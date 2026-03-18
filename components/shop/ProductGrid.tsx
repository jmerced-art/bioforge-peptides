'use client'

import { Product } from '@/lib/products'
import ProductCard from './ProductCard'
import { AnimatePresence } from 'framer-motion'

interface ProductGridProps {
  products: Product[]
  onQuickView: (product: Product) => void
}

export default function ProductGrid({ products, onQuickView }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <AnimatePresence>
        {products.map((product, index) => (
          <ProductCard
            key={product.slug}
            product={product}
            index={index}
            onQuickView={onQuickView}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
