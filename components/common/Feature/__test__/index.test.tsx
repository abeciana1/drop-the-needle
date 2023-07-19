import { render, screen } from '@testing-library/react'
import { Feature } from '@/components/common'
import { FaYoutube } from 'react-icons/fa'

const renderedComponent = () => {
    render(
        <Feature
            title='YouTube Search (coming soon)'
            body='Search for YouTube videos with ease.'
            icon={FaYoutube}
            color='altWhite'
        />
    )
}

describe('Feature', () => {
    test('> renders title and body', () => {
        renderedComponent()
        screen.debug()
        const title = screen.getByText('YouTube Search (coming soon)')
        const body = screen.getByText('Search for YouTube videos with ease.')
        expect(title).toBeInTheDocument()
        expect(body).toBeInTheDocument()
    })
})