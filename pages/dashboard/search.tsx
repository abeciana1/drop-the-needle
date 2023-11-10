import { useEffect, useMemo } from 'react'
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
import {
    useAppSelector,
    useAppDispatch
} from '@/redux/hooks'
import { useSession } from 'next-auth/react'
import { fetchUserPowerHoursAction } from '@/redux/actions/user-actions'

const YouTubeSearchPage = () => {
    const dispatch = useAppDispatch()
    const videos = useAppSelector(state => state.user.videos)
    const { data: session } = useSession()
    const userPowerHours = useAppSelector(state => state.user.powerHours)
    console.log(userPowerHours)

    // * create filtered power hours with useMemo

    const mappedPowerHours = useMemo(() => {
        // * use filtered power hours
        // return userPowerHours.filter(( participant: any ) => {
        //     return new Date().valueOf() - new Date(participant.powerHour.date_time).valueOf() > 0
        // })
        if (userPowerHours) {
            return userPowerHours.map((participant: any, index: number) => {
                return {value: index, text: participant?.powerHour?.title}
            })
        }
    }, [userPowerHours])

    useEffect(() => {
        if (session) {
            dispatch(fetchUserPowerHoursAction(session?.user?.id))
        }   
    }, [session])

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
                                mappedPowerHours={mappedPowerHours}
                                userPowerHours={userPowerHours}
                            />
                        )
                    })}
                </section>
            </DashPageLayout>
        </>
    )
}

export default YouTubeSearchPage