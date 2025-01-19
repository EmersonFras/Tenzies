import React from 'react'

function Die({ value, isHeld, holdDie}) {

    const styles = {
        backgroundColor: isHeld ? "#59E391" : undefined
    }

    return (
        <button 
            onClick={holdDie} 
            style={styles} 
            className="die"
            aria-pressed={isHeld}
            aria-label={`Die with value ${value}, ${isHeld ? "held" : "not held"}`}
        >
                {value}
        </button>
    )
}

export default Die