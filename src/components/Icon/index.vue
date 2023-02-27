<script setup>
import Loading from './Loading.vue'
import Copy from './Copy.vue'

const props = defineProps(['name', 'size', 'color'])
const icons = {
  Loading,
  Copy,
}
</script>
<template>
  <component :is="icons[props.name]" v-bind="props" />
</template>
