import { defineSchema } from '@webbuilder/sdk'

export default defineSchema({
  id: 'testimonial-card',
  name: 'Testimonial Card',
  version: 1,
  props: {
    quote: {
      type: 'richtext',
      label: 'Quote',
      default: 'This product completely changed how our team works. We ship twice as fast with far fewer bugs.',
    },
    authorName: {
      type: 'text',
      label: 'Author Name',
      default: 'Sarah Chen',
    },
    authorRole: {
      type: 'text',
      label: 'Author Role',
      default: 'Head of Engineering @ Stripe',
    },
    avatarUrl: {
      type: 'image',
      label: 'Avatar Image',
      default: '',
    },
    accentColor: {
      type: 'color',
      label: 'Accent Color',
      default: '#7c3aed',
    },
  },
})
