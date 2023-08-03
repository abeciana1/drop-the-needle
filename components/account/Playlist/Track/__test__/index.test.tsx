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
    test.only('> renders successfully', () => {
        
    })
})