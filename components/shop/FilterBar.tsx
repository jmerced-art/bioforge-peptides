'use client'

import { categories } from '@/lib/products'

interface FilterBarProps {
  active: string
  onChange: (category: string) => void
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onChange(cat.key)}
          className="px-4 py-2 text-xs uppercase tracking-widest transition-all duration-200 whitespace-nowrap shrink-0"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontWeight: 400,
            background: active === cat.key ? 'rgba(200, 169, 110, 0.1)' : 'transparent',
            border: `1px solid ${active === cat.key ? 'rgba(200, 169, 110, 0.3)' : 'rgba(255,255,255,0.07)'}`,
            color: active === cat.key ? '#C8A96E' : '#8A8070',
            cursor: 'pointer',
          }}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
