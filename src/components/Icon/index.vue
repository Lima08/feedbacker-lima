<script setup>
import Loading from './Loading.vue'

const props = defineProps(['name', 'size', 'color'])
const icons = {
  Loading,
}
</script>
<template>
  <component :is="icons[props.name]" v-bind="props" />
</template>
