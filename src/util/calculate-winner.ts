import type { SquareType, WinningType } from '@/types'

export const calculateWinner = (squares: SquareType[]): WinningType => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (const winningCombination of winningCombinations) {
    const [a, b, c] = winningCombination
    if (squares[a] === squares[b] && squares[a] === squares[c] && squares[a] !== null) {
      return { winner: squares[a], winningCombination }
    }
  }

  return { winner: null }
}
