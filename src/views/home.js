import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Complete Oily Deer</title>
        <meta property="og:title" content="Complete Oily Deer" />
      </Helmet>
      <div className="home-container1"></div>
    </div>
  )
}

export default Home
