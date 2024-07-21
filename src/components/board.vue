<script setup lang="ts">
import { computed, ref } from 'vue'
import Square from './square.vue'
import type { SquareType } from '@/types'
import { calculateWinner } from '@/util/calculate-winner'
import { canMove } from '@/util/can-move'

const isXNext = ref(true)

const squares = ref<SquareType[]>(Array(9).fill(null))
const haveWinner = computed(() => calculateWinner(squares.value))
const outOfMoves = computed(() => !canMove(squares.value))

const handleClick = (index: number) => {
  if (squares.value[index] !== null) {
    return
  }

  if (haveWinner.value.winner !== null) {
    return
  }

  if (isXNext.value) {
    squares.value[index] = 'X'
  } else {
    squares.value[index] = 'O'
  }

  isXNext.value = !isXNext.value
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div v-if="haveWinner.winner">{{ haveWinner.winner }} won!! 🏆</div>
    <div v-if="outOfMoves">Draw</div>
    <div v-else>{{ isXNext ? 'X' : 'O' }} is Next!</div>

    <div class="grid grid-cols-3 grid-rows-3 mt-1 ml-1">
      <Square
        @click="handleClick"
        :value="square"
        :index
        :isWinning="haveWinner.winningCombination?.includes(index) ?? false"
        v-for="(square, index) in squares"
        :key="index"
      />
    </div>
  </div>
</template>
