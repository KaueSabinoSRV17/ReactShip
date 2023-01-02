import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { Board } from "./Board"


describe('Board', () => {

    it('Should have a 10 by 10 grid of board points', () => {

        // Given...
        const {getByTestId, getAllByText} = render(<Board />)
        
        // When...
        const componentOnScreen = getByTestId('board')
        const allPointsOfTheBoard = getAllByText('-')

        // Then...
        expect(componentOnScreen)
            .toBeInTheDocument()

        expect(componentOnScreen.childNodes.length)
            .toBe(10)

        expect(allPointsOfTheBoard.length)       
            .toBe(100)

    })

})