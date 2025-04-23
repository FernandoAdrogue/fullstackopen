import { useState } from 'react'

const StatisticLine = ({text, value}) => (
  <tr>
    <td>
      {text}
    </td>
    <td>
      {value}
    </td>
  </tr>
)

const Title = ({value}) => (
  <h1>{value}</h1>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick} value={text}>
    {text}
  </button>
)
const Statistics =({values})=>{
  const [good, neutral, bad] = values
  const total = good + neutral + bad
  const average = total > 0 ?  (good - bad) / total : 0
  const positive = total > 0 ? `${(good / total)*100} %` : `0%`
  return(
    <>
      <Title value={"statistics"} />
      <table>
        <tbody>
          {total > 0 ?
            <>
              <StatisticLine text={'good'}value={good}/>
              <StatisticLine text= {'neutral'} value={neutral}/>
              <StatisticLine text= {'bad'} value={bad}/>
              <StatisticLine text= {'all'} value={total} />
              <StatisticLine text= {'average'} value={average} />
              <StatisticLine text= {'positive'} value={positive} />
            </> 
          :
            <StatisticLine text={"No feedback given"} />
          }
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick =()=>{
    setGood(good + 1)
  }
  
  const handleNeutralClick=()=>{
    setNeutral(neutral + 1)
  }
  const handleBadClick=()=>{
    setBad (bad + 1)
  }

  return (
    <div>
      <Title value={"give feedback"} />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics values={[good, neutral, bad]} />
    </div>
  )
}
export default App