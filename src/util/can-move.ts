import type { SquareType } from '@/types'

export const canMove = (squares: SquareType[]): boolean => {
  for (const square of squares) {
    if (square === null) {
      return true
    }
  }
  return false
}
