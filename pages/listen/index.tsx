import { Fragment, useMemo } from 'react'
import {
    SEO,
    ComponentMargin,
    WavySection,
    CommonPageLayout,
    PlaylistCardGroup,
    PlaylistCard
} from '@/components/common'
import { H1, H2 } from '@/components/styled'
import { Input } from '@/components/account'
import { useForm, useWatch } from "react-hook-form"
import axios from 'axios'
import { formatInTimeZone } from 'date-fns-tz'
import { PowerHourDataCollectionI, PowerHourDataI } from '@/interfaces'

const ListenIdx = ({ powerHours }: PowerHourDataCollectionI) => {
    const {
        register,
        control
    } = useForm()
    const searchWatch = useWatch({
        control,
        name: 'searchInput',
        defaultValue: ''
    })

    const searchFilteredPhs = useMemo(() => {
        return powerHours?.filter((powerHour: PowerHourDataI) => powerHour?.title?.toLowerCase().includes(searchWatch.toLowerCase()))
    }, [searchWatch])
    
    return(
        <Fragment>
            <SEO
                title='All Power Hours'
                description='Relive past power hours.'
            />
            <CommonPageLayout footerColor='vermillion-200'>
                <ComponentMargin bgColor='altWhite'>
                    <H1 color={0} text={'All Power Hours'} />
                    <section className='py-3'>
                        <Input
                            hideLabel
                            label='Search...'
                            placeholder='Search...'
                            name='searchInput'
                            fieldRequired={false}
                            register={register}
                        />
                    </section>
                    <>
                        {searchFilteredPhs?.length > 0 &&
                            <>
                                <PlaylistCardGroup>
                                    {searchFilteredPhs?.map((powerHour: PowerHourDataI) => {
                                        return (
                                            <PlaylistCard
                                                key={powerHour.id}
                                                id={powerHour.id}
                                                title={powerHour.title}
                                                cover_image={powerHour.cover_image}
                                                date={formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'MM/dd/yyyy')}
                                                time={formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'p zzz')}
                                                publicLink
                                                hostedLink={false}
                                            />
                                        )
                                    })}
                                </PlaylistCardGroup>
                            </>
                        }
                        {searchFilteredPhs?.length < 1 &&
                            <>
                            {searchWatch.length < 1 && 
                                <H2 text='Sorry there are no publicly listed power hours.' color={0} />
                            }
                            {searchWatch.length > 0 &&
                                <H2 text='Sorry there are no power hours meeting that filter.' color={0} />
                            }
                            </>
                        }
                    </>
                </ComponentMargin>
                <WavySection color='altWhite' type={3} bgColor='vermillion-200' />
            </CommonPageLayout>
        </Fragment>
    )
}

export default ListenIdx

export const getServerSideProps = async () => {
    const { data } = await axios.get(process.env.URL + '/api/powerhour/get-all-public')
    return {
        props: {
            powerHours: data?.publicPowerHours
        }
    }
}