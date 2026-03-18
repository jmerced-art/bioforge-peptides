'use client'

import { useState } from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <div
            className="p-6 sm:p-8 space-y-6"
            style={{ background: '#0E1117', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {[
              {
                title: 'Information We Collect',
                body: 'We collect personal information necessary to process your order, including: name, email address, shipping address, and payment information. Payment details are processed securely through Stripe and are never stored on our servers.',
              },
              {
                title: 'How We Use Your Information',
                body: 'Your information is used solely to process orders, send order confirmations, provide shipping updates, and communicate about your account. We do not use your information for marketing purposes unless you explicitly opt in.',
              },
              {
                title: 'Data Sharing',
                body: 'We do not sell, rent, or share your personal information with third parties for marketing purposes. We share information only with service providers necessary to fulfill your order (payment processing, shipping carriers).',
              },
              {
                title: 'Data Security',
                body: 'We implement industry-standard security measures including SSL encryption, secure payment processing through Stripe, and restricted access to personal data. All transactions are PCI-DSS compliant.',
              },
              {
                title: 'Cookies',
                body: 'We use essential cookies to maintain cart state and site preferences (such as age verification consent). We do not use tracking or advertising cookies.',
              },
              {
                title: 'Your Rights',
                body: 'You have the right to access, correct, or delete your personal information at any time. Contact support@bioforge-peptides.com with any data requests.',
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
