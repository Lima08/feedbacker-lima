<script setup>
import CustomHeader from '@/views/Home/CustomHeader.vue'
import Contact from '@/views/Home//Contact.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  const token = window.localStorage.getItem('token')
  if (token) {
    router.push({ name: 'feedback' })
  }
})

function handleLogin() {
  console.log('login')
}

function createAccount() {
  console.log('createAccount')
}
</script>

<template>
  <custom-header @login="handleLogin" @create-account="createAccount" />
  <contact />

  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">
      Feedbacker &copy; 2023 By Lima
    </p>
  </div>
</template>
