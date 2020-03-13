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
    exercises
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

  render() {
    const exercises = this.getExercisesByMuscles()
    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} />
        <Footer muscles={muscles} />
      </Fragment>
    )
  }
}
