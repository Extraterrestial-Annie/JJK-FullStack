import React, { useState } from 'react'

const Button = (props) => { 
  return (
    <button onClick={props.handleClick}>
      {props.txt}
    </button>
  )
} 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const votes = [0, 0, 0, 0, 0, 0, 0]
  const [copy] = useState([...votes])
  const [selected, setSelected] = useState(0)
  const [ counter, setCounter ] = useState(0)
  const max = copy.indexOf(Math.max(...copy))
  console.log(max)

  const handleVoteClick = () => {
    copy.splice(selected, 1, copy[selected] + 1)
    setTimeout(
      () => setCounter(counter + 1),
      100
    )
  }
  const handleAnecdoteClick = () => {
    setSelected(Math.floor(Math.random() * 7))
  }
  console.log([copy])

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br></br>
      has {copy[selected]} votes <br></br>
      <Button handleClick = {handleVoteClick} txt="vote" />
      <Button handleClick = {handleAnecdoteClick} txt="next anecdote" />
      <h1>Anecdote with most votes</h1>
      {anecdotes[max]}<br></br>
      has {copy[max]} votes <br></br>
    </div>
  )
}

export default App