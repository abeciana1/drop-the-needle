import { render, screen } from '@testing-library/react'
import { PlaylistCard } from '@/components/common'

describe('PlaylistCard', () => {
    beforeEach(() => {
        render(
            <PlaylistCard
                id={1}
                title='Test Playlist'
                cover_image='https://media.graphassets.com/output=format:webp/HbyIN3qzSVGDqTAcN9iP'
                publicLink
            />
        )
    })
    test('> linked to public listen dir for playlist', () => {
        const link = screen.getByRole('link', {
            name: /test playlist/i
        })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/listen/powerhour/1')
    })
    test('> playlist image renders', () => {
        const img = screen.getByAltText(/test playlist/i)
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute('src', "/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Foutput%3Dformat%3Awebp%2FHbyIN3qzSVGDqTAcN9iP&w=640&q=75")
    })
    test('> text renders', () => {
        const text = screen.getByText(/test playlist/i)
        expect(text).toBeInTheDocument()
    })
})