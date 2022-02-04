import { GRID, NUMBERS } from 'typings'

interface IInput {
    grid: GRID
    col: number
    value: NUMBERS
}

/**
 * A function that returns true if the value is already being used in the current grid column
 * @param input Object with 9x9 Sudoku Grid, column index and value
 */
function isinCol({ grid, col, value } : IInput): boolean {
    for (let i = 0; i < 9; i++){
        if (value === grid[i][col]){
            return true
        }
    }
    return false
}

export default isinCol;
