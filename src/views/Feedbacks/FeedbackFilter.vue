<script setup>
import { reactive } from 'vue'
import useStore from '@/hooks/useStore'
// import services from '@/services'

const emit = defineEmits(['select'])
const store = useStore('Global')
const state = reactive({
  hasError: false,
  filters: [
    {
      label: null,
      amount: null,
    },
  ],
})

const LABELS = {
  all: 'Todos',
  issue: 'Problemas',
  idea: 'Ideias',
  other: 'Outros',
}
const COLORS = {
  all: 'brand-info',
  issue: 'brand-danger',
  idea: 'brand-warning',
  other: 'brand-graydark',
}

function applyFiltersStructure(summary) {
  return Object.keys(summary).reduce((acc, cur) => {
    const currentFilter = {
      label: LABELS[cur],
      color: COLORS[cur],
      amount: summary[cur],
    }

    if (cur === 'all') {
      currentFilter.active = true
    } else {
      currentFilter.type = cur
    }
    return [...acc, currentFilter]
  }, [])
}

try {
  // const { data } = await services.feedbacks.getSummary()
  throw new Error('test')
  // state.filters = applyFiltersStructure(data)
} catch (error) {
  state.hasError = !!error
  state.filters = applyFiltersStructure({
    all: 0,
    issue: 0,
    idea: 0,
    other: 0,
  })
}

function handleSelect({ type }) {
  if (store.isLoading) return

  state.filters = state.filters.map((filter) => {
    if (filter.type === type) {
      return { ...filter, active: true }
    }
    return { ...filter, active: false }
  })

  emit('select', type)
}
</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-2xl font-regular text-gray-600">Filtros</h1>

    <ul class="flex sm:flex-col mt-3 list-none">
      <li
        v-for="filter in state.filters"
        :key="filter.label"
        class="flex flex-center justify-between px-4 py-1 rounded cursor-pointer"
        :class="{ 'bg-gray-200 bg-opacity-50': filter.active }"
        @click="handleSelect(filter)"
      >
        <div class="flex items-center">
          <span
            class="inline-block w-2 h-2 mr-2 rounded-full"
            :class="`bg-${filter.color}`"
          />
          {{ filter.label }}
        </div>

        <span
          class="font-bold"
          :class="
            filter.active ? `text-${filter.color}` : 'text-brand-graydark'
          "
        >
          {{ filter.amount }}
        </span>
      </li>
    </ul>
  </div>
</template>
