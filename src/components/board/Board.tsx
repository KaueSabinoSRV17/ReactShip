import { BoardPoint } from "../boardPoint/BoardPoint";

export function Board() {

    const aRow = new Array(10).fill(<BoardPoint hit={false} />, 0)
    const board = new Array(10).fill(aRow, 0)
    
   return (
    <main data-testid="board">
        {board.map((row, index) => <div key={index}>{row}</div>)}
    </main>
   ) 
}