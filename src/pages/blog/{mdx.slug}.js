import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPost = ({ data }) => {
  const postContent = data.mdx.frontmatter
  const postBody = data.mdx.body

  return (
    <Layout pageTitle={postContent.title}>
      <p>{postContent.date}</p>
      <MDXRenderer>{postBody}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost
