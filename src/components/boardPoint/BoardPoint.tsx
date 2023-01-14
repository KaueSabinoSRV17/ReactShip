import { useState } from 'react'

export function BoardPoint({ simbolWhenHit = 'x' }) {

    const [simbolOnScreen, setSimbolOnScreen] = useState('-')

    const hitThePoint = () => setSimbolOnScreen(simbolWhenHit)

    return (
        <div
        onClick={hitThePoint}>{simbolOnScreen}</div>
    )
}