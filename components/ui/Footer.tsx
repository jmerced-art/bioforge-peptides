import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="mt-20 py-12 px-4"
      style={{
        background: '#0E1117',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xl"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                BIOFORGE
              </span>
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "'DM Mono', monospace", color: '#C8A96E' }}
              >
                PEPTIDES
              </span>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace", maxWidth: '300px' }}
            >
              Precision Compounds. Research Grade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'DM Mono', monospace", color: '#8A8070' }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: '/', label: 'Shop' },
                { href: '/science', label: 'Science' },
                { href: '/faq', label: 'FAQ' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/privacy', label: 'Privacy Policy' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs no-underline transition-colors duration-200"
                  style={{ fontFamily: "'DM Mono', monospace", color: '#4A4540' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#C8A96E')}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#4A4540')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'DM Mono', monospace", color: '#8A8070' }}
            >
              Research Support
            </h4>
            <p
              className="text-xs leading-relaxed"
              style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
            >
              support@biopforge-peptides.com
            </p>
          </div>
        </div>

        {/* Legal */}
        <div
          className="pt-8 text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p
            className="text-[10px] leading-relaxed max-w-3xl mx-auto"
            style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
          >
            All products sold by BioForge Peptides are intended for laboratory research purposes only.
            Not for human or veterinary use. Not FDA evaluated. Must be 21+ to purchase.
            By purchasing, you confirm you are a licensed researcher or qualified professional
            and agree to our full Terms of Service.
          </p>
          <p
            className="mt-4 text-[10px]"
            style={{ color: '#4A4540', fontFamily: "'DM Mono', monospace" }}
          >
            &copy; {new Date().getFullYear()} BioForge Peptides. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
