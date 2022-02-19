import React from 'react'
import Layout from './components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const pageTitle = 'Welcome to the homepage'

const IndexPage = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://media-be.chewy.com/wp-content/uploads/2021/05/27140116/Pug_FeaturedImage.jpg"
      />
    </Layout>
  )
}

export default IndexPage
