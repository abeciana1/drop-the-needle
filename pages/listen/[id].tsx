import { Fragment, useMemo, useEffect, useState } from 'react'
import { GetServerSidePropsContext } from 'next';
import axios from 'axios'
import {
    SEO,
    CommonPageLayout,
    SongPresent
} from '@/components/common'
import { H1, H2, H3 } from '@/components/styled'
import { HostPartUserI, PowerHourSongI } from '@/interfaces'
import { setSongs, clearSongs } from '@/redux/slices/powerHourSlice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { Drawer } from '@/components/common'

interface ListenPowerHourI {
    powerHour: {
        id: number;
        title: string;
        cover_image: string;
        description: string;
        participants: HostPartUserI[];
        hosts: HostPartUserI[];
        PowerHourSongs: PowerHourSongI[]
    }
}

const peopleOxfordComma = (people: any) => {
    if (people.length === 2) {
        return people.join(' and ')
    } else if (people.length > 2) {
        let lastEl = people.pop()
        return people.join(', ') + ', and ' + lastEl
    } else {
        return people[0]
    }
}

const ListenDynamicPage = ({powerHour}: ListenPowerHourI) => {
    const dispatch = useAppDispatch()
    const songsState = useAppSelector(state => state.powerHour.songs)
    const [ currentIdx, setCurrentIdx ] = useState(0)

    const cleanedHosts = useMemo(() => {
        return powerHour.hosts.map((host: HostPartUserI) => host.user.name)
    }, [])
    const cleanedParticipants = useMemo(() => {
        return powerHour.participants.map((participant: HostPartUserI) => participant.user.name)
    }, [])

    useEffect(() => {
        dispatch(setSongs(powerHour.PowerHourSongs))
    }, [])

    useEffect(() => {
        return () => {
            dispatch(clearSongs())
        }
    }, [])

    const handleSwitch = () => {
        setCurrentIdx(currentIdx + 1)
    }

    return(
        <Fragment>
            <SEO
                title={powerHour.title}
                description={powerHour.description}
            />
            <Drawer
                panelTitle='Song selection'
            >
                <ul>
                    
                </ul>
            </Drawer>
            <CommonPageLayout>
                <section className='text-center py-10 leading-loose'>
                    <H1 text={'Presenting ' + powerHour.title} />
                    <H2 text={'Hosted by ' + peopleOxfordComma(cleanedHosts)} />
                    {cleanedParticipants.length > 1 &&
                        <H3 text={'Contributions from ' + peopleOxfordComma(cleanedParticipants)} />
                    }
                </section>
                {/* {(songsState && songsState.length > 0 && songsState.length !== currentIdx) &&
                    <section data-pos='current' className='mx-auto'>
                        <SongPresent
                            title={songsState[currentIdx].title}
                            artist={songsState[currentIdx].artist}
                            album={songsState[currentIdx].album}
                            year={songsState[currentIdx].year}
                            link={songsState[currentIdx].youtubeLink}
                            startTime={songsState[currentIdx].startTime}
                            endTime={songsState[currentIdx].endTime}
                            user={songsState[currentIdx].participant.user.name}
                            idx={currentIdx}
                            handleSwitch={handleSwitch}
                        />
                    </section>
                }
                {songsState.length === currentIdx &&
                    <div className="text-center text-5xl lg:text-6xl font-bold py-1">The End</div>
                } */}
            </CommonPageLayout>
        </Fragment>
    )
}

export default ListenDynamicPage

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const powerHour = await axios.get('http://localhost:3000/api/powerhour/listen/' + context?.query?.id)
    return {
        props: {
            powerHour: powerHour.data.powerHour
        }
    }
}