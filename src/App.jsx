import { useState, useRef, useEffect } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
    const [dice, setDice] = useState(() => allNewDice())
    const buttonRef = useRef(null)


    const gameWon = dice.every((die) => (die.isHeld == true && die.value == dice[0].value))
    
    useEffect(() => {
        if (gameWon) buttonRef.current.focus()
    }, [gameWon])



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
        if (!gameWon) {
            setDice((prevDice) => (prevDice.map(die => {
                return die.isHeld ? die : {...die, value: Math.ceil(Math.random()*6)}
            })))
        } else {
            setDice(allNewDice)
        }
    }

    function holdDie(id) {
        setDice((prevDice) => (prevDice.map(die => {
            return die.id == id ? {...die, isHeld: !die.isHeld} : die
        })))
    }

    const diceElement = dice.map((data) => (<Die holdDie={() => holdDie(data.id)} value={data.value} key={data.id} isHeld={data.isHeld} />))

    return (
        <main>
            {gameWon && <Confetti />}
            <div aria-live='polite' className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dices">
                {diceElement}
            </div>
            <button ref={buttonRef} className="dice-roll" onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
        </main>
    )
}

export default App
