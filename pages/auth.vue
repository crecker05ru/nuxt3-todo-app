<template>
  <div>
    <div class="auth-container">
      <h1>Auth</h1>
      <input type="text" placeholder="email" class="auth" v-model="email" />
      <input
        type="password"
        placeholder="password"
        class="auth"
        v-model="password"
      />
      <button type="button" @click="authorize">login</button>
      <button type="button" @click="redirectToBack">back</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "auth",
  setup() {
    const router = useRouter();
    const email = ref(null);
    const password = ref(null);
    const loading = ref(null);
    const error = ref(null);
    const loginMode = ref(false);

    const login = () => {};
    const register = () => {};

    const redirectToBack = () => {
      router.push("/");
    };
    const authorize = async () => {
      loading.value = true;
      let err;
      if (loginMode.value) {
        const response = await $fetch("/api/user/login", {
          method: "POST",
          body: {
            email: email.value,
            password: password.value,
          },
        });
        err = response.error;
      } else {
        const response = await $fetch("/api/user/create", {
          method: "POST",
          body: {
            email: email.value,
            password: password.value,
            passwordConfirm: passwordConfirm.value,
          },
        });
        err = response.error;
      }
      loading.value = false;
      if (err) {
        error.value = err;
        setTimeout(() => (error.value = null), 3000);
      } else {
        location.href = "/";
      }
    };

    return {
      email,
      password,
      authorize,
      redirectToBack,
    };
  },
});
</script>
