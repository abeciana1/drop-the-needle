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

    const embedLink = () => {
        let youtubeId = link.split("=")
        let convertedLink = `https://www.youtube.com/embed/${youtubeId[1]}?start=${convertedStartTime}&end=${convertedEndTime}`
        return convertedLink
    }

    return (
        <>
            {/* <ReactPlayer
                url={embedLink}
                onPlay={stateMonitor}
                controls={true}
                className="mx-auto"
            /> */}
        </>
    )
}

export default TrackPresent