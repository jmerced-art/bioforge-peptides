'use client'

import { useState } from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

const sections = [
  {
    title: 'Peptides',
    description: 'Peptides are short chains of amino acids linked by peptide bonds, typically comprising 2-50 amino acids. In research settings, synthetic peptides serve as critical tools for studying receptor binding, cellular signaling pathways, and structure-activity relationships. Our metabolic peptide compounds, such as GLP-1 receptor agonists, are among the most actively studied molecules in contemporary biochemical research.',
    color: '#C8A96E',
  },
  {
    title: 'Nootropic Peptides',
    description: 'Nootropic peptides represent a class of synthetic compounds studied for their interaction with neurotrophic factors and neurological signaling pathways. Compounds such as Semax and Selank have been the subject of extensive published research examining mechanisms of action related to BDNF modulation, neurotransmitter regulation, and neuroprotection in laboratory models.',
    color: '#2D8B7F',
  },
  {
    title: 'Regenerative Compounds',
    description: 'Regenerative peptide research focuses on molecules that interact with tissue remodeling pathways, extracellular matrix regulation, and growth factor signaling. Copper peptide complexes like GHK-Cu have been extensively characterized in peer-reviewed literature for their roles in collagen synthesis, anti-inflammatory signaling, and wound healing research models.',
    color: '#C8A96E',
  },
  {
    title: 'Amino Peptide Blends',
    description: 'Research-grade amino peptide blends combine synergistic compounds designed for multi-pathway investigation. These proprietary formulations allow researchers to study combinatorial effects and pathway interactions that single-compound studies cannot capture. All blends undergo rigorous quality testing with full COA documentation.',
    color: '#2D8B7F',
  },
]

export default function SciencePage() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <Header onCartOpen={() => setCartOpen(true)} />

      <main className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#C8A96E' }}
            >
              Research Library
            </div>
            <h1
              className="text-4xl mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              The Science Behind Our Compounds
            </h1>
            <p
              className="text-xs max-w-xl mx-auto"
              style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace", lineHeight: 1.8 }}
            >
              An overview of compound categories and their areas of active research.
              No medical claims are made.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section, i) => (
              <div
                key={i}
                className="p-6 sm:p-8"
                style={{
                  background: '#0E1117',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderLeft: `2px solid ${section.color}`,
                }}
              >
                <h2
                  className="text-2xl mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  {section.title}
                </h2>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#8A8070', fontFamily: "'DM Mono', monospace", fontWeight: 300, lineHeight: 1.8 }}
                >
                  {section.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-10 p-6 text-center"
            style={{
              background: 'rgba(200, 169, 110, 0.04)',
              border: '1px solid rgba(200, 169, 110, 0.1)',
            }}
          >
            <p
              className="text-[11px]"
              style={{ color: '#C8A96E', fontFamily: "'DM Mono', monospace", fontWeight: 300 }}
            >
              All information presented is for educational and research reference purposes only.
              No statements on this page have been evaluated by the FDA.
              These products are not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
