import React from 'react';
import { NextSeo } from 'next-seo';
import { 
  NavBar,
  HeroSectionBlendImage,
  Grid2Column,
  Feature
} from '@/components/common'
import { FaYoutube } from "react-icons/fa";


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
          heading='Drop The Needle — Start Curating'
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
            title='YouTube Search'
            body='Search for YouTube videos with ease.'
            icon={FaYoutube}
          />
        </Grid2Column>
      </main>
    </React.Fragment>
  )
}
