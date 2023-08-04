import { render, screen } from '@testing-library/react'
import { TrackList } from '@/components/account'

let songs = [
{
    "id": 1,
    "title": "Another One Bites the Dust",
    "artist": "The Beatles",
    "youtubeLink": "https://www.youtube.com/watch?v=QGnkTQikhsE",
    "startTime": "0:10",
    "endTime": "0:15",
    "powerHourId": 1,
    "orderNumber": 0,
    "createdAt": "2023-04-21T18:09:07.793Z",
    "participantId": 1,
    "participant": {
    "user": {
        "name": "Alex"
    }
    }
},
{
    "id": 2,
    "title": "Blueberry Hill",
    "artist": "The Buggles",
    "youtubeLink": "https://www.youtube.com/watch?v=W8r-tXRLazs",
    "startTime": "0:10",
    "endTime": "0:15",
    "powerHourId": 1,
    "orderNumber": 1,
    "createdAt": "2023-04-21T18:09:07.800Z",
    "participantId": 1,
    "participant": {
    "user": {
        "name": "Alex"
    }
    }
},
{
    "id": 3,
    "title": "U Can't Touch This",
    "artist": "Brand New",
    "youtubeLink": "https://www.youtube.com/watch?v=qgtkPKZ2OPk",
    "startTime": "0:10",
    "endTime": "0:15",
    "powerHourId": 1,
    "orderNumber": 2,
    "createdAt": "2023-04-21T18:09:07.804Z",
    "participantId": 1,
    "participant": {
    "user": {
        "name": "Alex"
    }
    }
}
]

const renderedComponent = () => {
    render(
        <TrackList
            songs={songs}
        />
    )
}

describe('TrackList', () => {
    test('> renders successfully', () => {
        renderedComponent()
        const listGroup = screen.getByRole('list')
        expect(listGroup).toBeInTheDocument()
    })
    test('> should have a with 3 items', () => {
        renderedComponent()
        const listGroup = screen.getByRole('list')
        expect(listGroup.children).toHaveLength(3)
        for (let song of songs) {
            expect(screen.getByText(new RegExp(song.title))).toBeInTheDocument()
        }
    })
})