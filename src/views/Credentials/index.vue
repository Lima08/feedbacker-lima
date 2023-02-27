<script setup>
import loggedHeader from '@/components/LoggedHeader/index.vue'
import useStore from '@/hooks/useStore'
import Icon from '@/components/Icon/index.vue'
import ContentLoader from '@/components/ContentLoader/index.vue'
import { ref } from 'vue'

const store = useStore()
const state = ref({
  isLoading: false,
})
</script>

<template>
  <logged-header />

  <div class="flex justify-center items-center bg-brand-gray">
    <div class="flex flex-col justify-center h-72 text-center">
      <h1 class="font-black text-gray-800 text-4xl">Credenciais</h1>
      <p class="text-gray-800 text-lg font-regular">
        Guia de instalação e geração de suas credenciais
      </p>
    </div>
  </div>

  <div class="flex w-full h-full justify-center py-10">
    <div class="flex flex-col w-4/5">
      <h1 class="font-black text-gray-800 text-4xl mb-10">
        Instalação e configuração
      </h1>

      <p class="text-gray-800 text-lg font-regular">
        Este aqui é a sua chave de api
      </p>

      <content-loader
        v-if="store.Global.isLoading || state.isLoading"
        class="rounded"
        width="600px"
        height="50px"
      />

      <div
        class="flex justify-between mb-10 bg-brand-gray rounded py-2 px-6 w-full lg:w-3/4"
        v-else
      >
        <span>{{ store.User.currentUser?.apiKey }}</span>

        <div class="flex ml-20 gap-3">
          <Icon name="Copy" size="24" color="gray" />
          <Icon name="Loading" size="24" color="gray" />
        </div>
      </div>

      <p class="text-gray-800 text-lg font-regular">
        Coloque o script abaixo no seu site para começar a receber feedbacks
      </p>

      <content-loader
        v-if="store.Global.isLoading || state.isLoading"
        class="rounded"
        width="600px"
        height="50px"
      />

      <div
        class="py-3 pl-5 pr-20 mt-2 rounded bg-brand-gray w-full lg:w-3/4 overflow-x-scroll"
        v-else
      >
        <pre>
&lt;script src="http://lima08-feedbacker-widget.neflify.app?apikey={{
            store.User.currentUser?.apiKey
          }}/&gt;&lt;script&gt;&lt;/script&gt;</pre
        >
      </div>
    </div>
  </div>
</template>
