import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const pageTitle = 'My blog'

const BlogPage = ({ data }) => {
  const postsData = data.allMdx.nodes

  return (
    <Layout pageTitle={pageTitle}>
      {postsData.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
