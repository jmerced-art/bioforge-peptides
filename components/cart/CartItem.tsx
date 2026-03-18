'use client'

import { CartItem as CartItemType } from '@/store/cartStore'
import { useCartStore } from '@/store/cartStore'

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const updateQty = useCartStore((s) => s.updateQty)
  const removeItem = useCartStore((s) => s.removeItem)

  return (
    <div
      className="flex items-start gap-4 py-4"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="flex-1">
        <h4
          className="text-sm mb-0.5"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#EDE8DF' }}
        >
          {item.productName}
        </h4>
        <p
          className="text-[10px] mb-2"
          style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
        >
          {item.variant}
        </p>

        <div className="flex items-center gap-2">
          <div className="flex items-center" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
            <button
              onClick={() => updateQty(item.productSlug, item.variant, item.quantity - 1)}
              className="px-2 py-0.5 text-xs"
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
              className="px-2 py-0.5 text-xs"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: '#EDE8DF',
                borderLeft: '1px solid rgba(255,255,255,0.07)',
                borderRight: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {item.quantity}
            </span>
            <button
              onClick={() => updateQty(item.productSlug, item.variant, item.quantity + 1)}
              className="px-2 py-0.5 text-xs"
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
          <button
            onClick={() => removeItem(item.productSlug, item.variant)}
            className="text-[10px] uppercase tracking-widest"
            style={{
              background: 'none',
              border: 'none',
              color: '#C04A3A',
              cursor: 'pointer',
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Remove
          </button>
        </div>
      </div>

      <div
        className="text-sm text-right"
        style={{ color: '#C8A96E', fontFamily: "'DM Mono', monospace" }}
      >
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  )
}
