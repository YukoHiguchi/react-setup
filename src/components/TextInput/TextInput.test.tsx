import userEvent from '@testing-library/user-event'
import TextInput from './TextInput'
import { render, screen } from '@testing-library/react'

test('TextInput Component Test', async () => {
  const user = userEvent.setup()
  render(<TextInput label="sample label" description="This is a description" />)
  const textElement = screen.getByText('This is a description')
  expect(textElement).toBeInTheDocument()
  const inputElement = screen.getByLabelText('sample label')
  await user.type(inputElement, 'Hello World')
})
