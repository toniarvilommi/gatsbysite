import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles'
import BlogMenu from './subcomponents/BlogMenu'

const theme = createTheme({
  shadows: ['none'],
  palette: {
    type: 'dark',
  },
})

const useStyles = makeStyles((theme) => ({
  paperContainer: {
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
    }
  `)

  const title = data.site.siteMetadata.title
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <title>{title}</title>

        <BlogMenu />

        <Box square mt={2}>
          <Paper square className={classes.paperContainer}>
            <Typography variant="h4">{pageTitle}</Typography>
            {children}
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
