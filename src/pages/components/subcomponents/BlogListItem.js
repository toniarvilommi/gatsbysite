import React from 'react'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import ButtonLink from './TypographyLink'

const useStyles = makeStyles((theme) => ({
  card: {
    border: `1px solid ${grey[700]}`,
    width: '100%',
    background: grey[800],
  },
  postedOnTitle: {
    fontSize: 14,
  },
}))

const BlogListItem = ({ postDate, slug, title, ...rest }) => {
  const classes = useStyles()

  return (
    <Grid {...rest}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            color="textSecondary"
            gutterBottom
            className={classes.postedOnTitle}
          >
            Posted: {postDate}
          </Typography>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonLink size="small" to={`/blog/${slug}`}>
            Read now
          </ButtonLink>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default BlogListItem
