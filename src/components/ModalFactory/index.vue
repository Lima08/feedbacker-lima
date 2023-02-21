<script setup>
import { reactive } from 'vue'

const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'
const state = reactive({
  isActive: false,
  components: {},
  props: {},
  with: DEFAULT_WIDTH,
})

function handleModalToggle({ status }) {
  console.log('modal toggle', status)
}
</script>
<template>
  <Teleport to="body">
    <div
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      @onClick="handleModalToggle"
    >
      <div class="fixed mx-10">
        <div
          class="flex flex-col overflow-hidden bg-white rounded-lg animate__animated animate__fadeInDown animate__faster"
        >
          <div class="flex flex-col px-12 py-10 bg-white">
            <component :is="state.component" />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
