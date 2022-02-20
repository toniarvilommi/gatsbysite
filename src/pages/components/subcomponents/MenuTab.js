import React from 'react'
import Link from 'gatsby-link'

import Tab from '@material-ui/core/Tab'

const MenuTab = ({ to, children, ...rest }) => (
  <Tab component={Link} to={to} {...rest}>
    {children}
  </Tab>
)

export default MenuTab
