import React from "react"
import Grid from "@material-ui/core/Grid"
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemLink
} from "@material-ui/core"

// import { Hidden } from "@material-ui/core"
const styles = {
  Paper: { padding: 20, marginTop: 10, maginBottum: 10 }
}
export default ({ exercises, muscleIndex, muscles }) => (
  <Grid container>
    <Grid item xs sm>
      <Paper style={styles.Paper}>
        {exercises.filter(([group, ex])=>{
          debugger
          if(muscleIndex === 0) return true;
          return muscles[muscleIndex-1] === group ;
        }).map(([group, exercise]) => {
          return (
            <>
              <Typography
                variant="headline"
                style={{
                  textTransform: "capitalize"
                }}
              >
                {group}
              </Typography>
              <List component="ul">
                {exercise.map(({ title }) => (
                  <ListItem button>
                    <ListItemText
                      disableTypography
                      primary={<Typography variant="body">{title}</Typography>}
                    />
                  </ListItem>
                ))}
              </List>
            </>
          )
        })}
      </Paper>
    </Grid>

    <Grid item xs sm>
      <Paper style={styles.Paper}> 
      <Typography
         variant = "h5"
         style = {{margin:20}}
      >
        wellcome!
      </Typography>
      <Typography
         variant = "subtitle1"
      >
        please select an exercise from the list on the left.
      </Typography>
       </Paper>
    </Grid>
  </Grid>
)
