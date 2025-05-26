import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value',counter)

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  const betitall = () => {
    console.log('betting it all, value before', counter)
    let flip = Math.floor(Math.random());
    console.log(flip)
    {/* 
      If (flip == 0); {
      setCounter(0)
      console.log('Sorry, you lost it all')
      } 
    */}
  }

  const bethalf = () => {
    console.log('betting half, value before', counter)
    let flip = Math.floor(Math.random());
    console.log(flip)
    {/* 
      If (flip == 0); {
      setCounter(0)
      console.log('Sorry, you lost it all')
      } 
    */}
  }

  const betone = () => {
    console.log('betting one, value before', counter)
    let flip = Math.floor(Math.random());
    console.log(flip)
    {/* 
      If (flip == 0); {
      setCounter(0)
      console.log('Sorry, you lost it all')
      } 
    */}
  }

  {/* 
    Obviously need to make a function that flips the coin 
    rather than rewriting for each option
    Choose option, store option, no matter what option, flip coin, then check selected option and flip result, change counter accordingly
  */}

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Press your luck</h1>
      <div>
        <Display counter={counter}/>
      </div>
      <div className="card">
        <Button 
          onClick={increaseByOne}
          text='plus'
        />
        <Button
          onClick={setToZero}
          text='zero'
        />
        <Button
          onClick={decreaseByOne}
          text='minus'
        />
      </div>
        
      <div className="card">
        <Button 
          onClick={betitall}
          text='Bet it all'
        />
        <Button
          onClick={bethalf}
          text='Bet half'
        />
        <Button
          onClick={betone}
          text='Bet one'
        />
      </div>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App