<script setup>
import CustomHeader from '@/views/Home/CustomHeader.vue'
import Contact from '@/views/Home//Contact.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import useModal from '@/hooks/useModal'

const router = useRouter()
const modal = useModal()

onMounted(() => {
  const token = window.localStorage.getItem('token')
  if (token) {
    router.push({ name: 'Feedbacks' })
  }
})

function handleLogin() {
  modal.open({ component: 'ModalLogin' })
}

function handleCreateAccount() {
  modal.open({ component: 'ModalCreateAccount' })
}
</script>

<template>
  <custom-header @login="handleLogin" @create-account="handleCreateAccount" />
  <contact />

  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">
      Feedbacker &copy; 2023 By Lima
    </p>
  </div>
</template>
