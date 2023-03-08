<script setup>
import { reactive, onMounted } from 'vue'
import { useToast } from 'vue-toastification'
import FeedbackFilter from '@/views/Feedbacks/FeedbackFilter.vue'
import LoggedHeader from '@/components/LoggedHeader/index.vue'
import FeedbackCard from '@/components/FeedbackCard/index.vue'
import LoadingCard from '@/components/FeedbackCard/LoadingCard.vue'
import FilterLoader from './FilterLoader.vue'
import services from '@/services'

const toaster = useToast()
const state = reactive({
  isLoading: false,
  feedbacks: [],
  hasError: false,
  currentFeedbackType: '',
  pagination: { limit: 5, offset: 0 },
})

async function fetchFeedbacks() {
  try {
    state.hasError = false
    state.isLoading = true
    const { data } = await services.feedbacks.getAll({
      ...state.pagination,
      type: state.currentFeedbackType,
    })

    state.feedbacks = data.results
    state.pagination = data.pagination
    state.isLoading = false
  } catch (error) {
    state.hasError = !!error
    toaster.error('Erro ao carregar dados. Entre em contato com o suporte')
  } finally {
    state.isLoading = false
  }
}

function handleFilter(type) {
  state.currentFeedbackType = type
  state.feedbacks = []
  fetchFeedbacks()
}

onMounted(async () => {
  await fetchFeedbacks()
})
</script>

<template>
  <logged-header />

  <div class="flex justify-center items-center bg-brand-gray">
    <div class="flex flex-col justify-center h-64 text-center">
      <h1 class="font-black text-gray-800 text-4xl">Feedbacks</h1>
      <p class="text-gray-800 text-lg font-regular mt-2">
        Detalhes de todos os feedbacks recebidos.
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center mb-4">
    <div class="grid grid-cols-3 w-4/5 gap-4 mb-8">
      <h1
        class="col-start-1 col-end-3 mb-8 mt-8 text-3xl font-black text-gray-700"
      >
        Listagem
      </h1>

      <div class="col-start-1 col-span-1">
        <suspense>
          <feedback-filter
            class="animate__animated animate__fadeIn animate__faster"
            @select="handleFilter"
          />
          <template #fallback>
            <filter-loader />
          </template>
        </suspense>
      </div>

      <div class="col-start-2 col-span-3 px-10">
        <p
          v-if="state.hasError"
          class="text-lg text-center text-gray-800 font-regular"
        >
          Aconteceu um erro ao carregar feedbacks
        </p>

        <div class="flex flex-col gap-5" v-if="state.isLoading">
          <loading-card />
          <loading-card />
          <loading-card />
        </div>

        <p
          v-if="!state.feedbacks.length && !state.isLoading"
          class="text-lg text-center text-gray-800 font-regular pt-10"
        >
          Ainda nenhum feedback recebido =(
        </p>

        <feedback-card
          v-else
          v-for="(feedback, index) in state.feedbacks"
          :key="feedback.id"
          :is-opened="index === 0"
          class="mb-8"
          :feedback="feedback"
        />
      </div>
    </div>
  </div>
</template>
