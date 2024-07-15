import React from 'react'
import Headers from '../../components/landing-page/header'

const HomePageLayout = ({children}:{ children: React.ReactNode }) => {
  return (
    <main>
      <Headers />
      {children}
    </main>
  )
}

export default HomePageLayout
