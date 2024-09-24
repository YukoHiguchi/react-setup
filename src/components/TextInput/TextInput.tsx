import React from 'react'
import clsx from 'clsx'

export interface InputTextProps {
  fontSize?: 'small' | 'medium' | 'large'
  label?: string
  state?: 'none' | 'error' | 'success' | 'warning'
  disabled?: boolean
  placeholder?: string
  description?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({
  fontSize = 'medium',
  label,
  state = 'none',
  disabled = false,
  description,
  placeholder,
}: InputTextProps) => {
  const [text, setText] = React.useState('')
  return (
    <div className="mb-6">
      <div>
        {label && (
          <label
            className={clsx('block text-gray-500 font-bold mb-[2px] pr-4')}
            htmlFor={label}
          >
            {label}
          </label>
        )}
      </div>
      <div>
        <div className="flex flex-col">
          {description && (
            <div className=" text-slate-500 my-1">{description}</div>
          )}
          <input
            className={clsx(
              { 'text-base': fontSize === 'medium' },
              { 'text-sm': fontSize === 'small' },
              { 'text-lg': fontSize === 'large' },
              { 'border-red-500': state === 'error' },
              { 'border-green-500': state === 'success' },
              { 'border-yellow-500': state === 'warning' },
              { 'border-slate-200': state === 'none' },
              {
                'cursor-not-allowed bg-slate-200': disabled,
                'bg-transparent': !disabled,
              },
              ' placeholder:text-slate-400 text-slate-700 border rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
            )}
            type="text"
            value={text}
            aria-label={label}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  )
}

export default TextInput
