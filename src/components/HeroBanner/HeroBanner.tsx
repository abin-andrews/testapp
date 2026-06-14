import React from 'react'

interface Props {
  headline?: string
  subheadline?: string
  ctaLabel?: string
  ctaUrl?: string
  theme?: 'dark' | 'light'
  backgroundImage?: string
}

export function HeroBanner({
  headline = 'Welcome to Our Platform',
  subheadline = 'The best solution for modern teams',
  ctaLabel = 'Get Started',
  ctaUrl = '#',
  theme = 'dark',
  backgroundImage = '',
}: Props) {
  const dark = theme === 'dark'
  return (
    <section
      className={`relative py-28 px-8 text-center overflow-hidden ${dark ? 'bg-gray-900' : 'bg-white'}`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      <div className="relative max-w-3xl mx-auto">
        <h1 className={`text-5xl font-black mb-5 leading-tight ${dark || backgroundImage ? 'text-white' : 'text-gray-900'}`}>
          {headline}
        </h1>
        <p className={`text-xl mb-10 leading-relaxed ${dark || backgroundImage ? 'text-gray-300' : 'text-gray-600'}`}>
          {subheadline}
        </p>
        <a
          href={ctaUrl}
          className={`inline-block px-10 py-4 rounded-2xl font-bold text-lg transition-colors ${
            dark || backgroundImage
              ? 'bg-blue-600 hover:bg-blue-500 text-white'
              : 'bg-gray-900 hover:bg-gray-700 text-white'
          }`}
        >
          {ctaLabel} →
        </a>
      </div>
    </section>
  )
}

export default HeroBanner
