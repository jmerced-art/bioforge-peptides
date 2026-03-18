'use client'

import { useState } from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function TermsPage() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <Header onCartOpen={() => setCartOpen(true)} />

      <main className="pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Terms of Service
          </h1>

          <div
            className="p-6 sm:p-8 space-y-6"
            style={{ background: '#0E1117', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {[
              {
                title: '1. Research Use Only',
                body: 'All products sold by BioForge Peptides are intended strictly for in-vitro laboratory research, educational, and scientific purposes. Products are not intended for human or animal consumption, therapeutic use, food additive use, or any clinical application. By purchasing, you confirm that you understand and agree to use all products solely for lawful research purposes.',
              },
              {
                title: '2. Age Requirement',
                body: 'You must be 21 years of age or older to purchase products from BioForge Peptides. By placing an order, you represent and warrant that you are at least 21 years old.',
              },
              {
                title: '3. Purchaser Qualifications',
                body: 'By purchasing from BioForge Peptides, you represent that you are a qualified researcher, academic professional, or representative of a research institution. You agree to use all products in compliance with applicable local, state, and federal regulations.',
              },
              {
                title: '4. No Medical Claims',
                body: 'BioForge Peptides makes no medical claims about any product. Our products have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or condition. All product descriptions reference published research literature and do not constitute medical advice.',
              },
              {
                title: '5. Limitation of Liability',
                body: 'BioForge Peptides shall not be held liable for any damages arising from the misuse, improper handling, or unauthorized application of any products purchased. The purchaser assumes all risk and liability associated with the use, handling, and storage of products.',
              },
              {
                title: '6. Returns and Refunds',
                body: 'Unopened products may be returned within 14 days of delivery for a full refund. Opened products cannot be returned due to quality assurance concerns. Damaged or incorrect orders will be replaced at no additional cost.',
              },
              {
                title: '7. Privacy',
                body: 'We collect only information necessary to process your order. We do not sell or share personal information with third parties. See our Privacy Policy for full details.',
              },
            ].map((section) => (
              <div key={section.title}>
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  {section.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace", fontWeight: 300, lineHeight: 1.8 }}
                >
                  {section.body}
                </p>
              </div>
            ))}

            <p
              className="text-[10px] pt-4"
              style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace", borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              Last updated: March 2026
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
