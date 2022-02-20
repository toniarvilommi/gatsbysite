import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import MenuTab from './MenuTab'
import Paper from '@material-ui/core/Paper'

const BlogMenu = () => {
  return (
    <Paper>
      <Tabs>
        <MenuTab label="Home" to="/"></MenuTab>
        <MenuTab label="About" to="/about"></MenuTab>
        <MenuTab label="Blog" to="/blog"></MenuTab>
      </Tabs>
    </Paper>
  )
}

export default BlogMenu
