<script setup>
import ContentLoader from '@/components/ContentLoader/index.vue'
</script>

<template>
  <div class="bg-gray-100 rounded-md">
    <div class="flex justify-between px-4">
      <content-loader
        class="mt-3 rounded"
        width="20%"
        height="30px"
        animation-duration="1s"
      />
      <content-loader
        class="mt-3 rounded"
        width="20%"
        height="30px"
        animation-duration="1.5s"
      />
    </div>

    <content-loader
      class="mt-3 rounded"
      width="100%"
      height="30px"
      animation-duration="2s"
    />

    <content-loader
      class="mt-3 rounded"
      width="60%"
      height="30px"
      animation-duration="2s"
    />
    <content-loader
      class="mt-3 rounded"
      width="70%"
      height="30px"
      animation-duration="1.7s"
    />
  </div>
</template>
