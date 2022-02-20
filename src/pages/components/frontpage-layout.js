import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles'
import BlogMenu from './subcomponents/BlogMenu'
import BlogListItem from './subcomponents/BlogListItem'

const theme = createTheme({
  shadows: ['none'],
  palette: {
    type: 'dark',
  },
})

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(2),
  },
  blogContainer: {
    padding: theme.spacing(2),
  },
}))

const Layout = ({ pageTitle, children }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
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
  `)

  const title = data.site.siteMetadata.title
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <title>{title}</title>

        <BlogMenu />

        <Box mt={3}>
          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                image her
              </Grid>
              <Grid item xs={6}>
                image here
              </Grid>
            </Grid>
          </Paper>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box mt={2}>
              <Paper className={classes.blogContainer}>
                <Typography variant="h4">Recent posts</Typography>
                <Grid container spacing={3}>
                  {data.allMdx.nodes.map((node) => (
                    <BlogListItem
                      item
                      xs={12}
                      key={node.id}
                      title={node.frontmatter.title}
                      postDate={node.frontmatter.date}
                      slug={node.slug}
                    />
                  ))}
                </Grid>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box mt={2}>
              <Paper className={classes.contentContainer}>
                <Typography variant="h4">{pageTitle}</Typography>
                {children}
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
