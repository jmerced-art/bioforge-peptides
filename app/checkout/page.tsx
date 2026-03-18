'use client'

import { useState } from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import CheckoutForm from '@/components/checkout/CheckoutForm'

export default function CheckoutPage() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <Header onCartOpen={() => setCartOpen(true)} />

      <main className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1
            className="text-3xl mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Checkout
          </h1>
          <CheckoutForm />
        </div>
      </main>

      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
