import { GRID, NUMBERS } from 'typings'
import { identifySquare,isInRow, isInCol, isInSquare, checkGrid, shuffle} from 'utils';

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking recursive function
 * to check all the possible combinations of numbers
 * until a solution is found
 * @param grid
 */
function fillGrid(grid: GRID) {
    let row = 0;
    let col = 0;

    for (let i = 0; i < 81; i++) {
        row = Math.floor(i / 9);
        col = i % 9

        if (grid[row][col] === 0) {
            shuffle(numbers)
            for (let value of numbers) {
                //is it not in grid row?
                if (!isInRow({ grid, row, value }))
                    //is it not in grid col?
                    if (!isInCol({ grid, col, value })) {
                        //is it not in the grid square?
                        const square = identifySquare({ col, grid, row })
                        if (!isInSquare({ square, value})) {
                            // ....... if this is the case
                            grid[row][col] = value
                            //check grid if it is full, if yes, stop and return
                            if (checkGrid(grid)) return true
                            //otherwise we run fillGrid(grid)
                            else if (fillGrid(grid)) return true
                        }
                    }
            }
            break;
        }
    }
    grid[row][col] = 0
}

export default fillGrid;
