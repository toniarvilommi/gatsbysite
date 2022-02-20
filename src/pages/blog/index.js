import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import BlogListItem from '../components/subcomponents/BlogListItem'

const useStyles = makeStyles((theme) => ({
  card: {
    border: `1px solid ${grey[700]}`,
    minWidth: 275,
    background: grey[800],
  },
  postedOnTitle: {
    fontSize: 14,
  },
}))

const pageTitle = 'My blog'

const BlogPage = ({ data }) => {
  const classes = useStyles()
  const postsData = data.allMdx.nodes

  return (
    <Layout pageTitle={pageTitle}>
      <Grid container spacing={3}>
        {postsData.map((node) => (
          <BlogListItem
            item
            xs={4}
            key={node.id}
            title={node.frontmatter.title}
            postDate={node.frontmatter.date}
            slug={node.slug}
          />
        ))}
      </Grid>
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
