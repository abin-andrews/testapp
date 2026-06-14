import { defineSchema } from '@webbuilder/sdk'

export default defineSchema({
  id: 'hero-banner',
  name: 'Hero Banner',
  version: 1,
  props: {
    headline: {
      type: 'text',
      label: 'Headline',
      default: 'Welcome to Our Platform',
    },
    subheadline: {
      type: 'text',
      label: 'Sub-headline',
      default: 'The best solution for modern teams',
    },
    ctaLabel: {
      type: 'text',
      label: 'CTA Button Label',
      default: 'Get Started',
    },
    ctaUrl: {
      type: 'link',
      label: 'CTA URL',
      default: '#',
    },
    theme: {
      type: 'enum',
      label: 'Theme',
      default: 'dark',
      options: ['dark', 'light'],
    },
    backgroundImage: {
      type: 'image',
      label: 'Background Image',
      default: '',
    },
  },
})
