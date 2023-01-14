import './BoardPoint'
import { BoardPoint } from './BoardPoint'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { test, describe, expect } from 'vitest'
import App from '../../App'


describe('Board Point', () => {

    it('Should Default to a -', () => {

        // Given...
        const { getByText } = render(<BoardPoint />)

        // When...
        const componentOnScreen = getByText('-')

        // Then...
        expect(componentOnScreen)
            .toBeInTheDocument()

    })

    it('Should turn into a x if the point is not part of a ship when hit', () => {

        // Given...
        const { getByText } = render(<BoardPoint />)
        const componentOnScreen = getByText('-')

        // When...
        componentOnScreen.click()
        const changedComponent = getByText('x')

        // Then...
        expect(changedComponent)
            .toBeInTheDocument()

    })

    it('should turn into a o if the point is part of a ship', () => {


        // Given...
        const { getByText, debug } = render(<BoardPoint simbolWhenHit="o" />)
        const shipPoint = getByText('-')

        // When...
        shipPoint.click()

        // Then...
        debug()
        
    })
    
})