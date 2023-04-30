import React from 'react';
import { NextSeo } from 'next-seo';
import { 
  NavBar,
  HeroSectionBlendImage 
} from '@/components/common'

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
      </main>
    </React.Fragment>
  )
}
