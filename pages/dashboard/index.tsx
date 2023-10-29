import { useEffect } from 'react'
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
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react'
import { formatInTimeZone } from 'date-fns-tz'
import { setInvites, deleteInvites } from '@/redux/slices/inviteSlice'
import {
    useAppSelector,
    useAppDispatch
} from '@/redux/hooks'

const DashboardIdxPage = ({user}: UserI) => {
    const dispatch = useAppDispatch()
    const invitesState = useAppSelector(state => state?.invites?.invites)
    console.log('state', invitesState)
    const {
        name,
        hosted,
        participants,
        invites
    } = user

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
                        {hosted?.length < 0 &&
                            <div className='py-3 text-xl font-medium'>You are currently not hosting any power hours.</div>
                        }
                        {hosted?.length > 0 &&
                            <PlaylistCardGroup>
                                {hosted?.slice(0,3).map(({powerHour}: DashPowerHourI) => (
                                    <PlaylistCard
                                        key={powerHour.id}
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
                    </>
                    <>
                        {hosted?.length > 3 &&
                        <div className='ml-10'>
                                <LinkLookLikeButton
                                    href='dashboard/powerhour/hosted'
                                    text='View more'
                                    bgColor='altBlack'
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
                        {participants?.length < 0 &&
                            <div className='py-3 text-xl font-medium'>You are currently not participating in any power hours.</div>
                        }
                        {participants?.length > 0 &&
                            <PlaylistCardGroup>
                                {participants?.slice(0,3).map(({powerHour}: DashPowerHourI) => (
                                    <PlaylistCard
                                        key={powerHour.id}
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
                    </>
                    <>
                        {participants?.length > 3 &&
                        <div className='ml-10'>
                            <LinkLookLikeButton
                                href='dashboard/powerhour/participant'
                                text='View more'
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
                        {invitesState?.length < 0 &&
                            <div className='py-3 text-xl font-medium'>You currently do not have any invitations.</div>
                        }
                        {invitesState?.length > 0 &&
                            <PlaylistCardGroup>
                                {invitesState?.slice(0,3).map((invite: UserInvitesI, index: number) => {
                                    return (
                                        <>
                                            <InviteCard
                                                key={invite?.powerHour.id}
                                                index={index}
                                                inviteId={invite?.id}
                                                id={invite?.powerHour.id}
                                                title={invite?.powerHour.title}
                                                description={invite?.powerHour?.description}
                                                cover_image={invite?.powerHour.cover_image}
                                                date={formatInTimeZone(new Date(invite?.powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'MM/dd/yyyy')}
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
                        {invitesState?.length > 3 &&
                            <div className='ml-10'>
                                <LinkLookLikeButton
                                    href='dashboard/powerhour/invites'
                                    text='View more'
                                    bgColor='gold'
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

export const getServerSideProps = async (context: NextPageContext) => {
    const session = await getSession(context);
    let {data} = await axios.post('http://localhost:3000/api/user/get-dashboard', {
        params: session?.user?.email
    })
    return {
        props: {
            user: data?.user
        }
    }
}
