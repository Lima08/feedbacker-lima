<script setup>
import { reactive, onMounted, onBeforeUnmount } from 'vue'
import useModal from '@/hooks/useModal'
import ModalLogin from '@/components/ModalLogin/index.vue'
import ModalCreateAccount from '@/components/ModalCreateAccount/index.vue'

const DEFAULT_WIDTH = 'w-3/4 lg:w-2/4'

const state = reactive({
  isActive: false,
  component: '',
  props: {},
  width: DEFAULT_WIDTH,
})

const modalList = {
  ModalLogin,
  ModalCreateAccount,
}

const modal = useModal()

onMounted(() => {
  modal.listen(handleModalToggle)
})

onBeforeUnmount(() => {
  modal.off(handleModalToggle)
})

function handleModalToggle(payload) {
  if (payload.status) {
    state.component = payload.component
    state.props = payload.props
    state.width = payload.width ?? DEFAULT_WIDTH
  } else {
    state.component = {}
    state.props = {}
    state.width = DEFAULT_WIDTH
  }

  state.isActive = payload.status
}
</script>
<template>
  <Teleport to="body">
    <div
      v-if="state.isActive"
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      @click="handleModalToggle({ status: false })"
    >
      <div class="fixed mx-10 max-w-lg" :class="state.width" @click.stop>
        <div
          class="flex flex-col overflow-hidden bg-white rounded-lg animate__animated animate__fadeInDown animate__faster"
        >
          <div class="flex flex-col px-12 py-10 bg-white">
            <component :is="modalList[state.component]" />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
