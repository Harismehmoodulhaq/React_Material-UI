import React from "react"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

export default ({ muscles,category, onSelect, muscleIndex}) => {
  const index = category
  ? muscles.findindex (group => group === category) + 1
  : 0
  
  const  onIndexselect = (e , index) =>
    onSelect(index === 0 ?'' : muscles[index-1])

      return<Paper>
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
}
  

