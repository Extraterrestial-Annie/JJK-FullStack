import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.txt}
    </button>
  )
}

const StatisticLine = (props) => {

  return (
    <tr>
    <td>{props.txt}</td>
    <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine txt="good" value ={props.good} />
        <StatisticLine txt="neutral" value ={props.neutral} />
        <StatisticLine txt="bad" value ={props.bad} />
        <StatisticLine txt="all" value ={props.all} />
        <StatisticLine txt="average" value ={props.avg} />
        <StatisticLine txt="positive" value ={props.positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setCount] = useState(0) 
  const avg = (good-bad)/all
  const positive = (good*100/all) + "%"
  
  const handleGoodClick = () => {
    setCount(all + 1)
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setCount(all + 1)
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setCount(all + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {handleGoodClick} txt="good" />
      <Button handleClick = {handleNeutralClick} txt="neutral" />
      <Button handleClick = {handleBadClick} txt="bad" />
      <h1>statistics</h1>
      <Statistics 
        good={good} 
        neutral={neutral}
        bad={bad}
        all={all}
        avg={avg}
        positive={positive}
      />
    </div>
  )
}

export default App