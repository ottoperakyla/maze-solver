const mazeSolver = require('./index');

test('Mazesolver function is defined', () => {
  expect(typeof mazeSolver).toEqual('function');
});

test('Solves a simple maze #1', () => {
  const level = [
    ['#','#','#','#','#','#','#','#','#'],
    ['#','#','#','G','#','#','#','#','#'],
    ['#','S',' ',' ',' ',' ',' ',' ','#'],
    ['#','#','#',' ','#','#','#','#','#'],
    ['#','#','#','#','#','#','#','#','#']
  ]
  const goalCoords = [1, 3]

  expect(mazeSolver(level)).toEqual(goalCoords);
});

test('Solves a simple maze #2', () => {
  const level = [
    ['#','#','#','#','#','#','#','#'],
    ['#','#','#',' ','#','#','#','#'],
    ['S',' ',' ',' ',' ',' ',' ','#'],
    ['#','#','#','G','#','#','#','#'],
    ['#','#','#','#','#','#','#','#']
  ]
  const goalCoords = [3, 3]

  expect(mazeSolver(level)).toEqual(goalCoords);
});

test('Solves a simple maze #3', () => {
  const level = [
    ['#','#','#','#','#','#','#','#'],
    ['#','#','#','G','#','#','#','#'],
    [' ',' ',' ',' ',' ',' ','S','#'],
    ['#','#','#',' ','#','#','#','#'],
    ['#','#','#','#','#','#','#','#']
  ]
  const goalCoords = [1, 3]

  expect(mazeSolver(level)).toEqual(goalCoords);
});

test('Solves a simple maze #4', () => {
  const level = [
    ['#','#','#','#','#','#','#','#'],
    ['#','#','#','S','#','#','#','#'],
    ['G',' ',' ',' ',' ',' ',' ','#'],
    ['#','#','#',' ','#','#','#','#'],
    ['#','#','#','#','#','#','#','#']
  ]
  const goalCoords = [2, 0]

  expect(mazeSolver(level)).toEqual(goalCoords);
});

test('Solves a simple maze #5', () => {
  const level = [
    ['#','#','#','#','#','#','#','#'],
    ['#','#','#','S','#','#','#','#'],
    [' ',' ',' ',' ',' ',' ','G','#'],
    ['#','#','#',' ','#','#','#','#'],
    ['#','#','#','#','#','#','#','#']
  ]
  const goalCoords = [2, 6]

  expect(mazeSolver(level)).toEqual(goalCoords);
});

test('Solves a simple maze #6', () => {
  const level = [
    ['#','#','#','#','#','#','#','#'],
    ['#','#','#','S','#','#','#','#'],
    [' ',' ',' ',' ',' ',' ',' ','#'],
    ['#','#','#','G','#','#','#','#'],
    ['#','#','#','#','#','#','#','#']
  ]
  const goalCoords = [3, 3]

  expect(mazeSolver(level)).toEqual(goalCoords);
});

test('Solves a maze with multiple forks #1', () => {
  const level = [
    ['#','#','#','#','#','#','#','#'],
    ['#','#','#',' ','#','G','#','#'],
    ['S',' ',' ',' ',' ',' ',' ','#'],
    ['#','#','#',' ','#',' ','#','#'],
    ['#','#','#','#','#','#','#','#']
  ]
  const goalCoords = [1, 5]

  expect(mazeSolver(level)).toEqual(goalCoords);
});

test('Solves a maze with multiple forks #2', () => {
  const level = [
    ['#','#','#','#','#','#','#','#'],
    ['#','#','#',' ','#',' ','#','#'],
    ['S',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ','#',' ','#',' ','#','#'],
    ['#',' ','#','#','#',' ','#','#'],
    ['#',' ',' ','#','#',' ','G','#'],
    ['#','#','#','#','#',' ','#','#']
  ]
  const goalCoords = [5, 6]

  expect(mazeSolver(level)).toEqual(goalCoords);
});

test('Solves a maze with multiple forks #3', () => {
  const level = [
    ['#','#','#','#','#','#','#','#'],
    ['#','G','#',' ','#',' ','#','#'],
    ['#',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ','#',' ','#',' ','#','#'],
    ['#',' ','#','#','#',' ','#','#'],
    ['#',' ',' ','#','#',' ','S','#'],
    ['#','#','#','#','#','#','#','#']
  ]
  const goalCoords = [1, 1]

  expect(mazeSolver(level)).toEqual(goalCoords);
});


test('Solves a maze with multiple forks #4', () => {
  const level = [
    ['#','#','#','#','#','#','#','#'],
    ['#','G','#',' ','#',' ','#','#'],
    ['#',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ','#',' ','#',' ','#','#'],
    ['#',' ','#','#','#',' ','#','#'],
    ['#',' ',' ','#','#',' ',' ','#'],
    ['#','#','#',' ',' ',' ','#','#'],
    ['#','#','#',' ','#',' ','#','#'],
    ['#',' ','#',' ','#','#','#','#'],
    ['#',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ','#',' ','#',' ','#','#'],
    ['#',' ','#','#','#',' ','#','#'],
    ['#',' ','#',' ',' ',' ',' ','#'],
    ['#','#','#',' ','#','#','#','#'],
    ['#',' ','#',' ','#','#','#','#'],
    ['#',' ','#',' ','#',' ','#','#'],
    ['#',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ','#',' ','#',' ','#','#'],
    ['#',' ','#','#','#',' ','#','#'],
    ['#',' ',' ','#','#',' ','S','#'],
    ['#','#','#','#','#','#','#','#']
  ]
  const goalCoords = [1, 1]

  expect(mazeSolver(level)).toEqual(goalCoords);
});

