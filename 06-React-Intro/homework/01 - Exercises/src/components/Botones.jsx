import React from 'react'

const Botones = ({ alerts, ejemplo }) => {
    return(
        <div>
            <button onClick={() => alert(alerts.m1)}>M1</button>
            <button onClick={() => alert(alerts.m2)}>M2</button>
            <button onClick={() => alert(ejemplo)}>Ejemplo</button>
        </div>
    )
}

export default Botones