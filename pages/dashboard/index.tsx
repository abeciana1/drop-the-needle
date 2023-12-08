import { useEffect, useState } from 'react'
import {
    SEO,
    PlaylistCard,
    ComponentMargin,
    WavySection,
    DashPageLayout,
    LinkLookLikeButton,
    PlaylistCardGroup,
    InviteCard
} from '@/components/common'
import axios from 'axios';
import {
    DashPowerHourI,
    UserI,
    UserInvitesI
} from '@/interfaces';
import {
    H1,
    H2
} from '@/components/styled'
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react'
import { formatInTimeZone } from 'date-fns-tz'
import { setInvites } from '@/redux/slices/inviteSlice'
import {
    useAppSelector,
    useAppDispatch
} from '@/redux/hooks'
import requireAuthentication from '@/middleware/authMiddleware'
import { createInvite } from '@/redux/actions/playlist-actions'

const DashboardIdxPage = ({user}: UserI) => {
    const dispatch = useAppDispatch()
    const invitesState = useAppSelector(state => state?.invites?.invites)
    const {
        name,
        hosted,
        participants,
        invites
    } = user
    const [ isClient, setClient ] = useState(false)

    useEffect(() => {
        setClient(true)
    }, [])
    
    useEffect(() => {
        if (isClient) {
            if (window.location.search.split('=')[1]) {
                const inviteToken = window.location.search.split('=')[1]
                dispatch(createInvite(inviteToken, user.id))
            }
        }
    }, [isClient])

    useEffect(() => {
        if (invites) {
            dispatch(setInvites(invites))
        }
    }, [invites])

    return (
        <>
            <SEO
                title='Dashboard'
            />
            <DashPageLayout footerColor='vermillion-200'>
                <ComponentMargin>
                    <H1 color={2} text={`Welcome back, ${name}`}/>
                </ComponentMargin>
                <WavySection color='jaffa-200' type={1} />
                <ComponentMargin bgColor='jaffa-200'>
                    <H2 color={0} text={'My Hosted Power Hours'} />
                    <>
                        {hosted?.length < 1 &&
                            <div className='py-3 text-xl font-medium'>You are currently not hosting any power hours.</div>
                        }
                        {hosted?.length > 0 &&
                            <PlaylistCardGroup>
                                {hosted?.slice(0,3).map(({powerHour}: DashPowerHourI) => (
                                    <PlaylistCard
                                        key={'hosted-' + powerHour.id}
                                        id={powerHour.id}
                                        title={powerHour.title}
                                        cover_image={powerHour.cover_image}
                                        date={formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'MM/dd/yyyy')}
                                        time={formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'p zzz')}
                                        publicLink={false}
                                        hostedLink
                                    />
                                ))}
                            </PlaylistCardGroup>
                        }
                        {hosted?.length > 0 &&
                            <div className='flex justify-center md:justify-start md:ml-10'>
                                    <LinkLookLikeButton
                                        href='dashboard/powerhour/hosted'
                                        text='View all'
                                        bgColor='blue'
                                        ctaArrow={true}
                                    />
                            </div>
                        }
                    </>
                </ComponentMargin>
                <WavySection color='jaffa-200' type={2} bgColor='ceruleanBlue' />
                <ComponentMargin bgColor='ceruleanBlue'>
                    <H2 color={0} text={'Participation'} />
                    <>
                        {participants?.length < 1 &&
                            <div className='py-3 text-xl font-medium'>You are currently not participating in any power hours.</div>
                        }
                        {participants?.length > 0 &&
                            <PlaylistCardGroup>
                                {participants?.slice(0,3).map(({powerHour}: DashPowerHourI) => (
                                    <PlaylistCard
                                        key={'participating-' + powerHour.id}
                                        id={powerHour.id}
                                        title={powerHour.title}
                                        cover_image={powerHour.cover_image}
                                        date={formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'MM/dd/yyyy')}
                                        time={formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'p zzz')}
                                        publicLink={false}
                                        hostedLink={false}
                                    />
                                ))}
                            </PlaylistCardGroup>
                        }
                        {participants?.length > 0 &&
                            <div className='flex justify-center md:justify-start md:ml-10'>
                                <LinkLookLikeButton
                                    href='dashboard/powerhour/participant'
                                    text='View all'
                                    bgColor='gold'
                                    ctaArrow={true}
                                />
                            </div>
                        }
                    </>
                </ComponentMargin>
                <WavySection color='ceruleanBlue' type={3} bgColor='vermillion-200' />
                <ComponentMargin bgColor='vermillion-200'>
                    <H2 text={'Invitations'} />
                    <>
                        {invitesState?.length < 1 &&
                            <div className='py-3 text-xl font-medium'>You currently do not have any invitations.</div>
                        }
                        {invitesState?.length > 0 &&
                            <PlaylistCardGroup>
                                {invitesState?.slice(0,3).map((invite: UserInvitesI, index: number) => {
                                    return (
                                        <>
                                            <InviteCard
                                                key={'invite-' + invite?.id}
                                                index={index}
                                                inviteId={invite?.id}
                                                userId={invite?.userId}
                                                id={invite?.powerHour.id}
                                                title={invite?.powerHour.title}
                                                description={invite?.powerHour?.description}
                                                cover_image={invite?.powerHour.cover_image}
                                                date={formatInTimeZone(new Date(invite?.powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'MM/dd/yyyy')}
                                                submissionDeadline={formatInTimeZone(new Date(invite?.powerHour?.submissionDeadline), Intl.DateTimeFormat().resolvedOptions().timeZone, 'MM/dd/yyyy')}
                                                time={formatInTimeZone(new Date(invite?.powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'p zzz')}
                                                songLimit={invite?.powerHour?.songLimit}
                                                rsvpYes={invite?.rsvpYes}
                                                rsvpNo={invite?.rsvpNo}
                                                rsvpMaybe={invite?.rsvpMaybe}
                                            />
                                        </>
                                    )
                                })}
                            </PlaylistCardGroup>
                        }
                        {invitesState?.length > 0 || invitesState === null &&
                            <div className='flex justify-center md:justify-start md:ml-10'>
                                <LinkLookLikeButton
                                    href='dashboard/powerhour/invites'
                                    text='View all'
                                    bgColor='blue'
                                    ctaArrow={true}
                                />
                            </div>
                        }
                    </>
                </ComponentMargin>
            </DashPageLayout>
        </>
    )
}

export default DashboardIdxPage

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const authResult = await requireAuthentication(context)
    if (!authResult.authed) {
        return authResult
    }
    const session = await getSession(context)
    const { data } = await axios.post(process.env.URL + '/api/user/get-dashboard', {
        params: session?.user?.email
    })    
    return {
        props: {
            user: data?.user
        }
    }
}
