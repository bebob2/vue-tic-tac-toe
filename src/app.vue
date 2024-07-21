<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Square from './components/square.vue'
import Board from './components/board.vue'

const count = ref(0)

const increment = () => {
  count.value++
}

onMounted(() => {
  console.log('mounted')
})
</script>

<template>
  <div class="flex">
    <Board />
  </div>
</template>
