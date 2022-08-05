<template>
    <div>
        <div class="auth-container">
            <h1>Auth</h1>
            <input type="text" placeholder="email" class="auth" v-model="email">
            <input type="password" placeholder="password" class="auth" v-model="password">
        </div>
    </div>
</template>
<script>
import { defineComponent,ref } from '@vue/composition-api'

export default defineComponent({
    name: 'auth',
    setup() {
        const email = ref('')
        const password = ref('')
        const loading = ref('')
        const error = ref(null)

const authorize = async () => {
  loading.value = true
  let err
  if (loginMode.value) {
    const response = await $fetch("/api/user/login", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    })
    err = response.error
  } else {
    const response = await $fetch("/api/user/create", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value,
      },
    })
    err = response.error
  }
  loading.value = false
  if (err) {
    error.value = err
    setTimeout(() => (error.value = null), 3000)
  } else {
    location.href = "/"
  }
}

        return {
            email,
            password,
            authorize
        }
    },
})
</script>
