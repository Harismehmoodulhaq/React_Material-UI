import React, { Component, Fragment } from "react"
import { Header, Footer } from "./Layouts"
import Exercises from "./Exercises"
import { muscles, exercises } from "../store.js"


export default class extends Component {
  state = {
    exercises,
    muscleIndex:0
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise
       
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]
       
        return exercises
      }, {})
    )
  }
 
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
