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
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0])
  const [selected, setSelected] = useState(0)
  const max = votes.indexOf(Math.max(...votes))

  const handleVoteClick = () => {
    const copy = [...votes]
    copy.splice(selected, 1, votes[selected] + 1)
    setVotes(copy)
  }
  const handleAnecdoteClick = () => {
    setSelected(Math.floor(Math.random() * 7))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br></br>
      has {votes[selected]} votes <br></br>
      <Button handleClick = {handleVoteClick} txt="vote" />
      <Button handleClick = {handleAnecdoteClick} txt="next anecdote" />
      <h1>Anecdote with most votes</h1>
      {anecdotes[max]}<br></br>
      has {votes[max]} votes <br></br>
    </div>
  )
}

export default App