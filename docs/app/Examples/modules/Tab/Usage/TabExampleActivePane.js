import React from 'react'
import { Tab } from 'semantic-ui-react'

const TabExampleActivePane = () => (
  <Tab>
    <Tab.Pane menuItem='Tab 1'>Tab 1 Content</Tab.Pane>
    <Tab.Pane menuItem='Tab 2'>Tab 2 Content</Tab.Pane>
    <Tab.Pane active menuItem='Tab 3 (active)'>Tab 3 Content</Tab.Pane>
  </Tab>
)

export default TabExampleActivePane