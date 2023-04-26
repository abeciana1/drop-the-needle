import React from 'react';
import { NextSeo } from 'next-seo';
import { 
  NavBar 
} from '@/components/common'

export default function Home() {

  return (
    <React.Fragment>
      <NextSeo
        title='Drop The Needle'
        description=""
      />
      <NavBar/>
      <main>
      </main>
    </React.Fragment>
  )
}
