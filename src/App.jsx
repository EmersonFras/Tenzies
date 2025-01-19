import { useState } from 'react'
import Die from './components/Die'

function App() {

  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6))
  }

  const diceElement = dice.map((value, index) => (<Die value={value} key={index} />))

  return (
    <main>
      <div className="dices">
        {diceElement}
      </div>
    </main>
  )
}

export default App
