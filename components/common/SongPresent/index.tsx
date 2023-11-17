import ReactPlayer from 'react-player/lazy'
import { useMemo, Fragment } from 'react'
import { timeConverter } from '@/utils'
import { SongPresentI } from '@/interfaces'

const SongPresent = ({
    title,
    artist,
    album,
    year,
    link,
    user,
    startTime,
    endTime,
    idx,
    handleSwitch
}: SongPresentI) => {
    const { start, end } = useMemo(() => {
        const start = timeConverter(startTime)
        const end = timeConverter(endTime)
        return {
            start,
            end
        }
    }, [idx])
    const linkConverted = useMemo(() => {
        let convertedLink;
        if (link.indexOf('=') > -1) {
            let youtubeId = link.split("=")
            convertedLink = `https://www.youtube.com/embed/${youtubeId[1]}?start=${start}&end=${end}`
        } else {
            convertedLink = `https://www.youtube.com/embed/${link}?start=${start}&end=${end}`
        }
        return convertedLink
    }, [idx])

    const stateMonitor = () => {
        let duration = end - start
        videoTimerSwitcher(duration)
    }

    const videoTimerSwitcher = (duration: number) => {
        let timeLength = duration * 1000
        setTimeout(() => {
            handleSwitch()
        }, timeLength)
    }

    return(
        <Fragment>
            <ReactPlayer
                url={linkConverted}
                playing={idx > 0}
                onPlay={stateMonitor}
                controls={true}
                className="mx-auto"
            />
            <section className='mx-auto text-center text-xl w-1/2 py-10'>
                <div className='flex items-center justify-between'>
                    <span className='font-bold'>&quot;{title}&quot;</span>
                    <span> — </span>
                    <span className='italic'>{artist} ({album}, year)</span>
                    <span className='ml-5'>{user}</span>
                </div>
            </section>
        </Fragment>
    )
}

export default SongPresent