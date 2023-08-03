import { render, screen } from '@testing-library/react'
import { Track } from '@/components/account'

const renderedComponent = () => {
    render(
        <Track
            song={
                {
                    "id": 1,
                    "title": "Another One Bites the Dust",
                    "artist": "The Beatles",
                    "youtubeLink": "https://www.youtube.com/watch?v=QGnkTQikhsE",
                    "startTime": "0:10",
                    "endTime": "0:15",
                    "orderNumber": 0,
                    "createdAt": "2023-04-21T18:09:07.793Z",
                    "participant": {
                        "name": "Alex"
                    }
                }
            }
            user='Alex'
        />
    )
}

describe('Track', () => {
    test('> renders successfully', () => {
        renderedComponent()
        const listItem = screen.getByRole('listitem')
        const songTitle = screen.getByText(/Another One Bites the Dust/i)
        const songArtist = screen.getByText(/The Beatles/i)
        expect(listItem).toBeInTheDocument()
        expect(songTitle).toBeInTheDocument()
        expect(songArtist).toBeInTheDocument()
    })
    test.only('> renders open and remove buttons', () => {
        renderedComponent()
        screen.debug()
        const openBtn = screen.getByRole('button', {
            name: /open/i
        })
        const removeBtn = screen.getByRole('button', {
            name: /remove/i
        })
        expect(openBtn).toBeInTheDocument()
        expect(removeBtn).toBeInTheDocument()
    })
})