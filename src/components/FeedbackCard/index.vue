<script setup>
// import badge from './Badge.vue'

const props = defineProps({
  feedback: { type: Object, required: true },
})
console.log('🚀 ~ file: index.vue:7 ~ props:', props)
// function handleToggle () {

// }
</script>

<template>
  <div class="flex flex-col px-8 py-6 rounded cursor-pointer bg-brand-gray">
    <div class="flex justify-between items-baseline pb-5">
      <!-- <badge :type="feedback.type" /> -->
      <span
        class="rounded-full flex items-center font-regular text-brand-graydark"
        >{{ feedback.createdAt }}</span
      >
    </div>

    <p class="pb-5">
      {{ feedback.text }}
    </p>

    <div class="flex flex-wrap gap-4">
      <div class="flex flex-col flex-grow">
        <h3 class="font-bold">PÁGINA</h3>
        <p>{{ feedback.page }}</p>
      </div>
      <div class="flex flex-col flex-grow">
        <h3 class="font-bold">USUÁRIO</h3>
        <p>{{ feedback.fingerprint }}</p>
      </div>
      <div class="flex flex-col flex-grow-0">
        <h3 class="font-bold">DISPOSITIVO</h3>
        <p>{{ feedback.device }}</p>
      </div>
    </div>

    <div class="relative w-full">
      <span class="absolute bottom-2 right-2">&darr;</span>
    </div>
  </div>
</template>
