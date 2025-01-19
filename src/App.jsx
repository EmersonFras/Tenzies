import { useState } from 'react'
import Die from './components/Die'

function App() {

    const [dice, setDice] = useState(allNewDice())

    function allNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({ 
                value: Math.ceil(Math.random() * 6), 
                isHeld: false
            }))
    }

    function rollDice() {
        setDice(allNewDice())
    }

    function holdDie(id) {
        console.log(id)
    }

    const diceElement = dice.map((data, index) => (<Die holdDie={holdDie} value={data.value} id={index} key={index} isHeld={data.isHeld} />))

    return (
        <main>
            <div className="dices">
                {diceElement}
            </div>
            <button className="dice-roll" onClick={rollDice}>Roll</button>
        </main>
    )
}

export default App
