import { Fragment, useMemo } from 'react'
import { GetServerSidePropsContext } from 'next';
import axios from 'axios'
import {
    SEO,
    CommonPageLayout
} from '@/components/common'
import { H1, H2, H3 } from '@/components/styled'
import { HostPartUserI, PowerHourSongI } from '@/interfaces'

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
    console.log('powerHour', powerHour)

    const cleanedHosts = useMemo(() => {
        return powerHour.hosts.map((host: HostPartUserI) => host.user.name)
    }, [])
    const cleanedParticipants = useMemo(() => {
        return powerHour.participants.map((participant: HostPartUserI) => participant.user.name)
    }, [])

    return(
        <Fragment>
            <SEO
                title={powerHour.title}
                description={powerHour.description}
            />
            <CommonPageLayout>
                <section className='text-center py-10 leading-loose'>
                    <H1 text={'Presenting ' + powerHour.title} />
                    <H2 text={'Hosted by ' + peopleOxfordComma(cleanedHosts)} />
                    {cleanedParticipants.length > 1 &&
                        <H3 text={'Contributions from ' + peopleOxfordComma(cleanedParticipants)} />
                    }
                </section>
            </CommonPageLayout>
        </Fragment>
    )
}

export default ListenDynamicPage

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const powerHour = await axios.get('http://localhost:3000/api/powerhour/listen/' + context?.query?.id)
    console.log('powerHour.data.powerHour', powerHour.data.powerHour)
    return {
        props: {
            powerHour: powerHour.data.powerHour
        }
    }
}