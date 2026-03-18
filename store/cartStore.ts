'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  productSlug: string
  productName: string
  variant: string
  price: number
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (slug: string, variant: string) => void
  updateQty: (slug: string, variant: string, qty: number) => void
  clearCart: () => void
  total: () => number
  count: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        set((state) => {
          const existing = state.items.find(
            (i) => i.productSlug === item.productSlug && i.variant === item.variant
          )
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.productSlug === item.productSlug && i.variant === item.variant
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            }
          }
          return { items: [...state.items, item] }
        })
      },

      removeItem: (slug, variant) => {
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.productSlug === slug && i.variant === variant)
          ),
        }))
      },

      updateQty: (slug, variant, qty) => {
        if (qty <= 0) {
          get().removeItem(slug, variant)
          return
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.productSlug === slug && i.variant === variant
              ? { ...i, quantity: qty }
              : i
          ),
        }))
      },

      clearCart: () => set({ items: [] }),

      total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

      count: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    {
      name: 'bioforge-cart',
    }
  )
)
