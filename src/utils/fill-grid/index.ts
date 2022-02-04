import { GRID, NUMBERS } from 'typings'
import { isInRow, isInCol, shuffle} from 'utils';

const gridExample = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

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
        console.log('row', row)
        col = i % 9

        if (grid[row][col] === 0) {
            shuffle(numbers)
            //do stuff
            for (let value of numbers) {
                //is it not in grid row?
                if (!isInRow({ grid, row, value })) {
                    // is it not in grid col?

                    if (!isInCol({ col, grid, value })) {
                        //is it not on the grid square?
                        // ....... if this is the case

                        grid[row][col] = value
                        //check grid if it is full, if yes, stop and return

                        //otherwise we run fillGrid(grid)
                    }
                }
            }
            // return
            break;
        }
    }
    grid[row][col] = 0
}

export default fillGrid;
