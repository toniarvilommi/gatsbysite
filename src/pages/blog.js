import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from './components/layout'

const pageTitle = 'My blog'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={pageTitle}>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`
export default BlogPage
