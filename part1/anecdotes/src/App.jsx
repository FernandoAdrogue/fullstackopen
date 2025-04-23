import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick} value={text}>
    {text}
  </button>
)

const Display = ({anecdotes,selected,votes}) =>(
  <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      {votes[selected] > 0 ? <div>Has {votes[selected]} votes</div>:<></>}
  </div>
)

const DiplayMostVoted = ({anecdotes,votes}) =>{
  const mostVoted= votes.indexOf(Math.max(...votes))
  return(
  <div>
      <h1>Anecdote with most votes</h1>
      {Math.max(...votes) > 0 ?
      <>
        <div>
          {anecdotes[mostVoted]}
        </div>
        <div>
          Has {votes[mostVoted]} votes
        </div>
      </>:
      <div>
        No votes yet
      </div>
      }
  </div>
)}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  const [selected, setSelected] = useState(0)

  const handleNextAnecdote = (max)=>{
    setSelected(Math.floor(Math.random() * max))
  }

  const handleVote = (selected)=>{
    const newVotes=[...votes]
    newVotes[selected]=newVotes[selected]+1
    setVotes(newVotes)
  }

  return (
    <>
    <Display anecdotes={anecdotes} selected={selected} votes={votes} />
    <Button text={"vote"} handleClick={()=>handleVote(selected)} />
    <Button text={"next anecdote"} handleClick={()=>(handleNextAnecdote(anecdotes.length))} />
    <DiplayMostVoted anecdotes={anecdotes} votes={votes} />
    </>
  )
}

export default App