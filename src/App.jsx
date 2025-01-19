import { useState } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'

function App() {
    const [dice, setDice] = useState(allNewDice())

    const gameWon = dice.every((die) => (die.isHeld == true && die.value == dice[0].value))


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

    const diceElement = dice.map((data) => (<Die holdDie={() => holdDie(data.id)} value={data.value} key={data.id} isHeld={data.isHeld} />))

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dices">
                {diceElement}
            </div>
            <button className="dice-roll" onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
        </main>
    )
}

export default App
