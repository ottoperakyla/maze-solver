

// --- Directions
// Given a maze, return the coordinates of the goal cell (Marked "G").
// --- Examples
// TODO
//getCurrentCoords -> [x, y] (coordinates in matrix of current position)
const CHAR_SOLVER = 'S'
const CHAR_GOAL   = 'G'
const CHAR_FORK   = 'O'
const CHAR_WALL   = '#'
const CHAR_EMPTY  = ' '

const DIRECTION_UP    = 'U'
const DIRECTION_DOWN  = 'D'
const DIRECTION_RIGHT = 'R'
const DIRECTION_LEFT  = 'L'


class Solver {
  constructor(maze) {
    this.maze = maze
    this.solved = false
    this.position = this.getSolverPosition()
    this.path = [{position: this.getSolverPosition(), direction: null}]
    this.goalPosition = this.getGoalPosition()
  }

  _move(direction) {
    console.log(this.maze)
    let oldPosition = this.getSolverPosition()
    let newPosition = this._lookDirection(direction)
    if (!newPosition) {
      throw Error('Cant walk there')
    }
    this.maze[oldPosition[0]][oldPosition[1]] = CHAR_EMPTY
    this.maze[newPosition[0]][newPosition[1]] = CHAR_SOLVER
    this.position = newPosition
    this.path.push({position: newPosition, direction})
    
    if (newPosition[0] === this.goalPosition[0] &&
        newPosition[1] === this.goalPosition[1]) {
      this.solved = true
    }
  }

  _lookDirection(direction) {
    let position = this.getSolverPosition(), newPosition

    switch (direction) {
      case 'R':
        newPosition = [position[0], position[1] + 1]
        break
      case 'L':
        newPosition = [position[0], position[1] - 1]
        break
      case 'U':
        newPosition = [position[0] - 1, position[1]]
        break
      case 'D':
        newPosition = [position[0] + 1, position[1]]
        break
    }

    if (this.maze[newPosition[0]][newPosition[1]] === CHAR_WALL) {
      return false
    }
    
    return newPosition
  }

  moveRight() {
    this._move(DIRECTION_RIGHT)
  }

  moveLeft() {
    this._move(DIRECTION_LEFT)
  }

  moveUp() {
    this._move(DIRECTION_UP)
  }

  moveDown() {
    this._move(DIRECTION_DOWN)
  }

  lookRight() {
    return this._lookDirection(DIRECTION_RIGHT)
  }

  lookLeft() {
    return this._lookDirection(DIRECTION_LEFT)
  }

  lookDown() {
    return this._lookDirection(DIRECTION_DOWN)
  }

  lookUp() {
    return this._lookDirection(DIRECTION_UP)
  }

  setForkPosition() {
    this.path.push(CHAR_FORK)
  }

  isSolved() {
    return this.solved
  }

  getPath() {
    return this.path
  }

  getSolverPosition() {
    return this.getPosition(CHAR_SOLVER)
  }

  getGoalPosition() {
    return this.getPosition(CHAR_GOAL)
  }

  getPosition(char) {
    for (var row = 0; row < this.maze.length; row++) {
      for (var cell = 0; cell < this.maze[row].length; cell++) {
        if (this.maze[row][cell] === char) return [row, cell]
      }
    }
  }
}

function getReverseDir(position) {
  if (!position) {
    return false
  }
  switch (position.direction) {
    case DIRECTION_RIGHT:
      return DIRECTION_LEFT
    case DIRECTION_DOWN:
      return DIRECTION_UP
    case DIRECTION_LEFT:
      return DIRECTION_RIGHT
    case DIRECTION_UP:
      return DIRECTION_DOWN
  }
}

function notVisitedPath(solver, nextMove) {
  return solver.getPath().some(({position}) => {
    if (!position) {
      return false
    }
    let [tryRow, tryCell] = solver._lookDirection(nextMove)
    return position[0] === tryRow && position[1] === tryCell
   }) === false
}

function goBackToLastFork(solver) {
  if (solver.isSolved()) {
    return false
  }
  let path = solver.getPath()
  let pathBack = path.slice(path.lastIndexOf(CHAR_FORK) + 1, path.length)
  let nextMove
  while (nextMove = getReverseDir(pathBack.pop())) {
    solver._move(nextMove)
  }
  solver.setForkPosition()
}

function mazeSolver(maze) {
  var solver = new Solver(maze)
  
  while(!solver.isSolved()) {

    if (solver.lookUp() || solver.lookDown()) {
      solver.setForkPosition()
    }

    if (solver.lookRight() && notVisitedPath(solver, DIRECTION_RIGHT)) {
      solver.moveRight()
      
      if (!solver.lookRight() && !solver.lookUp() && !solver.lookDown()) {
        goBackToLastFork(solver)
      }
    }
    else if (solver.lookUp() && notVisitedPath(solver, DIRECTION_UP)) {
      solver.moveUp()
      
      if (!solver.lookUp() && !solver.lookLeft() && !solver.lookRight()) {
        goBackToLastFork(solver)
      }
    }
    else if (solver.lookDown() && notVisitedPath(solver, DIRECTION_DOWN)) {
      solver.moveDown()
      
      if (!solver.lookDown() && !solver.lookLeft() && !solver.lookRight()) {
        goBackToLastFork(solver)
      }
    } 
    else if (solver.lookLeft() && notVisitedPath(solver, DIRECTION_LEFT)) {
      solver.moveLeft()
      
      if (!solver.lookLeft() && !solver.lookUp() && !solver.lookDown()) {
        goBackToLastFork(solver)
      }
    } 
    else {
      console.error('Cannot move at all!')
    }

  }

  return solver.getSolverPosition()
}


module.exports = mazeSolver;
 