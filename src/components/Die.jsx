import React from 'react'

function Die({ value, isHeld, holdDie}) {

    const styles = {
        backgroundColor: isHeld ? "#59E391" : undefined
    }

    return (
        <button onClick={holdDie} style={styles} className="die">{value}</button>
    )
}

export default Die