<script setup lang="ts">
import { onMounted } from 'vue'
import Board from './components/board.vue'

onMounted(() => {
  console.log('mounted')
})
</script>

<template>
  <div class="flex">
    <Board />
  </div>
</template>
