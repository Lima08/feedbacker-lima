<script setup>
import { watch } from 'vue'
import ModalFactory from '@/components/ModalFactory'
import { useRoute, useRouter } from 'vue-router'
import services from './services'
import { setCurrentUser } from './store/user'

const route = useRoute()
const router = useRouter()

watch(
  () => route.path,
  async () => {
    if (route.meta.hasAuth) {
      const token = window.localStorage.getItem('token')
      if (!token) {
        router.push({ name: 'Home' })
        return
      }
    }
    const { data } = await services.user.getMe()
    setCurrentUser(data)
  },
)
</script>

<template>
  <modal-factory />
  <router-view />
</template>
