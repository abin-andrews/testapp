import React from 'react'

interface Props {
  planName?: string
  price?: string
  period?: string
  tagline?: string
  features?: string
  highlighted?: boolean
  ctaLabel?: string
  ctaUrl?: string
  accentColor?: string
}

export function PricingCard({
  planName = 'Pro',
  price = '$29',
  period = '/month',
  tagline = 'For growing teams',
  features = 'Unlimited projects\n100 GB storage\nPriority support\nAdvanced analytics',
  highlighted = false,
  ctaLabel = 'Start Free Trial',
  ctaUrl = '#',
  accentColor = '#2563eb',
}: Props) {
  const featureList = features.split('\n').filter(Boolean)
  return (
    <div
      className={`relative rounded-3xl p-8 flex flex-col gap-6 shadow-lg border ${
        highlighted ? 'border-transparent text-white' : 'border-gray-200 bg-white text-gray-900'
      }`}
      style={highlighted ? { background: accentColor } : {}}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full bg-white"
          style={{ color: accentColor }}>
          ★ Most Popular
        </span>
      )}
      <div>
        <h3 className={`text-lg font-semibold mb-1 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
          {planName}
        </h3>
        <p className={`text-sm ${highlighted ? 'text-white/70' : 'text-gray-500'}`}>{tagline}</p>
      </div>
      <div className="flex items-end gap-1">
        <span className={`text-5xl font-black ${highlighted ? 'text-white' : 'text-gray-900'}`}>{price}</span>
        <span className={`text-sm pb-1.5 ${highlighted ? 'text-white/70' : 'text-gray-500'}`}>{period}</span>
      </div>
      <ul className="flex flex-col gap-2 flex-1">
        {featureList.map((f, i) => (
          <li key={i} className={`flex items-center gap-2 text-sm ${highlighted ? 'text-white/90' : 'text-gray-700'}`}>
            <span style={highlighted ? {} : { color: accentColor }}>✓</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href={ctaUrl}
        className={`block text-center py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90 ${
          highlighted ? 'bg-white' : 'text-white'
        }`}
        style={highlighted ? { color: accentColor } : { background: accentColor }}
      >
        {ctaLabel}
      </a>
    </div>
  )
}

export default PricingCard
