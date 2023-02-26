import type { Meta, StoryObj } from '@storybook/react'
import HeaderNav from '@/component/HeaderNav'

const meta: Meta<typeof HeaderNav> = {
  title: 'Example/HeaderNav',
  component: HeaderNav,
  tags: ['autodocs'],
  parameters: {},
}

export default meta
type Story = StoryObj<typeof HeaderNav>

export const Default: Story = {}
