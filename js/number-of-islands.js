/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let row_bound = grid.length;
  let col_bound = grid[0].length;
  let land_num = 0;
  let visited_cell = {};
  for (let i = 0; i < row_bound; i++) {
    visited_cell[index] = {};
  }

  grid.forEach((row, row_num) => {
    row.forEach((ele, col_num) => {
      if (ele == "1" && !visited_cell[row_num][col_num]) {
        visited_cell[row_num][col_num] = true;
        let cur_pos = [[row_num, col_num]];
        let newLand = true;
        land_num += 1;
        while (newLand) {
          let next_pos = cur_pos
            .map((pos) => {
              let next_inner_pos = [
                [pos[0], pos[1] + 1],
                [pos[0], pos[1] - 1],
                [pos[0] + 1, pos[1]],
                [pos[0] - 1, pos[1]],
              ];
              let new_next_inner_pos = [];
              next_inner_pos.forEach((cell) => {
                if (
                  cell[0] < row_bound &&
                  cell[0] > -1 &&
                  cell[1] < col_bound &&
                  cell[1] > -1
                ) {
                  if (!visited_cell[cell[0]][cell[1]]) {
                    visited_cell[cell[0]][cell[1]] = true;
                    if (grid[cell[0]][cell[1]] == "1") {
                      new_next_inner_pos.push(cell);
                    }
                  }
                }
              });
              return new_next_inner_pos;
            })
            .flat();
          cur_pos = next_pos;
          if (next_pos.length == 0) {
            newLand = false;
          }
        }
      }
    });
  });
  return land_num;
};

let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid));
