import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Paragraph from './Paragraph'

describe('Paragraph component', () => {
  it('renders the correct text', () => {
    const testText = 'This is a test paragraph'

    render(<Paragraph>{testText}</Paragraph>)

    expect(screen.getByText(testText)).toBeInTheDocument()
  })

  it('applies the correct default classNames', () => {
    const testText = 'This is a test paragraph'

    const { container } = render(<Paragraph>{testText}</Paragraph>)
    const paragraph = container.firstChild

    expect(paragraph).toHaveClass('max-w-prose')
    expect(paragraph).toHaveClass('text-slate-700')
    expect(paragraph).toHaveClass('dark:text-slate-300')
    expect(paragraph).toHaveClass('mb-2')
    expect(paragraph).toHaveClass('text-center')
    expect(paragraph).toHaveClass('text-base')
    expect(paragraph).toHaveClass('sm:text-lg')
  })

  it('applies the correct classNames when size is sm', () => {
    const testText = 'This is a test paragraph'

    const { container } = render(<Paragraph size='sm'>{testText}</Paragraph>)
    const paragraph = container.firstChild

    expect(paragraph).toHaveClass('max-w-prose')
    expect(paragraph).toHaveClass('dark:text-slate-300')
    expect(paragraph).toHaveClass('mb-2')
    expect(paragraph).toHaveClass('text-center')
    expect(paragraph).toHaveClass('text-sm')
    expect(paragraph).toHaveClass('sm:text-base')
  })

  it('applies additional classNames passed in', () => {
    const testText = 'This is a test paragraph'
    const customClass = 'custom-class'

    const { container } = render(
      <Paragraph className={customClass}>{testText}</Paragraph>
    )
    const paragraph = container.firstChild

    expect(paragraph).toHaveClass(customClass)
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLParagraphElement>()
    const testText = 'This is a test paragraph'

    render(<Paragraph ref={ref}>{testText}</Paragraph>)

    expect(ref.current).toBeDefined()
    expect(ref.current?.tagName).toBe('P')
  })
})

