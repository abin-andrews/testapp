import { defineSchema } from '@webbuilder/sdk'

export default defineSchema({
  id: 'pricing-card',
  name: 'Pricing Card',
  version: 1,
  props: {
    planName: {
      type: 'text',
      label: 'Plan Name',
      default: 'Pro',
    },
    price: {
      type: 'text',
      label: 'Price (e.g. $29)',
      default: '$29',
    },
    period: {
      type: 'text',
      label: 'Period (e.g. /month)',
      default: '/month',
    },
    tagline: {
      type: 'text',
      label: 'Tagline',
      default: 'For growing teams',
    },
    features: {
      type: 'text',
      label: 'Features (one per line)',
      default: 'Unlimited projects\n100 GB storage\nPriority support\nAdvanced analytics',
      multiline: true,
    },
    highlighted: {
      type: 'boolean',
      label: 'Highlight this plan',
      default: false,
    },
    ctaLabel: {
      type: 'text',
      label: 'Button Label',
      default: 'Start Free Trial',
    },
    ctaUrl: {
      type: 'link',
      label: 'Button URL',
      default: '#',
    },
    accentColor: {
      type: 'color',
      label: 'Accent Color',
      default: '#2563eb',
    },
  },
})
