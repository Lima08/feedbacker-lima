<script setup>
import useStore from '@/hooks/useStore'
import { clearCurrentUser } from '@/store/user'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore('User')
const router = useRouter()

const logoutLabel = computed(() => {
  if (!store.currentUser?.name) {
    return '... (sair)'
  }

  return `${store.currentUser.name} (Sair)`
})

function logOut() {
  window.localStorage.clear('token')
  clearCurrentUser()
  router.push({ name: 'Home' })
}
</script>

<template>
  <header class="bg-brand-main h-32 flex justify-center">
    <div class="flex justify-between items-center w-4/5">
      <div class="w-28 lg:w-36">
        <img class="w-full" src="@/assets/images/logo_white.png" alt="logo" />
      </div>

      <div class="flex">
        <ul class="flex list-none">
          <li
            class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
          >
            <button @click="router.push({ name: 'Credentials' })">
              Credenciais
            </button>
          </li>

          <li
            class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
          >
            <button @click="router.push({ name: 'Feedbacks' })">
              Feedbacks
            </button>
          </li>
          <li>
            <button
              @click="logOut"
              class="px-6 py-2 mr-2 font-bold bg-white text-brand-main rounded-full cursor-pointer focus:outline-none"
            >
              {{ logoutLabel }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
