'use client'

import { useId } from 'react'

interface VialImageProps {
  name: string
  mg: string
  capColor: string
  accentColor?: string
  isLiquid?: boolean
}

function lightenColor(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.min(255, ((num >> 16) & 0xff) + Math.round(255 * amount))
  const g = Math.min(255, ((num >> 8) & 0xff) + Math.round(255 * amount))
  const b = Math.min(255, (num & 0xff) + Math.round(255 * amount))
  return `rgb(${r},${g},${b})`
}

function darkenColor(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.max(0, Math.round(((num >> 16) & 0xff) * (1 - amount)))
  const g = Math.max(0, Math.round(((num >> 8) & 0xff) * (1 - amount)))
  const b = Math.max(0, Math.round((num & 0xff) * (1 - amount)))
  return `rgb(${r},${g},${b})`
}

function compoundFontSize(name: string): string {
  if (name.length <= 7) return '13'
  if (name.length <= 10) return '11'
  return '9.5'
}

function SingleVial({
  name,
  mg,
  capColor,
  accentColor,
  uid,
  isLiquid = false,
}: {
  name: string
  mg: string
  capColor: string
  accentColor?: string
  uid: string
  isLiquid?: boolean
}) {
  const accent = accentColor || capColor
  const capLight = lightenColor(capColor, 0.35)
  const capMid = lightenColor(capColor, 0.15)
  const capDark = darkenColor(capColor, 0.4)
  const capDarker = darkenColor(capColor, 0.6)
  const id = uid

  return (
    <g>
      <defs>
        {/* All SVG filters removed for rendering performance */}

        {/* === GRADIENTS === */}
        {/* Glass body — 6-stop horizontal simulating cylindrical refraction */}
        <linearGradient id={`glass-body-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3a5868" stopOpacity="0.55" />
          <stop offset="8%" stopColor="#c8dde6" stopOpacity="0.6" />
          <stop offset="22%" stopColor="#8baab8" stopOpacity="0.22" />
          <stop offset="68%" stopColor="#9ab8c8" stopOpacity="0.16" />
          <stop offset="88%" stopColor="#6a8898" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#2a4858" stopOpacity="0.6" />
        </linearGradient>
        {/* Glass specular streak — bright left-side highlight */}
        <linearGradient id={`glass-spec-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="8%" stopColor="white" stopOpacity="0.7" />
          <stop offset="16%" stopColor="white" stopOpacity="0.15" />
          <stop offset="22%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Secondary specular — subtle right-side reflection */}
        <linearGradient id={`glass-spec2-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="70%" stopColor="white" stopOpacity="0" />
          <stop offset="82%" stopColor="white" stopOpacity="0.12" />
          <stop offset="90%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Glass inner vignette — edge darkening */}
        <radialGradient id={`glass-inner-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="80%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.25)" />
        </radialGradient>
        {/* Glass vertical gradient for depth */}
        <linearGradient id={`glass-vert-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(180,220,240,0.08)" />
          <stop offset="50%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.12)" />
        </linearGradient>
        {/* Glass clip */}
        <clipPath id={`glass-clip-${id}`}>
          <rect x="100" y="145" width="100" height="135" rx="10" />
        </clipPath>
        {/* Shoulder gradient */}
        <linearGradient id={`shoulder-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3a5868" stopOpacity="0.65" />
          <stop offset="12%" stopColor="#aac4d0" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#9ab8c8" stopOpacity="0.2" />
          <stop offset="85%" stopColor="#8aacbc" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2a4858" stopOpacity="0.65" />
        </linearGradient>
        {/* Shoulder specular */}
        <linearGradient id={`shoulder-spec-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="12%" stopColor="white" stopOpacity="0.4" />
          <stop offset="25%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Cap dome radial — metallic sheen */}
        <radialGradient id={`cap-dome-${id}`} cx="38%" cy="28%" r="55%">
          <stop offset="0%" stopColor={capLight} />
          <stop offset="30%" stopColor={capMid} />
          <stop offset="60%" stopColor={capColor} />
          <stop offset="100%" stopColor={capDarker} />
        </radialGradient>
        {/* Cap skirt gradient — crimp ring */}
        <linearGradient id={`cap-skirt-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={capDarker} />
          <stop offset="15%" stopColor={capColor} />
          <stop offset="35%" stopColor={capLight} />
          <stop offset="50%" stopColor={capMid} />
          <stop offset="65%" stopColor={capLight} />
          <stop offset="85%" stopColor={capColor} />
          <stop offset="100%" stopColor={capDarker} />
        </linearGradient>
        {/* Cap skirt vertical — crimp texture */}
        <linearGradient id={`cap-skirt-v-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="40%" stopColor="transparent" />
          <stop offset="80%" stopColor="rgba(0,0,0,0.15)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.25)" />
        </linearGradient>
        {/* Septum — very subtle flat rubber insert */}
        <radialGradient id={`septum-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#3a3a3a" />
        </radialGradient>
        {/* Label wrap shadow */}
        <linearGradient id={`label-wrap-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(0,0,0,0.4)" />
          <stop offset="10%" stopColor="rgba(0,0,0,0.05)" />
          <stop offset="50%" stopColor="rgba(0,0,0,0)" />
          <stop offset="90%" stopColor="rgba(0,0,0,0.05)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
        </linearGradient>
        {/* Label light — simulated overhead illumination */}
        <linearGradient id={`label-light-${id}`} x1="0.3" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.02)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.06)" />
        </linearGradient>
        {/* Neck glass gradient */}
        <linearGradient id={`neck-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3a5868" stopOpacity="0.3" />
          <stop offset="15%" stopColor="#aac4d0" stopOpacity="0.15" />
          <stop offset="85%" stopColor="#8aacbc" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#2a4858" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* ===== LAYER 1: CAST SHADOW ===== */}
      <ellipse cx="155" cy="308" rx="55" ry="10" fill="rgba(0,0,0,0.35)" />
      <ellipse cx="155" cy="306" rx="40" ry="6" fill="rgba(0,0,0,0.2)" />

      {/* ===== LAYER 2: SURFACE REFLECTION ===== */}
      <g opacity="0.12">
        <rect x="105" y="312" width="90" height="45" rx="6"
          fill="rgba(140,170,190,0.2)" />
        <rect x="112" y="316" width="76" height="28" rx="3"
          fill="rgba(245,242,234,0.12)" />
      </g>

      {/* ===== LAYER 3: GLASS BODY ===== */}
      {/* Main body fill */}
      <rect x="100" y="145" width="100" height="135" rx="10"
        fill={`url(#glass-body-${id})`} stroke="rgba(150,200,220,0.35)" strokeWidth="1.5" />
      {/* Vertical depth */}
      <rect x="100" y="145" width="100" height="135" rx="10"
        fill={`url(#glass-vert-${id})`} />
      {/* Primary specular streak */}
      <rect x="100" y="145" width="100" height="135" rx="10"
        fill={`url(#glass-spec-${id})`} />
      {/* Secondary specular */}
      <rect x="100" y="145" width="100" height="135" rx="10"
        fill={`url(#glass-spec2-${id})`} />
      {/* Inner vignette */}
      <rect x="100" y="145" width="100" height="135" rx="10"
        fill={`url(#glass-inner-${id})`} />

      {/* Content inside vial */}
      {isLiquid ? (
        <>
          {/* Liquid fill — clear blue-tinted water */}
          <rect x="104" y="190" width="92" height="88" rx="0" fill="rgba(180,220,245,0.18)"
            clipPath={`url(#glass-clip-${id})`} />
          {/* Liquid surface — meniscus */}
          <ellipse cx="150" cy="190" rx="44" ry="5" fill="rgba(160,210,240,0.25)"
            clipPath={`url(#glass-clip-${id})`} />
          {/* Liquid specular highlight */}
          <rect x="108" y="200" width="10" height="60" rx="2" fill="rgba(255,255,255,0.08)"
            clipPath={`url(#glass-clip-${id})`} />
        </>
      ) : (
        <>
          {/* Lyophilized powder — white/cream cake at bottom */}
          <ellipse cx="150" cy="270" rx="40" ry="9" fill="rgba(240,235,218,0.45)"
            clipPath={`url(#glass-clip-${id})`} />
          <rect x="110" y="258" width="80" height="20" rx="0" fill="rgba(240,235,218,0.3)"
            clipPath={`url(#glass-clip-${id})`} />
          <ellipse cx="150" cy="258" rx="38" ry="5" fill="rgba(250,245,230,0.2)"
            clipPath={`url(#glass-clip-${id})`} />
          {/* Powder highlight */}
          <ellipse cx="142" cy="264" rx="18" ry="4" fill="rgba(255,255,255,0.12)"
            clipPath={`url(#glass-clip-${id})`} />
        </>
      )}

      {/* ===== LAYER 4: SHOULDER / NECK ===== */}
      <polygon points="100,145 116,118 184,118 200,145"
        fill={`url(#shoulder-${id})`} stroke="rgba(150,200,220,0.25)" strokeWidth="1" />
      {/* Shoulder specular */}
      <polygon points="100,145 116,118 184,118 200,145"
        fill={`url(#shoulder-spec-${id})`} />
      {/* Shoulder bottom edge highlight */}
      <line x1="100" y1="145" x2="200" y2="145" stroke="rgba(200,230,245,0.2)" strokeWidth="1" />
      {/* Neck */}
      <rect x="116" y="100" width="68" height="20" rx="2"
        fill={`url(#neck-${id})`} stroke="rgba(150,200,220,0.2)" strokeWidth="0.8" />
      {/* Neck specular */}
      <rect x="118" y="101" width="12" height="18" rx="1" fill="rgba(255,255,255,0.15)" />

      {/* ===== LAYER 5: FLAT CRIMP CAP ===== */}
      {/* Crimp skirt — thin cylinder wrapping neck */}
      <rect x="113" y="82" width="74" height="22" rx="2"
        fill={`url(#cap-skirt-${id})`} />
      <rect x="113" y="82" width="74" height="22" rx="2"
        fill={`url(#cap-skirt-v-${id})`} />
      {/* Crimp lines (brushed texture) */}
      <line x1="120" y1="82" x2="120" y2="104" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      <line x1="128" y1="82" x2="128" y2="104" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
      <line x1="136" y1="82" x2="136" y2="104" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <line x1="144" y1="82" x2="144" y2="104" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" />
      <line x1="152" y1="82" x2="152" y2="104" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
      <line x1="160" y1="82" x2="160" y2="104" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
      <line x1="168" y1="82" x2="168" y2="104" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <line x1="176" y1="82" x2="176" y2="104" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" />
      {/* Crimp skirt outline */}
      <rect x="113" y="82" width="74" height="22" rx="2"
        fill="none" stroke="rgba(60,60,60,0.5)" strokeWidth="0.8" />
      {/* Crimp flare at bottom — subtle outward edge */}
      <rect x="111" y="102" width="78" height="3" rx="1" fill="rgba(180,180,180,0.2)" />
      <line x1="111" y1="105" x2="189" y2="105" stroke="rgba(0,0,0,0.25)" strokeWidth="0.5" />
      {/* FLAT TOP DISC — like a coin, NOT a dome */}
      <rect x="113" y="78" width="74" height="5" rx="1"
        fill={`url(#cap-skirt-${id})`} />
      {/* Flat top highlight — matte-metallic brushed finish */}
      <rect x="113" y="78" width="74" height="5" rx="1"
        fill="rgba(255,255,255,0.15)" />
      {/* Flat top outline */}
      <rect x="113" y="78" width="74" height="5" rx="1"
        fill="none" stroke="rgba(60,60,60,0.4)" strokeWidth="0.6" />
      {/* Top surface specular — angled highlight */}
      <rect x="118" y="79" width="30" height="3" rx="0.5"
        fill="rgba(255,255,255,0.3)" />
      {/* Rubber septum — tiny flat disc, flush with cap */}
      <circle cx="150" cy="80.5" r="4" fill={`url(#septum-${id})`} />
      <circle cx="150" cy="80.5" r="4" fill="none" stroke="rgba(50,50,50,0.3)" strokeWidth="0.3" />

      {/* ===== LAYER 6: LABEL ===== */}
      {/* Base label */}
      <rect x="108" y="175" width="84" height="95" rx="3"
        fill="#F5F2EA" opacity="0.95" clipPath={`url(#glass-clip-${id})`} />
      {/* Wrap shadow */}
      <rect x="108" y="175" width="84" height="95" rx="3"
        fill={`url(#label-wrap-${id})`} clipPath={`url(#glass-clip-${id})`} />
      {/* Lighting overlay */}
      <rect x="108" y="175" width="84" height="95" rx="3"
        fill={`url(#label-light-${id})`} clipPath={`url(#glass-clip-${id})`} />
      {/* Top accent stripe */}
      <rect x="108" y="175" width="84" height="2.5" rx="0"
        fill={accent} opacity="0.85" clipPath={`url(#glass-clip-${id})`} />
      {/* Bottom accent stripe */}
      <rect x="108" y="268" width="84" height="2" rx="0"
        fill={accent} opacity="0.6" clipPath={`url(#glass-clip-${id})`} />
      {/* Brand name */}
      <text x="150" y="194" fontFamily="'Bebas Neue', sans-serif" fontSize="9" letterSpacing="3px"
        fill="#1a1a1a" textAnchor="middle" clipPath={`url(#glass-clip-${id})`}>BIOFORGE</text>
      {/* Divider line */}
      <line x1="120" y1="198" x2="180" y2="198" stroke={accent} strokeWidth="0.7" opacity="0.6"
        clipPath={`url(#glass-clip-${id})`} />
      {/* Compound name — auto line-break for long/multi-word names */}
      {(() => {
        const upper = name.toUpperCase()
        const fs = compoundFontSize(name)
        const clip = `url(#glass-clip-${id})`
        const common = { fontFamily: "'DM Mono', monospace", fontWeight: 600, fill: '#111', textAnchor: 'middle' as const }
        if (upper.includes('-') && upper.length > 9) {
          const i = upper.lastIndexOf('-')
          return (<>
            <text x="150" y="213" fontSize={fs} clipPath={clip} {...common}>{upper.slice(0, i + 1)}</text>
            <text x="150" y="226" fontSize={fs} clipPath={clip} {...common}>{upper.slice(i + 1)}</text>
          </>)
        } else if (upper.includes(' ') && upper.length > 9) {
          const parts = upper.split(' ')
          const mid = Math.ceil(parts.length / 2)
          return (<>
            <text x="150" y="213" fontSize={fs} clipPath={clip} {...common}>{parts.slice(0, mid).join(' ')}</text>
            <text x="150" y="226" fontSize={fs} clipPath={clip} {...common}>{parts.slice(mid).join(' ')}</text>
          </>)
        }
        return <text x="150" y="218" fontSize={fs} clipPath={clip} {...common}>{upper}</text>
      })()}
      {/* Dosage */}
      <text x="150" y="237" fontFamily="'DM Mono', monospace" fontWeight="500" fontSize="12"
        fill={accent} textAnchor="middle" clipPath={`url(#glass-clip-${id})`}>{mg}</text>
      {/* Bottom divider */}
      <line x1="120" y1="244" x2="180" y2="244" stroke="#bbb" strokeWidth="0.5"
        clipPath={`url(#glass-clip-${id})`} />
      {/* Research use text */}
      <text x="150" y="256" fontFamily="'DM Mono', monospace" fontStyle="italic" fontSize="6.5"
        fill="#666" textAnchor="middle" clipPath={`url(#glass-clip-${id})`}>For Research Use Only</text>
      {/* Label edge — subtle border */}
      <rect x="108" y="175" width="84" height="95" rx="3"
        fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5"
        clipPath={`url(#glass-clip-${id})`} />

      {/* ===== LAYER 7: GLASS EDGE HIGHLIGHTS (TOP COAT) ===== */}
      {/* Left edge bright highlight */}
      <rect x="100" y="145" width="4" height="135" rx="2" fill="rgba(255,255,255,0.4)" />
      {/* Left shoulder highlight */}
      <polygon points="100,145 116,118 122,118 106,145" fill="rgba(255,255,255,0.3)" />
      {/* Right edge dark */}
      <rect x="196" y="145" width="4" height="135" rx="0" fill="rgba(0,0,0,0.25)" />
      {/* Top edge subtle highlight */}
      <line x1="110" y1="146" x2="190" y2="146" stroke="rgba(200,230,245,0.15)" strokeWidth="1" />
      {/* Bottom edge shadow */}
      <line x1="110" y1="279" x2="190" y2="279" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
      {/* Full body overlay — ambient occlusion */}
      <rect x="100" y="145" width="100" height="135" rx="10"
        fill="rgba(180,210,230,0.03)" stroke="rgba(180,210,230,0.18)" strokeWidth="1" />

      {/* ===== LAYER 8: AMBIENT GLOW (CSS-friendly, no filter) ===== */}
      <ellipse cx="150" cy="200" rx="45" ry="70" fill={capColor} opacity="0.03" />
    </g>
  )
}

export default function VialImage({ name, mg, capColor, accentColor, isLiquid = false }: VialImageProps) {
  const uid = useId().replace(/:/g, '')

  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '4/3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        background: 'radial-gradient(ellipse at 40% 35%, #1a2535 0%, #0c1018 60%, #080a0f 100%)',
        contain: 'content',
      }}
    >
      <svg viewBox="0 0 300 380" width="70%" style={{ maxHeight: '100%' }} xmlns="http://www.w3.org/2000/svg">
        <SingleVial name={name} mg={mg} capColor={capColor} accentColor={accentColor} uid={uid} isLiquid={isLiquid} />
      </svg>
    </div>
  )
}
