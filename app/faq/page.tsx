'use client'

import { useState } from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

const faqs = [
  {
    q: 'What are your products used for?',
    a: 'All BioForge Peptides products are sold strictly for in-vitro laboratory research and educational purposes. They are not intended for human or animal consumption, therapeutic use, or any clinical application.',
  },
  {
    q: 'How do I reconstitute lyophilized peptides?',
    a: 'Most of our peptides can be reconstituted using bacteriostatic water (BAC water). Gently inject the solvent along the vial wall and let it dissolve without shaking. Specific reconstitution instructions are included with each product and available on the product page.',
  },
  {
    q: 'Do you provide Certificates of Analysis?',
    a: 'Yes. Every single batch we ship includes a Certificate of Analysis (COA) verified by independent HPLC and/or mass spectrometry analysis. COAs are available for download on each product page.',
  },
  {
    q: 'What is your shipping policy?',
    a: 'We ship Monday through Friday. Most orders placed before 2PM EST are fulfilled within 48 hours. All peptides are shipped in insulated packaging with cold packs to maintain compound integrity during transit.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, Mastercard, American Express) processed securely through Stripe. All transactions are encrypted and PCI-compliant.',
  },
  {
    q: 'What is your return policy?',
    a: 'Due to the nature of research compounds, we cannot accept returns on opened products. Unopened products may be returned within 14 days of delivery for a full refund. If you receive a damaged or incorrect product, contact us immediately for a replacement.',
  },
  {
    q: 'Is there a minimum age requirement?',
    a: 'Yes. You must be 21 years of age or older to purchase from BioForge Peptides. By placing an order, you confirm you meet this requirement and are a qualified researcher or professional.',
  },
  {
    q: 'How should I store my peptides?',
    a: 'Lyophilized (unreconstituted) peptides should be stored at -20°C for long-term stability. Reconstituted peptides should be refrigerated at 2-8°C and used within the timeframe specified on the product page. Avoid repeated freeze-thaw cycles.',
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#EDE8DF',
        }}
      >
        <span
          className="text-sm pr-4"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.1rem' }}
        >
          {q}
        </span>
        <span
          className="text-lg flex-shrink-0 transition-transform duration-200"
          style={{
            color: '#C8A96E',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="pb-5">
          <p
            className="text-xs leading-relaxed"
            style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace", fontWeight: 300, lineHeight: 1.8 }}
          >
            {a}
          </p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <Header onCartOpen={() => setCartOpen(true)} />

      <main className="pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#C8A96E' }}
            >
              Support
            </div>
            <h1
              className="text-4xl mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Frequently Asked Questions
            </h1>
            <p
              className="text-xs"
              style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
            >
              Everything you need to know about our research compounds
            </p>
          </div>

          <div
            className="p-6 sm:p-8"
            style={{ background: '#0E1117', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {faqs.map((faq, i) => (
              <AccordionItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
