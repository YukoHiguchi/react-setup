import type { Meta, StoryObj } from '@storybook/react'

import TextInput from './TextInput'

const meta = {
  component: TextInput,
  title: 'TextInput',
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>
export const Default = {
  args: { fontSize: 'medium', label: 'label', description: 'description' },
}

export const Disabled: Story = {
  args: { fontSize: 'medium', label: 'disabled', disabled: true },
}
