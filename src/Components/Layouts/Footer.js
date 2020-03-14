import React from "react"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

export default ({ muscles, onSelect, muscleIndex}) => (
  <Paper>
    <Tabs
      value={muscleIndex}
      indicatorColor="primary"
      textColor="primary"
      centered={true}
      onChange={onSelect}
    >
      <Tab label="All" />
      {muscles.map(el => (
        <Tab label={el} />
      ))}
    </Tabs>
  </Paper>
)
