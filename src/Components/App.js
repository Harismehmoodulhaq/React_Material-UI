import React, { Component, Fragment } from "react"
import { Header, Footer } from "./Layouts"
import Exercises from "./Exercises"
import { muscles, exercises } from "../store.js"
// import { Object } from "prop-types"
// import { getThemeProps } from "@material-ui/styles";
// function App() {
//   return (
//     <div>
//       <h1>hi</h1>
//     </div>
//   );getThemeProps
// }

export default class extends Component {
  state = {
    exercises,
    muscleIndex:0
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise
        // debugger;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]
        // debugger;
        return exercises
      }, {})
    )
  }
  // props;
  onSelect = (event, index) => {
    debugger;
    this.setState({muscleIndex: index})
  }
  render() {
    const exercises = this.getExercisesByMuscles()
    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} muscleIndex={this.state.muscleIndex} muscles={muscles}/>
        <Footer muscles={muscles} onSelect={this.onSelect} muscleIndex={this.state.muscleIndex}/>
      </Fragment>
    )
  }
}
// var prop = 'muscles'
// groupBy(el=>el[prop], exercises);
function groupBy(getProp, arrOfObj){
    return arrOfObj.reduce((acc, el, i , arr)=>{
      let prop = getProp(el);
      if(prop){

      }
      acc[prop] = acc[prop]
      ? [...acc[prop], el]
      : [el]
    }, {} )
}

function isFalse(value){
  let x = new String(value)
}