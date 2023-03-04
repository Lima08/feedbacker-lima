<script setup>
import LoggedHeader from '@/components/LoggedHeader/index.vue'
import FeedbackFilter from '@/views/Feedbacks/FeedbackFilter.vue'
import FilterLoader from './FilterLoader.vue'
</script>

<template>
  <logged-header />

  <div class="flex justify-center items-center bg-brand-gray">
    <div class="flex flex-col justify-center h-64 text-center">
      <h1 class="font-black text-gray-800 text-4xl">Feedbacks</h1>
      <p class="text-gray-800 text-lg font-regular">
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
          />
          <!-- TODO: Não está funcionando  -->
          <template #fallback><filter-loader /></template>
        </suspense>
      </div>

      <div class="col-start-2 col-span-2">
        <ul class="">
          <li class="mb-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              inventore reiciendis, nisi ducimus atque corrupti, quam dolores
              sapiente officia neque labore esse modi nemo culpa debitis
              distinctio eveniet accusamus suscipit.
            </p>
          </li>
          <li class="mb-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              inventore reiciendis, nisi ducimus atque corrupti, quam dolores
              sapiente officia neque labore esse modi nemo culpa debitis
              distinctio eveniet accusamus suscipit.
            </p>
          </li>
          <li class="mb-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              inventore reiciendis, nisi ducimus atque corrupti, quam dolores
              sapiente officia neque labore esse modi nemo culpa debitis
              distinctio eveniet accusamus suscipit.
            </p>
          </li>
          <li class="mb-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              inventore reiciendis, nisi ducimus atque corrupti, quam dolores
              sapiente officia neque labore esse modi nemo culpa debitis
              distinctio eveniet accusamus suscipit.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
