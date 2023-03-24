<script setup>
import Loading from './Loading.vue'
import Copy from './Copy.vue'
import ChevronDown from './ChevronDown.vue'

const props = defineProps(['name', 'size', 'color'])
const icons = {
  Loading,
  Copy,
  ChevronDown,
}
</script>
<template>
  <component :is="icons[props.name]" v-bind="props" />
</template>
