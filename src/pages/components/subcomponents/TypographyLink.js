import React from 'react'
import Link from 'gatsby-link'

import Button from '@material-ui/core/Button'

const ButtonLink = ({ to, children, ...rest }) => (
  <Button component={Link} to={to} {...rest}>
    {children}
  </Button>
)

export default ButtonLink
