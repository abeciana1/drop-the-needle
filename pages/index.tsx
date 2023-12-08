import { Fragment } from 'react';
import {
  HeroSectionBlendImage,
  Grid2Column,
  Feature,
  WavySection,
  ComponentMargin,
  SEO,
  CommonPageLayout,
  PlaylistCard,
  PlaylistCardGroup,
  LinkLookLikeButton
} from '@/components/common'
import { 
  FaYoutube,
  FaRegCalendarAlt,
  FaUsers,
  FaShareAlt
} from "react-icons/fa"
import axios from 'axios'
// import { appUrl } from '@/utils'
import { PowerHourDataCollectionI, PowerHourDataI } from '@/interfaces'
import { formatInTimeZone } from 'date-fns-tz'
import { H2 } from '@/components/styled'

export default function Home({ powerHours }: PowerHourDataCollectionI) {

  return (
    <Fragment>
      <SEO
        description='Start curating and compiling power hours with ease from YouTube videos.'
      />
      <CommonPageLayout footerColor='vermillion-200'>
        <ComponentMargin>
          <HeroSectionBlendImage
            heading='Drop The Needle'
            bodyTagline='Start curating and compiling power hours with ease from YouTube videos.'
            image={{
              src: '/Scripps.webp',
              width: 800,
              height: 450,
              alt: 'Scripps Institute - San Diego, CA'
            }}
            ctaButton
            ctaColor='gold'
            ctaLink='participate'
            ctaText='Join Now'
          />
        </ComponentMargin>
        <WavySection color='jaffa-200' type={1} />
        <ComponentMargin bgColor='jaffa-200'>
          <H2 text='Upcoming and recent power hours' />
          <>
            {powerHours?.length > 0 &&
                <>
                    <PlaylistCardGroup>
                        {powerHours?.map((powerHour: PowerHourDataI) => {
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
                    <div className='flex justify-center md:justify-start md:ml-10'>
                      <LinkLookLikeButton
                          href='listen'
                          text='View all'
                          bgColor='blue'
                          ctaArrow={true}
                      />
                    </div>
                </>
            }
            {powerHours?.length < 1 &&
              <div className='text-2xl font-medium py-5'>Looks like there are no power hours in the archive. Signin and host one!</div>
            }
          </>
        </ComponentMargin>
        <WavySection color='jaffa-200' type={2} bgColor='ceruleanBlue' />
        <ComponentMargin bgColor='ceruleanBlue'>
          <h1>Features</h1>
          <Grid2Column>
            <Feature
              title='YouTube Search (coming soon)'
              body='Search for YouTube videos with ease.'
              icon={FaYoutube}
              color='altWhite'
              />
            <Feature
              title='Power Hour Management'
              body='Create, host, share, and edit power hours.'
              icon={FaRegCalendarAlt}
              color='altWhite'
              />
            <Feature
              title='Participate'
              body='Add YouTube videos to power hours that you join.'
              icon={FaUsers}
              color='altWhite'
              />
            <Feature
              title='Share and Present'
              body='Share and present power hours with everyone!'
              icon={FaShareAlt}
              color='altWhite'
              />
          </Grid2Column>
        </ComponentMargin>
        <WavySection color='ceruleanBlue' type={3} bgColor='vermillion-200' />
      </CommonPageLayout>
    </Fragment>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(process.env.URL + '/api/powerhour/get-all-public')
  return {
      props: {
        powerHours: data?.publicPowerHours
      }
  }
}