import { useState } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'

function App() {

    const [dice, setDice] = useState(allNewDice())

    function allNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({ 
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            }))
    }

    function rollDice() {
        setDice((prevDice) => (prevDice.map(die => {
            return die.isHeld ? die : {...die, value: Math.ceil(Math.random()*6)}
        })))
    }

    function holdDie(id) {
        setDice((prevDice) => (prevDice.map(die => {
            return die.id == id ? {...die, isHeld: !die.isHeld} : die
        })))
    }

    const diceElement = dice.map((data) => (<Die holdDie={holdDie} value={data.value} id={data.id} key={data.id} isHeld={data.isHeld} />))

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
