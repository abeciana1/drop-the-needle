import { render, screen } from '@testing-library/react'
import { HeroSectionBlendImage } from '@/components/common'

const renderedComponent = () => {
    const { container } = render(
        <HeroSectionBlendImage
            heading='Test heading'
            bodyTagline='Testing body'
            image={{
                src: '/Scripps.webp',
                width: 800,
                height: 450,
                alt: 'Scripps Institute - San Diego, CA'
            }}
            ctaButton
            ctaColor='gold'
            ctaLink='test'
            ctaText='Test Text'
        />
    )
    return {container}
}

describe('HeroSectionBlendImage', () => {
    test('> heading renders', () => {
        renderedComponent()
        const heading = screen.getByRole('heading', {
            level: 1
        })
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/test heading/i)
    })
    test('> body/tagline renders', () => {
        renderedComponent()
        const tagline = screen.getByText("Testing body")
        expect(tagline).toBeInTheDocument()
    })
    test('> image renders', () => {
        renderedComponent()
        const image = screen.getByRole('img', {
            name: 'Scripps Institute - San Diego, CA'
        })
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('height', "450")
        expect(image).toHaveAttribute('width', "800")
    })
    test('> CTA arrow renders', () => {
        renderedComponent()
        const ctaArrow = screen.getByTitle(/cta-right-arrow/i)
        expect(ctaArrow).toBeInTheDocument()
    })
    test('> CTA link renders', () => {
        renderedComponent()
        screen.debug()
        const ctaLink = screen.getByRole('link', {
            name: /test text/i
        })
        expect(ctaLink).toBeInTheDocument()
        expect(ctaLink).toHaveAttribute('href', '/test')
    })
})