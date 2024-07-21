export type SquareType = 'X' | 'O' | null

export type WinningType = {
  winner: SquareType
  winningCombination?: number[]
}
