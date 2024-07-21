<script setup lang="ts">
import { ref } from 'vue'

type Props = {
  value: string | null
  index: number
  isWinning: boolean
}
const props = defineProps<Props>()

type Emits = {
  click: [index: number]
}

defineEmits<Emits>()
</script>

<template>
  <button
    @click="$emit('click', props.index)"
    class="-mr-[1px] -mt-[1px] border border-[#909090] font-bold text-2xl flex items-center justify-center w-[34px] h-[34px] leading-[34px]"
    :class="{ 'text-red-500': isWinning }"
  >
    {{ props.value }}
  </button>
</template>
