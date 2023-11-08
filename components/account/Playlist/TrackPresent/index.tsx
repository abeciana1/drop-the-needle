import ReactPlayer from 'react-player/lazy'
import { TrackPresentI } from '@/interfaces'

const TrackPresent = ({
    link,
    startTime,
    endTime
}: TrackPresentI) => {

    const timeToIntConvert = (time: string) => {
        let splitTime = time.split(":")
        let convertedTime = (parseInt(splitTime[0]) * 60) + parseInt(splitTime[1])
        return convertedTime
    }

    const convertedStartTime = timeToIntConvert(startTime)
    const convertedEndTime = timeToIntConvert(endTime)

    const stateMonitor = () => {
        let duration = convertedEndTime - convertedStartTime
        return duration
    }

    const linkConverter = () => {
        let convertedLink;
        if (link.indexOf('=') > -1) {
            let youtubeId = link.split("=")
            convertedLink = `https://www.youtube.com/embed/${youtubeId[1]}?start=${convertedStartTime}&end=${convertedEndTime}`
        } else {
            convertedLink = `https://www.youtube.com/embed/${link}?start=${convertedStartTime}&end=${convertedEndTime}`
        }
        return convertedLink
    }

    let embedLink = linkConverter()

    return (
        <>
            <ReactPlayer
                url={embedLink}
                onPlay={stateMonitor}
                controls={true}
                className="mx-auto"
                width="100%"
                height="100%"
            />
        </>
    )
}

export default TrackPresent