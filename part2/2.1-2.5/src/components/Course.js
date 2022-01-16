import React from 'react'



const Header = (props) => {
  return (
    <h2>{props.courses.name}</h2>
  )
}

const Content = (props) => {
  const content = []
  for (let i = 1; i < (props.courses.parts.length + 1); i++) {
    content.push(<p key={i}>{props.courses.parts[(i-1)].name + " " + props.courses.parts[(i-1)].exercises}</p>)
  }

  return (
    <div>{content}</div>
  )  
}
  
const Total = (props) => {
  const exercises = []
  for (let i = 0; i < props.courses.parts.length; i++) {
    exercises.push(props.courses.parts[i].exercises)}
  const sum = exercises.reduce((a, b) => a + b, 0)

  return (
    <p>
      <b>Total of {sum} exercises</b>
    </p>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header courses={props.courses} /> 
      <Content courses={props.courses} /> 
      <Total courses={props.courses} />
    </div>
  )
}
  
export default Course