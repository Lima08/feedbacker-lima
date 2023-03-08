<script setup>
import { reactive } from 'vue'
import Badge from './Badge.vue'
import Icon from '@/components/Icon/index.vue'
import { getDiffTimeBetweenCurrentDate } from '@/utils/date'
import { wait } from '@/utils/timeout'

const props = defineProps({
  feedback: { type: Object, required: true },
  isOpened: { type: Boolean, default: false },
})

const state = reactive({
  isOpened: props.isOpened,
  isClosing: !props.isOpened,
})

async function handleToggle() {
  state.isClosing = true

  await wait(250)
  state.isOpened = !state.isOpened
  state.isClosing = false
}
</script>

<template>
  <div
    class="px-8 py-6 rounded cursor-pointer bg-brand-gray"
    @click="handleToggle"
  >
    <div class="flex justify-between items-baseline pb-5">
      <badge :type="feedback.type" />
      <span
        class="rounded-full flex items-center font-regular text-brand-graydark"
        >{{ getDiffTimeBetweenCurrentDate(feedback.createdAt) }}</span
      >
    </div>

    <p class="pb-5">
      {{ feedback.text }}
    </p>

    <div
      :class="{ animate__fadeOutUp: state.isClosing }"
      class="flex mt-8 animate__animated animate__fadeInDown animate__faster"
      v-if="state.isOpened"
    >
      <div class="flex flex-col w-1/2">
        <div class="flex flex-col">
          <span class="font-bold text-gray-400 uppercase select-none">
            PÁGINA
          </span>
          <span class="font-medium text-gray-700 break-words">
            {{ feedback.page }}
          </span>
        </div>

        <div class="flex flex-col">
          <span class="font-bold text-gray-400 uppercase select-none">
            DISPOSITIVO
          </span>
          <span class="font-medium text-gray-700">
            {{ feedback.device }}
          </span>
        </div>
      </div>

      <div class="flex flex-col w-1/2">
        <span class="font-bold text-gray-400 uppercase select-none">
          USUÁRIO
        </span>
        <span class="font-medium text-gray-700">
          {{ feedback.fingerprint }}
        </span>
      </div>
    </div>

    <div class="relative w-full" v-else>
      <span class="absolute bottom-2 right-2"
        ><icon name="ArrowDown" color="#7E7E7E"
      /></span>
    </div>
  </div>
</template>
