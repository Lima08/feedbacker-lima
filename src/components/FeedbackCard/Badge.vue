<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    require: true,
    type: String,
  },
})

const label = computed(() => {
  if (props.type === 'ISSUE') return 'problema'
  if (props.type === 'IDEA') return 'ideia'
  return 'outros'
})

const classColor = computed(() => {
  if (props.type === 'ISSUE') return 'brand-danger'
  if (props.type === 'IDEA') return 'brand-warning'
  return 'brand-graydark'
})
</script>

<template>
  <span
    class="rounded-full p-2 text-xs font-black text-white uppercase"
    :class="`bg-${classColor}`"
  >
    {{ label }}
  </span>
</template>
