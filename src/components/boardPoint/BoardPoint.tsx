import { useState } from 'react'

interface BoardPointProps {
    hit: string
}

export function BoardPoint({ hit }: BoardPointProps) {
    return <div>{hit}</div>
}