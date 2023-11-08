import {
    SEO,
    DashPageLayout,
    ComponentMargin,
    WavySection
} from '@/components/common'
import {
    H1
} from '@/components/styled'
import {
    YouTubeSearchForm,
    YouTubeCard
} from '@/components/account'
import { YouTubeVideoType } from '@/types'
import  { YouTubeVideoI } from '@/interfaces'
import { useAppSelector } from '@/redux/hooks'

const YouTubeSearchPage = () => {
    const videos = useAppSelector(state => state.user.videos)

    // const videos: any = [
    //     {
    //         "id": "AW55J2zE3N4",
    //         "title": "The Beatles - Now And Then (Official Audio)",
    //         "link": "https://youtu.be/AW55J2zE3N4",
    //         "thumbnail": "https://i.ytimg.com/vi/AW55J2zE3N4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDwTHv74wLfKXAqMl4xioIOQChtQ",
    //         "channel": {
    //             "id": "UCc4K7bAqpdBP8jh1j9XZAww",
    //             "name": "The Beatles",
    //             "link": "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
    //             "handle": null,
    //             "verified": true,
    //             "thumbnail": "https://yt3.ggpht.com/ytc/APkrFKZaa3FGlL9nr6YnH8_PtgOmEkTxh9C6r77YA6lkxw=s0?imgmax=0"
    //         },
    //         "description": "Now and Then's eventful journey to fruition took place over five decades and is the product of conversations and collaborations ...",
    //         "views": 6455190,
    //         "uploaded": "4 days ago",
    //         "duration": 249,
    //         "durationString": "4:09"
    //     }
    // ]

    return(
        <>
            <SEO
                title='YouTube Search'
            />
            <DashPageLayout footerColor='vermillion-200'>
                <ComponentMargin bgColor='vermillion-200' >
                    <H1 color={2} text='Search YouTube' />
                    <YouTubeSearchForm/>
                </ComponentMargin>
                <WavySection color='vermillion-200' type={3} />
                <section className='px-5 sm:px-10 lg:px-20 xl:px-96 xl:grid xl:grid-cols-2'>
                    {videos && videos.map((video: YouTubeVideoType) => {
                        return (
                            <YouTubeCard
                                key={video.id}
                                id={video.id}
                                title={video.title}
                                link={video.link}
                                thumbnail={video.thumbnail}
                                description={video.description}
                                durationString={video.durationString}
                            />
                        )
                    })}
                </section>
            </DashPageLayout>
        </>
    )
}

export default YouTubeSearchPage