<script setup>
import ContentLoader from '@/components/ContentLoader/index.vue'
</script>

<template>
  <content-loader
    class="flex flex-col items-center rounded"
    width="100%"
    height="200px"
    animation-duration="0s"
  >
    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="30px"
      animation-duration="2.7s"
    />
    <content-loader
      class="mt-3 rounded"
      width="80%"
      height="30px"
      animation-duration="2.5s"
    />
    <content-loader
      class="mt-3 rounded"
      width="80%"
      height="30px"
      animation-duration="2.5s"
    />
    <content-loader
      class="mt-3 rounded"
      width="70%"
      height="30px"
      animation-duration="2.3s"
    />
  </content-loader>
</template>
