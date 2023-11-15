import { Fragment } from 'react';
import {
  HeroSectionBlendImage,
  Grid2Column,
  Grid3Column,
  Feature,
  WavySection,
  ComponentMargin,
  SEO,
  CommonPageLayout
} from '@/components/common'
import { 
  FaYoutube,
  FaRegCalendarAlt,
  FaUsers,
  FaShareAlt
} from "react-icons/fa"

export default function Home() {

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
          <h1>Upcoming and recent power hours</h1>
          <Grid3Column>
            <div className='bg-altBlack h-56 w-56 mx-auto'></div>
            <div className='bg-altBlack h-56 w-56 mx-auto'></div>
            <div className='bg-altBlack h-56 w-56 mx-auto'></div>
          </Grid3Column>
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