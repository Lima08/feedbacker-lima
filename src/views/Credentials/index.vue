<script setup>
import { reactive } from 'vue'
import services from '@/services'
import useStore from '@/hooks/useStore'
import loggedHeader from '@/components/LoggedHeader/index.vue'
import ContentLoader from '@/components/ContentLoader/index.vue'
import Icon from '@/components/Icon/index.vue'
import { setApiKey } from '@/store/user'
import { useToast } from 'vue-toastification'

const toast = useToast()
const store = useStore()
const state = reactive({
  isLoading: false,
})

async function handleGenerateApiToken() {
  try {
    toast.clear()
    state.isLoading = true

    const { data } = await services.user.generateApiToken()
    setApiKey(data.apiKey)

    toast.success('ApiKey gerada com sucesso!!')
  } catch (error) {
    toast.error('Erro ao gerar nova apiKey')
  } finally {
    state.isLoading = false
  }
}

async function handleCopy() {
  try {
    toast.clear()
    await navigator.clipboard.writeText(store.User.currentUser.apiKey)
    toast.success('Copiado com sucesso!')
  } catch (error) {
    toast.error('Erro ao copiar')
  }
}
</script>

<template>
  <logged-header />

  <div class="flex justify-center items-center bg-brand-gray">
    <div class="flex flex-col justify-center h-64 text-center">
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

      <p class="text-gray-800 text-lg font-regular mt-2">
        Este aqui é a sua chave de api
      </p>

      <content-loader
        v-if="store.Global.isLoading || state.isLoading"
        class="mb-10 rounded"
        width="w-full lg:w-3/4"
        height="40px"
      />

      <div
        class="flex justify-between mb-10 bg-brand-gray rounded py-2 px-6 w-full lg:w-3/4"
        v-else
      >
        <span>{{ store.User.currentUser?.apiKey }}</span>

        <div class="flex ml-20 gap-3">
          <Icon name="Copy" size="24" color="gray" @click="handleCopy" />
          <Icon
            name="Loading"
            size="24"
            color="gray"
            @click="handleGenerateApiToken"
          />
        </div>
      </div>

      <p class="text-gray-800 text-lg font-regular">
        Coloque o script abaixo no seu site para começar a receber feedbacks
      </p>

      <content-loader
        v-if="store.Global.isLoading || state.isLoading"
        class="mb-10 rounded"
        width="w-full lg:w-3/4"
        height="40px"
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
