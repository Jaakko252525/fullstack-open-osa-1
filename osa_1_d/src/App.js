import { useState } from 'react'



// Positive component
const Statistics = ({good, neutral, bad}) => {
  


  // positive
  const sum = neutral + bad + good
  console.log('sum: ', sum)
  const positiveFeedback = good / sum
  const positiveTimesHundred = positiveFeedback * 100

  const stringiksi = positiveTimesHundred.toString();
  const prosentiksi = stringiksi + '%'
  
  if (good === 0 && neutral === 0 && bad === 0) {

    return (
      <p>No Feedback Given</p>
    )
  }


  return(
  <ul>

    <li>Positive: {prosentiksi}</li>
  </ul>
)
}


// StatisticLine component shows average
const StatisticLine = ({good, neutral, bad, text}) => {

  // average
  const gradeSum = good * 1 + neutral * 0 + bad * -1
  const gradesAmount = good + neutral + bad
  const ka = gradeSum / gradesAmount
  console.log('average: ', ka)  


  if (good === 0 && neutral === 0 && bad === 0) {
  return (
    <p>No Feedback Given</p>
  )
  }
  if (text === 'good')
  return (
    <ul>
      <li>Good: {good}</li>
    </ul>


  )

  if (text === 'neutral')
  return (
    <ul>
      <li>Neutral: {neutral}</li>
    </ul>


  )

  if (text === 'bad')
  return (
    <ul>
      <li>Bad: {bad}</li>
    </ul>
  )

  if (text === 'average') 
  return (
    <ul>
      <li>Average: {ka}</li>
    </ul>
  )

  if (text === 'all') 
  return (
    <ul>
      <li>All: {gradesAmount}</li>
    </ul>
  )


  
}

// Button component
const Button = ({onClicked, text}) => {

  return (
    <button onClick={onClicked}>{text}</button>
  )
}


// APP
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const anecdotesFunction = () => {
    // coding anecdotes list
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    const stringiksi = randomAnecdote.toString()
    console.log(randomAnecdote)
    console.log('hello')
    return (
      
    <p>anecdotes[randomAnecdote]</p>

    )
  }
  
 



  return (

    
    <div>
      <h1>How's the food?</h1>
      <Button onClicked={() => setGood(good + 1)} text={'Good'}/>
      <Button onClicked={() => setNeutral(neutral + 1)} text={'Neutral'}/>
      <Button onClicked={() => setBad(bad + 1)} text={'Bad'}/>

      <h2>Feedback</h2>



      <StatisticLine text={'good'}  good={good} neutral={neutral} bad={bad} />
      <StatisticLine text={'neutral'}  good={good} neutral={neutral} bad={bad} />
      <StatisticLine text={'bad'}  good={good} neutral={neutral} bad={bad} />
      <StatisticLine text={'all'}  good={good} neutral={neutral} bad={bad} />
      <StatisticLine text={'average'}  good={good} neutral={neutral} bad={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />

      <button onClick={anecdotesFunction()}>press</button>
    </div>
  )
}

export default App

















