'use client'

import { useState, FormEvent } from 'react'
import { useCartStore } from '@/store/cartStore'

export default function CheckoutForm() {
  const items = useCartStore((s) => s.items)
  const total = useCartStore((s) => s.total())
  const clearCart = useCartStore((s) => s.clearCart)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  })

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // In production, this would create a Stripe PaymentIntent
    // For now, simulate checkout
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, customer: form }),
      })

      if (res.ok) {
        clearCart()
        alert('Order placed successfully! Check your email for confirmation.')
        window.location.href = '/'
      } else {
        alert('Checkout failed. Please try again.')
      }
    } catch {
      alert('Checkout failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    background: '#141820',
    border: '1px solid rgba(255,255,255,0.07)',
    color: '#EDE8DF',
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.8rem',
    padding: '0.75rem',
    width: '100%',
    outline: 'none',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.65rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    color: '#4A4540',
    fontFamily: "'DM Mono', monospace",
    marginBottom: '0.5rem',
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Form Fields */}
        <div className="lg:col-span-3 space-y-5">
          <div
            className="p-6"
            style={{ background: '#0E1117', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <h3
              className="text-lg mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Contact Information
            </h3>
            <div className="space-y-4">
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  style={inputStyle}
                  placeholder="researcher@lab.edu"
                />
              </div>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  style={inputStyle}
                  placeholder="Dr. Jane Smith"
                />
              </div>
            </div>
          </div>

          <div
            className="p-6"
            style={{ background: '#0E1117', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <h3
              className="text-lg mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Shipping Address
            </h3>
            <div className="space-y-4">
              <div>
                <label style={labelStyle}>Address</label>
                <input
                  type="text"
                  required
                  value={form.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label style={labelStyle}>City</label>
                  <input
                    type="text"
                    required
                    value={form.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>State</label>
                  <input
                    type="text"
                    required
                    value={form.state}
                    onChange={(e) => handleChange('state', e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>ZIP</label>
                  <input
                    type="text"
                    required
                    value={form.zip}
                    onChange={(e) => handleChange('zip', e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-6"
            style={{ background: '#0E1117', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <h3
              className="text-lg mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Payment
            </h3>
            <div className="space-y-4">
              <div>
                <label style={labelStyle}>Card Number</label>
                <input
                  type="text"
                  required
                  value={form.cardNumber}
                  onChange={(e) => handleChange('cardNumber', e.target.value)}
                  style={inputStyle}
                  placeholder="4242 4242 4242 4242"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label style={labelStyle}>Expiry</label>
                  <input
                    type="text"
                    required
                    value={form.expiry}
                    onChange={(e) => handleChange('expiry', e.target.value)}
                    style={inputStyle}
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label style={labelStyle}>CVC</label>
                  <input
                    type="text"
                    required
                    value={form.cvc}
                    onChange={(e) => handleChange('cvc', e.target.value)}
                    style={inputStyle}
                    placeholder="123"
                  />
                </div>
              </div>
            </div>

            <p
              className="mt-4 text-[10px]"
              style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
            >
              Test mode — use card 4242 4242 4242 4242, any future expiry, any CVC
            </p>
          </div>

          <button
            type="submit"
            disabled={loading || items.length === 0}
            className="btn-gold w-full py-4"
            style={{ opacity: loading || items.length === 0 ? 0.5 : 1 }}
          >
            {loading ? 'Processing...' : `Place Order — $${total.toFixed(2)}`}
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div
            className="p-6 sticky top-24"
            style={{ background: '#0E1117', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <h3
              className="text-lg mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Order Summary
            </h3>

            {items.length === 0 ? (
              <p
                className="text-xs"
                style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
              >
                No items in cart
              </p>
            ) : (
              <>
                <div className="space-y-3 mb-5">
                  {items.map((item) => (
                    <div
                      key={`${item.productSlug}-${item.variant}`}
                      className="flex justify-between"
                    >
                      <div>
                        <p
                          className="text-xs"
                          style={{ color: '#EDE8DF', fontFamily: "'DM Mono', monospace" }}
                        >
                          {item.productName}
                        </p>
                        <p
                          className="text-[10px]"
                          style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
                        >
                          {item.variant} x {item.quantity}
                        </p>
                      </div>
                      <p
                        className="text-xs"
                        style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace" }}
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="pt-4 flex justify-between"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace" }}
                  >
                    Total
                  </span>
                  <span
                    className="text-lg"
                    style={{ color: '#C8A96E', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                  >
                    ${total.toFixed(2)}
                  </span>
                </div>
              </>
            )}

            <p
              className="mt-5 text-[10px] leading-relaxed"
              style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
            >
              By placing this order, you confirm all products are for laboratory research only
              and agree to our Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </form>
  )
}
