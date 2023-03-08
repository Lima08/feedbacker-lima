<script setup>
import Loading from './Loading.vue'
import Copy from './Copy.vue'
import ArrowDown from './ArrowDown.vue'

const props = defineProps(['name', 'size', 'color'])
const icons = {
  Loading,
  Copy,
  ArrowDown,
}
</script>
<template>
  <component :is="icons[props.name]" v-bind="props" />
</template>
