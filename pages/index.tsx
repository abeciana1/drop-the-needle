import React from 'react';
import { NextSeo } from 'next-seo';
import { 
  NavBar,
  HeroSectionBlendImage,
  Grid2Column,
  Feature
} from '@/components/common'
import { 
  FaYoutube,
  FaRegCalendarAlt,
  FaUsers,
  FaShareAlt
} from "react-icons/fa";


export default function Home() {

  return (
    <React.Fragment>
      <NextSeo
        title='Drop The Needle'
        description=''
      />
      <NavBar/>
      <main>
        <HeroSectionBlendImage
          heading='Drop The Needle'
          bodyTagline='Start curating and compiling power hours with ease from YouTube videos.'
          image={{
            src: '/Scripps.webp',
            width: 800,
            height: 450,
            alt: 'Scripps Institute - San Diego, CA'
          }}
        />
        <Grid2Column>
          <Feature
            title='YouTube Search (coming soon)'
            body='Search for YouTube videos with ease.'
            icon={FaYoutube}
          />
          <Feature
            title='Power Hour Management'
            body='Create, host, share, and edit power hours.'
            icon={FaRegCalendarAlt}
          />
          <Feature
            title='Participate'
            body='Add YouTube videos to power hours that you join.'
            icon={FaUsers}
          />
          <Feature
            title='Share and Present'
            body='Share and present power hours with everyone!'
            icon={FaShareAlt}
          />
        </Grid2Column>
      </main>
    </React.Fragment>
  )
}
