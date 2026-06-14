import React from 'react'

interface Props {
  quote?: string
  authorName?: string
  authorRole?: string
  avatarUrl?: string
  accentColor?: string
}

export function TestimonialCard({
  quote = 'This product completely changed how our team works. We ship twice as fast with far fewer bugs.',
  authorName = 'Sarah Chen',
  authorRole = 'Head of Engineering @ Stripe',
  avatarUrl = '',
  accentColor = '#7c3aed',
}: Props) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col gap-6">
      <span className="text-6xl font-serif leading-none" style={{ color: accentColor }}>"</span>
      <p className="text-lg text-gray-700 leading-relaxed -mt-4 italic">
        {quote}
      </p>
      <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={authorName}
            className="w-11 h-11 rounded-full object-cover bg-gray-100"
          />
        ) : (
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
            style={{ background: accentColor }}
          >
            {authorName.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900 text-sm">{authorName}</p>
          <p className="text-gray-500 text-xs">{authorRole}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
