<script setup lang="ts">
import { ref } from 'vue'
import Square from './square.vue'

type SquareType = string | null

const squares = ref<SquareType[]>(Array(9).fill(null))

const handleClick = (index: number) => {
  squares.value[index] = 'X'

  if (isXNext.value) {
    squares.value[index] = 'X'
  } else {
    squares.value[index] = 'O'
  }

  isXNext.value = !isXNext.value
}

const isXNext = ref(true)
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-3 mt-1 ml-1">
    <Square
      @click="handleClick"
      :value="square"
      :index
      v-for="(square, index) in squares"
      :key="index"
    />
  </div>
</template>
