<script setup>
import { reactive } from 'vue'
import useModal from '@/hooks/useModal'
import { useField } from 'vee-validate'
import {
  validateEmptyAndLength3,
  validateEmptyAndEmail,
} from '@/utils/validators'
import services from '@/services'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import Icon from '@/components/Icon/index.vue'

const modal = useModal()
const router = useRouter()
const toast = useToast()

const { value: nameValue, errorMessage: nameErrorMessage } = useField(
  'name',
  validateEmptyAndLength3,
)

const { value: emailValue, errorMessage: emailErrorMessage } = useField(
  'email',
  validateEmptyAndEmail,
)

const { value: passwordValue, errorMessage: passwordErrorMessage } = useField(
  'password',
  validateEmptyAndLength3,
)

const state = reactive({
  isLoading: false,
  hasError: false,
  name: {
    value: nameValue,
    errorMessage: nameErrorMessage,
  },
  email: {
    value: emailValue,
    errorMessage: emailErrorMessage,
  },
  password: {
    value: passwordValue,
    errorMessage: passwordErrorMessage,
  },
})

async function login() {
  const { data } = await services.auth.login({
    email: state.email.value,
    password: state.password.value,
  })

  window.localStorage.setItem('token', data.token)
  router.push({ name: 'Feedbacks' })
  state.isLoading = false
  closeModal()
}

async function handleSubmit() {
  try {
    toast.clear()
    state.isLoading = true
    const { error } = await services.auth.register({
      name: state.name.value,
      email: state.email.value,
      password: state.password.value,
    })

    if (!error) return login()

    if (error.status === 400) toast.error('Erro ao criar a conta')

    state.isLoading = false
  } catch (error) {
    state.isLoading = false
    state.hasError = !!error
    toast.error('Erro inesperado! Tente novamente.')
  }
}

function closeModal() {
  modal.close()
}
</script>

<template>
  <div class="flex justify-between" id="create-account-modal">
    <h1 class="font-black text-gray-800 text-4xl">Crie sua conta</h1>

    <button
      class="text-gray-600 text-4xl focus:outline-none"
      @click="closeModal"
    >
      &times;
    </button>
  </div>

  <div class="mt-16">
    <form @submit.prevent="handleSubmit" class="flex flex-col">
      <label class="block">
        <span class="text-gray-800 font-medium text-lg">Nome</span>

        <input
          v-model="state.name.value"
          type="text"
          placeholder="Ex: João Lima"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-3 rounded focus:outline-none"
          :class="
            !!state.name.errorMessage
              ? 'border-brand-danger'
              : 'border-transparent'
          "
        />

        <span
          class="block font-medium text-brand-danger"
          v-if="!!state.name.errorMessage"
          >{{ state.name.errorMessage }}</span
        >
      </label>

      <label class="block mt-9">
        <span class="text-gray-800 font-medium text-lg"> E-mail</span>

        <input
          v-model="state.email.value"
          type="email"
          placeholder="joao.gomes@gmail.com"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-3 rounded focus:outline-none"
          :class="
            !!state.email.errorMessage
              ? 'border-brand-danger'
              : 'border-transparent'
          "
        />

        <span
          class="block font-medium text-brand-danger"
          v-if="!!state.email.errorMessage"
          >{{ state.email.errorMessage }}</span
        >
      </label>

      <label class="block mt-9">
        <span class="text-gray-800 font-medium text-lg"> Senha</span>
        <input
          placeholder="***"
          type="password"
          v-model="state.password.value"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-3 rounded focus:outline-none"
          :class="
            !!state.password.errorMessage
              ? 'border-brand-danger'
              : 'border-transparent'
          "
        />

        <span
          class="block font-medium text-brand-danger"
          v-if="!!state.password.errorMessage"
          >{{ state.password.errorMessage }}</span
        >
      </label>

      <div class="mt-10">
        <button
          class="bg-brand-main text-white py-3 px-8 rounded-full font-bold focus:outline-none transition-all duration-150"
          type="submit"
          :disabled="state.isLoading"
          :class="{ 'opacity-50': state.isLoading, 'max-w-24': true }"
        >
          <Icon v-if="state.isLoading" name="Loading" class="animate-spin" />
          <span v-else>Entrar</span>
        </button>
      </div>
    </form>
  </div>
</template>
