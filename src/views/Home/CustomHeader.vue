<script setup>
const emit = defineEmits(['login', 'createAccount'])
</script>

<template>
  <header class="header">
    <div class="header-group">
      <div class="flex justify-between py-10 items-center">
        <div class="w-28 lg:w-36">
          <img
            class="w-full"
            src="@/assets/images/logo_white.png"
            alt="feedbacker logo"
          />
        </div>

        <div class="flex">
          <button
          id="cta-create-account-button"
            @click="emit('createAccount')"
            class="px-6 py-2 font-bold rounded-full text-white focus:outline-none"
          >
            Crie uma conta
          </button>
          <button
            @click="emit('login')"
            class="px-6 py-2 font-bold rounded-full bg-white text-brand-main focus:outline-none"
          >
            Entrar
          </button>
        </div>
      </div>

      <div class="flex flex-col mt-28">
        <h1 class="text-4xl font-black text-white">
          Tenha um feedback. <br />
          E faça seus clientes mais <br class="hidden lg:inline-block" />
          felizes!
        </h1>
        <p class="text-lg font-medium text-white">
          Receba ideias, reclamações e feedbacks com um
          <br class="hidden lg:inline-block" />
          simples widget na página.
        </p>
        <div>
          <button
          @click="emit('createAccount')"
            class="px-6 py-2 font-bold mt-10 bg-white rounded-full text-brand-main focus:outline-none"
          >
            Crie uma conta grátis
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header {
  @apply flex justify-center w-full bg-brand-main;
  height: 700px;
}

.header-group {
  @apply flex flex-col w-4/5 max-w-6xl;
}

@media (min-width: 640px) {
  .header-group {
    background-image: url(@/assets/images/blue-balloon.png);
    background-size: 638px;
    background-position: 90% 100%;
    background-repeat: no-repeat;
  }
}
</style>
