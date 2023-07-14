import { render, screen } from '@testing-library/react'
import  { LinkLookLikeButton } from '@/components/common'

describe('LinkLookLikeButton with arrow', () => {
    beforeEach(() => {
        render(
            <LinkLookLikeButton
                href='/'
                text='Testing link'
                ctaArrow={true}
            />
        )
    })
    test('renders successfully', () => {
        const link = screen.getByRole('link', {
            name: /testing link/i
        })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/')
    })
    test('renders call-to-action arrow renders', () => {
        expect(screen.getByTitle('cta-right-arrow')).toBeInTheDocument()
    })
})

describe('LinkLookLikeButton without arrow', () => {
    beforeEach(() => {
        render(
            <LinkLookLikeButton
                href='/'
                text='Testing link'
                ctaArrow={false}
            />
        )
    })
    test('CTA arrow doesn\'t render', () => {
        expect(screen.queryByTitle('cta-right-arrow')).not.toBeInTheDocument()
    })
})